const productsDiv = document.querySelector('#products');


const starFilled = (`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
    </svg>
`);
const star = (`
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
`);

fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        for (const product of data.products) {
            const div = document.createElement('div');
            div.classList.add('col');

            const filledStarCount = Math.round(product.rating);
            const emptyStarCount = 5 - filledStarCount; 
            const rating = starFilled.repeat(filledStarCount) + star.repeat(emptyStarCount); 
            

            div.innerHTML = (`
                <div class="card mb-3 h-100 product-card" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${product.thumbnail}" class="img-fluid rounded-start" alt="${product.title}">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body d-flex flex-column justify-content-between">
                            <h5 class="card-title">${product.title}</h5>
                            <div class="d-flex text-warning">
                                ${rating}
                            </div>
                            <p class="card-text"><small class="text-body-secondary">${product.description.slice(0, 100)}</small></p>
                        </div>
                        </div>
                    </div>
                </div>
            `);

            productsDiv.appendChild(div);
        }
    });