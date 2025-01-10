const searchForm = document.querySelector('#search');
const sortPriceBtn = document.querySelector('#sort-price');

const loginUrl = '/workshop_12/login/login_form.html'
const user = JSON.parse(localStorage.getItem('user'));
console.log(user);
if (!user || !user.accessToken) {
    window.location.href = loginUrl;
}



function refershToken() {
    fetch('https://dummyjson.com/auth/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            refreshToken: user.refershToken, // Optional, if not provided, the server will use the cookie
            expiresInMins: 30, // optional (FOR ACCESS TOKEN), defaults to 60 
        }),
        credentials: 'include' // Include cookies (e.g., accessToken) in the request
    })
        .then(response => {
            if (!response.ok) {
                localStorage.removeItem('user');
                window.location.href = loginUrl;
            }
        })
        .then(data => {
            localStorage.setItem('user', JSON.stringify({
                ...user,
                ...data,
            }))
        });
}

fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${user.accessToken}`
    }
})
    .then(response => {
        console.log(response);
        if (!response.ok) {
            localStorage.removeItem('user');
            window.location.href = loginUrl;
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })



document.querySelector('#logout-btn').addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = loginUrl;
});

function renderProducts(products) {
    const productsUl = document.querySelector('#products-list');
    products.forEach(product => {
        const li = document.createElement('li');
        li.classList.add('mb-3')
        li.innerHTML = (`
            ${product.title}: $${product.price} <button class="btn btn-primary">Add to Cart</button> 
        `);
        productsUl.appendChild(li);
    });
}

function getProducts() {
    fetch('https://dummyjson.com/products',
        {
            headers: {
                'Authorization': `Bearer ${user.accessToken}`
            }
        }
    )
        .then(res => res.json())
        .then(data => {
            const productsUl = document.querySelector('#products-list');
            productsUl.innerHTML = null;
            renderProducts(data.products);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    getProducts();
});

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    fetch(`https://dummyjson.com/products/search?q=${searchForm.search.value}`)
        .then(res => res.json())
        .then(data => {
            const productsUl = document.querySelector('#products-list');
            productsUl.innerHTML = null;
            renderProducts(data.products);
        });
});

sortPriceBtn.addEventListener('click', () => {
    console.log(sortPriceBtn.dataset.status);
    const productsUl = document.querySelector('#products-list');
    let order = null;
    if (sortPriceBtn.dataset.status === "0") {
        sortPriceBtn.dataset.status = "1";
        order = "asc";
    } else if (sortPriceBtn.dataset.status === "1") {
        sortPriceBtn.dataset.status = "2";
        order = "desc";
    } else {
        sortPriceBtn.dataset.status = "0";
        getProducts();
        console.log('default');
        return;
    }
    fetch(`https://dummyjson.com/products?sortBy=price&order=${order}`)
        .then(res => res.json())
        .then(data => {
        productsUl.innerHTML = null;
            renderProducts(data.products);
        });
})