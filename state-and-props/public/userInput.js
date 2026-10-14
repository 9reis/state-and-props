const username = document.getElementById("username");
const display = document.getElementById("display");

const inputHandler = ev => {
    display.innerHTML = ev.target.value;
}

username.addEventListener("input", inputHandler);