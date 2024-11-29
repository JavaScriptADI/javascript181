const nums = [100, -100, 1000, -1000, -1, 1, -1, 1, 5, 105];


function compare(a, b) {
    // 50 100
    // 50 - 100 = -50
    // 100 - 50 = 50
    // 50 - 50 = 0 
    return a - b;
    // if (a < b) {
    //     return -1;
    // }

    // if (a === b) {
    //     return 0;
    // }

    // return 1;
}
const cmp = (a, b) => a - b;
console.log(nums);
// nums.sort(compare);
nums.sort(cmp);
// sort is higher order function
// function that is passed to another function (in this case sort) it is called calback function
nums.sort((a, b) => a - b);
nums.sort((a, b) => b - a);

// console.log(nums.sort());

console.log(nums);