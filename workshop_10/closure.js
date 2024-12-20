function makeCounter(increment) { 
    let count = 0;
    return () => {
        count += increment;
        return count;
    }
}


const counter = makeCounter(1);
const counter2 = makeCounter(2);


console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

console.log(counter2()); // 2
console.log(counter2()); // 4
console.log(counter2()); // 6
