let a = 17;

console.log(12 + "1");
console.log("12" + 1);
console.log(12 * "2");
console.log("12" * 2);


a = String(a);
console.log("Hello " + a);

a = Number("20 32");
console.log(a, NaN, typeof a);
console.log(`Number.isNaN(a) = ${Number.isNaN(a)}`);
console.log(`7 < ${a} = ${7 < a}`);
console.log(NaN + NaN);
console.log(NaN * NaN);
console.log(NaN == NaN);
console.log(NaN < NaN);

