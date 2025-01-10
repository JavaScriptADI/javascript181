const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(loginForm.username.value);
    console.log(loginForm.password.value);

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: loginForm.username.value,
            password: loginForm.password.value,
            // expiresInMins: 1,
        })
    })
        .then(response => {
            console.log(response)
            if (!response.ok) {
                loginForm.username.classList.add('border-danger');
                loginForm.password.classList.add('border-danger');
            }
            return response.json();
        })
        .then(data => {
            if (data.accessToken) {
                localStorage.setItem('user', JSON.stringify(data));
                window.location.href = '/workshop_12/products/products.html'
            }
        })
});
