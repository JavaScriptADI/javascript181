let num = -99;

// [25 - 99]
let isInRange = 25 <= num && num <= 99;
// let isInRange = num >= 25 && 99 >= num;
console.log(`Is in range? ${isInRange}`);

// ]25, 99[
// let isOutsideRange = 25 > num || num > 99;
// let isOutsideRange = num < 25 || 99 < num;
let isOutsideRange = !isInRange;

console.log(`Is it outside of range? ${isOutsideRange}`)