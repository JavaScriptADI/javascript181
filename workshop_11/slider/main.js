const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');

fetch(`https://dummyjson.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        console.log(product);
        document.querySelector('#product-title').innerText = product.title;

        document.querySelector('#product-desc').innerText = product.description;
        const sliderElem = document.querySelector('.carousel-inner');
        const carouselIndicators = document.querySelector('#carouselExampleAutoplaying > .carousel-indicators');
        product.images.forEach((image, i) => {
            const carouselItem = document.createElement('div');
            const carouselIndicator = document.createElement('button');

            carouselIndicator.setAttribute('type', 'button');
            carouselIndicator.setAttribute('data-bs-target', '#carouselExampleAutoplaying');
            carouselIndicator.setAttribute('data-bs-slide-to', `${i}`);
            carouselIndicator.setAttribute('aria-label', `Slide ${i}`);


            carouselItem.className = "carousel-item";
            if (i === 0) {
                carouselItem.classList.add('active');
                carouselIndicator.setAttribute('aria-current', `true`);
                carouselIndicator.classList.add('active');

            }
            carouselItem.innerHTML = (`
                <img src="${image}" class="d-block w-100" alt="...">
            `)
            carouselIndicators.appendChild(carouselIndicator);

            sliderElem.appendChild(carouselItem);
        });
    });