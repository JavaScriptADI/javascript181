// let temp = Number(prompt("What is the temp right now?"));
let temp = 23;

if (temp > 24) {
    console.log("Turning on the conditioning");
    console.log("Success");
    console.log("Set target temperature to 24");
    console.log("Turbo mode");
} else {
    console.log("Air conditioning is off!");
}


if (temp > 34) {
    console.log("Let's go to aqua park!");
} else if (temp > 27) { // can be ommited
    console.log("Let's go swimming pool");
} else if (temp < 14) {
    console.log("Let's go to sauna");
} else {
    console.log("Get vaccinated!");
}