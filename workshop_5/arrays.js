// Creating an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Adding an element to the end of the array
numbers.push(6); // numbers is now [1, 2, 3, 4, 5, 6]

// Changing an element in the array
numbers[0] = 10; // numbers is now [10, 2, 3, 4, 5, 6]

// Removing the last element from the array
numbers.pop(); // numbers is now [10, 2, 3, 4, 5]

// Creating an array of strings
let fruits = ["apple", "banana", "cherry"];

// Adding an element to the beginning of the array
fruits.unshift("date"); // fruits is now ["date", "apple", "banana", "cherry"]

// Changing an element in the array
fruits[1] = "blueberry"; // fruits is now ["date", "blueberry", "banana", "cherry"]

// Removing the first element from the array
fruits.shift(); // fruits is now ["blueberry", "banana", "cherry"]

// Creating an empty array
let emptyArray = [];

// Adding elements to the empty array
emptyArray.push(1);
emptyArray.push(2);
emptyArray.push(3); // emptyArray is now [1, 2, 3]

// Removing an element by index
let indexToRemove = 1;
emptyArray.splice(indexToRemove, 1); // emptyArray is now [1, 3]