/*
We promised our friend to go to movies and eat popcorn
based on our varibles did we lie to our friend
*/
let wentMovies = false;
let atePopcorn = true;
let weFullfiledOurPromise = wentMovies && atePopcorn;
let weLied = !wentMovies || !atePopcorn;

console.log(`Did we fullfil our promise? ${weFullfiledOurPromise}`);
console.log(`weFullfiledOurPromise !== weLied: ${weFullfiledOurPromise !== weLied}`);
console.log(`weFullfiledOurPromise === !weLied: ${weFullfiledOurPromise === !weLied}`);


// And Truth table
console.log("\nTruth table (AND)\n")
console.log(`true && true = ${true && true}`); // true
console.log(`false && true = ${false && true}`); // false
console.log(`true && false = ${true && false}`); // false
console.log(`false && false = ${false && false}`); // false

console.log("\nOR Operator");
weFulfilledOurPromise = wentMovies || atePopcorn;
console.log(`Did we fullfil our promise? ${weFulfilledOurPromise}`);

console.log("\nTruth table (OR)\n");
console.log(`true || true = ${true || true}`); // true
console.log(`false || true = ${false || true}`); // true
console.log(`true || false = ${true || false}`); // true
console.log(`false || false = ${false || false}`); // false

console.log("\nTruth table (NOT)\n");
console.log(`!true = ${!true}`);
console.log(`!false = ${!false}`);

