
function createProductDiv(product) {
    // console.log(product);
    const div = document.createElement('div');
    div.style.border = '1px solid black';
    div.style.borderRadius = '8px';
    div.style.padding = '1rem';

    div.innerHTML = (`
        <h3>${product.title}</h3>
        <p>${product.price}$</p>
        <img src="${product.thumbnail}"/>
    `);
    return div;
}

fetch('https://dummyjson.com/products')
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => {
        const productsDiv = document.querySelector('#products');
        for (const product of data.products) {
            productsDiv.appendChild(createProductDiv(product));
        }

        // for (let i = 0; i < data.products.length; i++) {
        //     console.log(data.products[i]);
        // }
        // console.log(data);
    })
    .catch((error) => {
        console.log("Something terrible has happened!");
    });
