// console.log(1);
// console.log(2);
// console.log(3);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= -10; i--) {
    console.log(i);
}


console.log('\nTask 5');
// let i = 1;
// while (i <= 10) {
//     console.log(i++);
// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('\nTask 6');
let s = 0;
// let i;
// for (i = 2; i < 20; i += 2) {
//     s += i;
// }

for (let i = 0; i < 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    if (i === 12) {
        break;
    } 
    s += i;
    console.log(i);
}

console.log(s);

