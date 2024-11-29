const greet = () => {
    console.log('Hello');
}

const sub = (a, b) => a - b;

function add(a, b) { // this
    return a + b;
}

greet();

console.log(add(6, 4));
console.log(sub(10, 7));