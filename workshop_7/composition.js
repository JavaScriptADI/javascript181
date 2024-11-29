function add(a, b) {
    return a + b;
}

// Create function multiply without using multiplication (*) or using addition (+) operators!
function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i = add(i, 1)) {
        result = add(a, result);
    }
    return result;
}

let result = 7;
console.log(multiply(2, 5));
console.log(multiply(2, 5));
