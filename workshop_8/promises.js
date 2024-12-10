// promises.js

// Creating a promise that resolves after 1 second
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { name: "Bob", age: 30 };
        resolve(data);
    }, 1000);
  });
}

// Consuming the promise
fetchData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });