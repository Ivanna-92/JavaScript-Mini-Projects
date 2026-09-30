const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

function sayHello() {
    const name = nameInput.value;
    greeting.textContent = "Hello, " + name + "!";
    nameInput.value = "";

    if (name === "") {
        greeting.textContent = "Please enter your name.";
        return;
    }
}

greetButton.addEventListener("click", sayHello);

/* Counter App */

let count = 0;

const counter = document.getElementById("counter");
const decreaseButton = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");

function increaseCount () {
    count++;
    counter.textContent = count;
}

increaseButton.addEventListener("click", increaseCount);

function decreaseCount () {
    count--;
    counter.textContent = count;
}

decreaseButton.addEventListener("click", decreaseCount);