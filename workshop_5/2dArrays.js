const treasureMap = [
    ["🗻", "🗻", "🗻", "🗻", "🌋"],
    ["🙍‍♂️", "🟩", "🟩", "🗻", "🪙"],
    ["🗻", "🟩", "🗻", "🗻", "🟩"],
    ["🗻", "🟩", "🗻", "🟩", "🟩"],
    ["🗻", "🟩", "🗻", "🟩", "🗻"],
    ["🗻", "🟩", "🗻", "🟩", "🗻"],
    ["🗻", "🟩", "🟩", "🟩", "🗻"],
    ["🗻", "🗻", "🗻", "🗻", "🗻"],
];

let x, y;
x = 0;
y = 1;

// console.log(treasureMap[0][treasureMap[0].length - 1]);
// console.log(treasureMap[1][4]);

for (let i = 0; i < treasureMap.length; i++) {
    // treasureMap[i];
    for (let j = 0; j < treasureMap[i].length; j++) {
        if (treasureMap[i][j] === "🪙") {
            console.log(`Gold is at ${i}, ${j}`)
        }
        // console.log(treasureMap[i][j]);
    }
}

while (true) {
    // console.log("\n\n\n");
    console.clear();
    // console.log(`Current Position: ${x}, ${y}`)
    for (const row of treasureMap) {
        console.log(row.join(""));
    }
    let direction = prompt("Where to? (a [left], w [up], s [down], d [right])");
    if (direction === null) {
        break;
    }
    let dx = x;
    let dy = y;

    if (direction === "a") {
        dx--;
    } else if (direction === "d") {
        dx++;
    } else if (direction === "w") {
        dy--;
    } else if (direction === "s") {
        dy++;
    }

    const nextCell = treasureMap[dy][dx];
    let yOutOfBounds = dy < 0 || treasureMap.length < dy;
    let xOutOfBounds = dx < 0 || treasureMap[y].length < dx;
    if (nextCell === "🪙") {
        alert("You win the game!");
        break;
    }

    if (nextCell != "🟩" || yOutOfBounds || xOutOfBounds) {
        alert("You cannot move there");
        continue;
    }

    treasureMap[y][x] = "🟩";
    treasureMap[dy][dx] = "🙍‍♂️";
    x = dx;
    y = dy;
}

