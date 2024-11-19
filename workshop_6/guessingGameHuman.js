const secretNum = Number(prompt("What's your secret?"));

let min = 1;
let max = 100;
const guesses = [];
let isRunning = true;

while (isRunning) {
    const num = Math.floor((max + min) / 2);
    guesses.push(num);

    const answer = prompt(`My guess is ${num} (higher / lower / correct)`);
    // if (answer === null) {
    //     alert("Leaving so early?");
    //     break;
    // }
    // if (answer === 'higher') {
    //     min = num;
    // } else if (answer === 'lower') {
    //     max = num;
    // } else {
    //     alert(`I am Superior Your number was ${num}`);
    //     break;
    // }

    switch (answer) {
        case null:
            alert("Leaving so early?");
            isRunning = false;
            break;
        case "higher":
            min = num;
            break;
        case "lower":
            max = num;
            break;
        default:
            alert(`I am Superior Your number was ${num}`);
            isRunning = false;
            break;
    }
}

if (secretNum !== guesses[guesses.length - 1]) {
    alert("You are a cheater!");
}
alert(`I tried following numbers: ${guesses}; I won in ${guesses.length}`);