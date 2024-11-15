
// for (let i = 0; i < 1000; i ++) {
//     let num = parseInt(Math.random() * (991) + 11);
//     if (num < 10 || 1000 < num) {
//         console.log(`Went out of range ${num}`);
//         break;
//     }
//     // console.log();
// }

let mn;
let mx;
let charCode;
let chance;
// console.log(charCode);
let password = "";
for (let i = 0; i < 100; i++) {
    chance = Math.random();
    if (chance < 0.50) {
        // a - z
        mn = 97;
        mx = 122;
    } else if (chance < 0.70) {
        // A - Z
        mn = 65;
        mx = 90;
    } else {
        // 0 - 9
        mn = 48;
        mx = 57;
    }
    charCode = parseInt(Math.random() * (mx - mn + 1) + mn);
    password += String.fromCharCode(charCode);
}
console.log(password);

