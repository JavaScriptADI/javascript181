const waldo1 = ['Winston', 'Goerge', 'Waldo', 'Sherlock'];
const waldo2 = ['Winston', 'Goerge', 'Sherlock', 'Waldo'];
const waldo3 = ['Nick', 'Gia', 'Sherlock', 'Vlad', 'Waldo'];
const waldo4 = ['Nick', 'Gia', 'Sherlock', 'Vlad', 'Helen', 'Waldo'];

// you cannot use indexOf

function findWaldo(waldoArr) {
    for (let i = 0; i < waldoArr.length; i++) {
        if (waldoArr[i] === 'Waldo') {
            // console.log(`Waldo is at ${i} index`);
            // break;
            return i;
        }
    }
    return -1;
}

function greet() { // function without return statement returns undefined
    console.log('Hello');
}

let waldoIndex = findWaldo(waldo1);
console.log(`Waldo is at ${waldoIndex} index`);

waldoIndex = findWaldo(waldo2);
console.log(`Waldo is at ${waldoIndex} index in ${waldo2}`);
console.log(findWaldo([]));
// findWaldo(waldo3);
// greet();

// console.log(greet());

// findWaldo(waldo2);
// findWaldo(waldo3);
// findWaldo(waldo4);





// for (let i = 0; i < waldo1.length; i++) {
//     if (waldo1[i] === 'Waldo') {
//         console.log(`Waldo is at ${i} index`);
//         break;
//     }
// }

// for (let i = 0; i < waldo2.length; i++) {
//     if (waldo2[i] === 'Waldo') {
//         console.log(`Waldo is at ${i} index`);
//         break;
//     }
// }

// for (let i = 0; i < waldo3.length; i++) {
//     if (waldo3[i] === 'Waldo') {
//         console.log(`Waldo is at ${i} index`);
//         break;
//     }
// }

// for (let i = 0; i < waldo4.length; i++) {
//     if (waldo4[i] === 'Waldo') {
//         console.log(`Waldo is at ${i} index`);
//         break;
//     }
// }
