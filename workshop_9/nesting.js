const student = {
    name: "George",
    age: 23,
    car: {
        make: "Tesla",
        model: "Model S",
        color: "red",
        year: 2022,
        engine: {
            type: "Electric",
            power: "90kwh"
        }
    },
    friends: [
        {
            name: "Marry",
            age: 27,
            relation: 30
        },
        {
            name: "Nick",
            age: 37,
            relation: 98
        },
        {
            name: "George",
            age: 18,
            relation: 49
        },
        {
            name: "Mike",
            age: 25,
            relation: 66
        },
    ]
};

// "student name" has "make" + "model" car with "engine type" + "engine power" engine!
console.log(`${student.name} has ${student.car.make} ${student.car.model} car with ${student.car.engine.type} ${student.car.engine.power} engine!`);

console.log(`${student.friends[0].name} has a relation of ${student.friends[0].relation}`);

// for (const friend of student.friends) {
//     if (friend.relation >= 50) {
//         console.log(`${student.name} is good friends with ${friend.name}`);
//     }
// }


for (let i = 0; i < student.friends.length; i++) {
    if (student.friends[i].relation >= 50) {
        console.log(`${student.name} is good friends with ${student.friends[i].name}`);
    }
}
