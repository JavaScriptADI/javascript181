const temps = [1, 7, 8, 4, 3];

// while (true) {
//     const userInput = parseFloat(prompt("What was the average temperature today?"));
//     if (Number.isNaN(userInput)) {
//         break;
//     }
//     temps.push(userInput);
// }

// temps[2] = 28;
temps.splice(2, 0, 28);
// console.log(`Day 1 when I started recording temperatures it was ${temps[0]} celsius`);
// console.log(`Day 2 when I started recording temperatures it was ${temps[1]} celsius`);
console.log(`We recorded temperatures for ${temps.length} days`);
for (let i = 0; i < temps.length; i++) {
    const tempInCelsius = temps[i];
    const targetTemp = Math.round(((tempInCelsius * (9 / 5)) + 32) * 100) / 100;

    console.log(`Day ${i + 1} when I started recording temperatures it was ${tempInCelsius}°C - ${targetTemp}°F`);
}