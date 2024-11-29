function f(x = 0, y = 10, z = 0) { // default parameters
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

function g(x, y = 0, z = 0) { // only use default parameters at the end
    console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

f();
f(1);
f(1, 2);
f(1, 2, 3);

g(2, 3);
g(); // x is mandatory


