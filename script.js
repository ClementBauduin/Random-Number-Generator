const button = document.querySelector(".container-button");
const number = document.querySelector(".container-number");

button.addEventListener("click",() => {
    number.innerText = Math.floor(Math.random() * 100);
})