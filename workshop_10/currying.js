function add(a) {
    return function(b) {
        return a + b;
    };
}

// array
// object
// string
// function
const addFive = add(5);
const addTwo = add(2);


console.log(addFive(7));
console.log(addFive(5));

console.log(addTwo(9));
console.log(addTwo(11));
