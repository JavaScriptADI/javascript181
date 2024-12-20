const person = Object.freeze({
    name: "Nick",
    lastName: "Gurrman",
});

// person = Object.freeze(person);
person.name = "Mary";

console.log(person);