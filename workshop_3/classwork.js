const a = false;
const b = false;

// A && B == !(A || B)
// true && true   | true
// false && true  | false
// true && false  | false
// false && false | false

// A || B == !(A && B)
// true || true   | true
// false || true  | true
// true || false  | true
// false || false | false

// !(A || B) == !A && !B
// !(A && B) == !A || !B

console.log(5 + 7);
console.log(a && b); 
console.log(a || b);
console.log(!a || !b);
console.log(!(a && b));


// 2
console.log("\n\nVote Checker");
const pid = "01005468912";
const age = 18;
// const eligibleToVote = (age >= 18) && (pid.length == 11);
console.log(`Personal ID length: ${pid.length}`);
console.log(`Age: ${age}`);

if ((age >= 18) && (pid.length == 11)) {
    console.log(`You are eligible to vote`);
} else {
    console.log(`You are not eligible to vote`);
}

console.log("\n\nGrading System");

// const score = Number(prompt("Enter score: "));
const score = 54;
let grade = "F";

/*
91 - 100 | A
81 - 90  | B
71 - 80  | C
61 - 70  | D
51 - 60  | E
0 - 50   | F
*/

if (91 <= score && score <= 100) {
    grade = "A";
} else if (81 <= score && score <= 90) {
    grade = "B";
} else if (71 <= score && score <= 80) {
    grade = "C";
} else if (61 <= score && score <= 70) {
    grade = "D";
} else if (51 <= score && score <= 60) {
    grade = "E";
}

console.log(`Grade: ${grade}`);


console.log("\n\n[Task 4] Number Comparison");
const num = 5;
if (num < 10) {
    console.log("Less than");
} else if (num > 10) {
    console.log("Grater than");
} else {
    console.log("Equal!");
}
