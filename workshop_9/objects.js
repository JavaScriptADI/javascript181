const person = {
    name: "Luka",
    age: 23,
    pet: ["Dog"],
};

console.log(person["name"]);
console.log(person.age);


// add new property / attribute
person.car = "Tesla";
console.log(person.pet);

person.pet.push("Cat");

console.log(person);
console.log(person.pet);


// change existing property

person.age += 2;
console.log(person);

person.name = "Elon";
console.log(person);

// removing properties
delete person.age;
console.log(person);
