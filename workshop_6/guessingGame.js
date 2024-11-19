// 0 - 100
// 45

function generateSecretNumber() {
    return parseInt(Math.random() * 100 + 1)
}

function getNumber() {
    while (true) {
        const num = Number(prompt("Take a guess"));
        if (num < 0 || 100 < num) {
            alert("Please use correct numbers!");
            continue;
        }
        return num;
    }

}

// Computer vs Human
const secretNum = generateSecretNumber();
// const secretNum = parseInt(0.999999999999 * 99 + 1);
console.log(secretNum);
let guesses = [];

while (true) {
    const num = getNumber();
    guesses.push(num);
    if (num < secretNum) {
        alert(`Higher ${guesses}`);
    } else if (num > secretNum) {
        alert(`Lower ${guesses}`);
    } else {
        alert(`You guessed it in ${guesses.length} tries`);
        break;
    }
}