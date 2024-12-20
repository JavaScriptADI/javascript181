// Document object model

/*
document.body.style = "color: white";
document.body.style = "background-color: red;"; // this will overwrite everything else before
*/

document.body.style.color = "white";
// dashes are replaced with camelCase
document.body.style.backgroundColor = "red";

// document.body.innerText = "<h1>Hello</h1>";
// document.body.innerHTML = "<h1>Hello</h1>";
// document.body.innerHTML = (`
// <h1 style="color: green" class="test">Hello</h1>
// <p>This is really important text</p>
// `);

const beamAudio = new Audio("./bubblebeam-41985.mp3");
const h1 = document.createElement('h1');

h1.innerText = "Hello";
h1.style.color = "white";
// h1.style.transition = "0.3s ease-in";
h1.style.position = "absolute";
h1.style.top = 0;
h1.style.left = 0;

h1.classList.add("test");
h1.addEventListener('mouseenter', () => {
    console.log("Your mouse entered the element");
    h1.style.backgroundColor = "blue";
    console.log(beamAudio);
    beamAudio.play();
});

h1.addEventListener('mouseleave', () => {
    console.log("Your mosue left the element");
    h1.style.backgroundColor = "inherit";
});

h1.addEventListener('click', (event) => {
    console.log(event);
    console.log('You clicked the element');
});

document.body.addEventListener('keydown', (event) => {
    console.log(`You pressed ${event.key} on keyboard`);
    const top = Number(h1.style.top.split("px")[0]);
    const left = Number(h1.style.left.split("px")[0]);
    const speed = 10
    console.log(top)
    if (event.key === "w") {
        h1.style.top = `${top - speed}px`;
    } else if (event.key === "a") {
        h1.style.left = `${left - speed}px`;
    } else if (event.key === "s") {
        h1.style.top = `${top + speed}px`;
    } else if (event.key === "d") {
        h1.style.left = `${left + speed}px`;
    }
    h1.innerText = event.key;
});

document.body.appendChild(h1);
console.log(h1);


console.log(document.body);
