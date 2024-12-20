console.log("Hello There");

setTimeout(() => { console.log("1 sec passed") }, 0);

const p = new Promise((res, rej) => {
    res();
});

p.then(() => {
    console.log("Promise");
})

console.log("Bye");