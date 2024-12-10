/*
Create a function that takes a string as an argument and returns a boolean, 
true if string is a palindrome else false. A palindrome is a word that reads 
the same backward as forward. 
For example, if the function is called with "hello" it should return false, 
if the function receives "elle" it should return true, because elle backwards is also elle.
*/

function isPalindrome(sentence) {
    // return sentence.split("").slice(0, Math.floor(sentence.length / 2)).join("") === sentence.split("").slice(Math.ceil(sentence.length / 2)).reverse().join("");
    let leftPointer = 0;
    let rightPointer = sentence.length - 1;
    
    while (leftPointer < rightPointer) {
        if (sentence[leftPointer] !== sentence[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    
    return true;
}

const s = "abcjcba";


// console.log(`${s} - is palindrome: ${isPalindrome(s)}`);
console.log(isPalindrome(s));
console.log(isPalindrome(s));
console.log(isPalindrome(s));
console.log(isPalindrome(s));
console.log(isPalindrome(s));


setInterval(() => {
    console.log(new Date());
}, 1000);

setInterval(() => {
    console.log("hi");
}, 5000);

