
// Simulating an asynchronous operation using setTimeout and a callback
function fetchData(callback) {
    // let start = new Date();
    // while ((new Date() - start) <= 1000) {
    // }
    // const data = { name: "Alice", age: Math.random() };
    // callback(data);
    // return;

    setTimeout(() => {
        const data = { name: "Alice", age: Math.random() };
        callback(data);
    }, 1000);
}

// Using the callback
fetchData((data) => {
    console.log("Loading News Feed:", data);
});

fetchData((data) => {
    console.log("Loading Friends:", data);
});