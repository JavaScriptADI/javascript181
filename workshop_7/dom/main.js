// const box = document.getElementById('box');
const box = document.querySelector('#box');
const div = document.querySelector('div');


console.log(div);
const divs = document.querySelectorAll('div');
console.log(divs);
for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = `This is div ${i + 1}`;
    divs[i].style.backgroundColor = 'red';
    divs[i].style.padding = '10px';
    divs[i].style.marginBottom = '10px';
}


console.log(box);
box.innerText = "Hello, World!";
box.style.backgroundColor = 'red';
box.style.color = 'white';
box.style.padding = '10px';
box.style.borderRadius = '5px';