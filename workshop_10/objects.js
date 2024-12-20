const person = { // mutable
    name: "George",
    lastName: "Washington",
    name: "Leonard", // this will overwrite name property
};



const firstName = "George"; // immutable

console.log(firstName[0]);
firstName[0] = "L";
console.log(firstName[0]);

console.log(person["name"]);
person.name = "Nick";
console.log('Name got changed: ', person["name"]);
