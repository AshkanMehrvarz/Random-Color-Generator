const generateButton = document.querySelector("#btn");
const bg = document.querySelector(".main");
const colorCodeDisplay = document.querySelector("#color-code");
const colorCodeDisplaySection = document.querySelector("#color-code");
const colorCodeCopy = document.querySelector("#copy-section");


let colorCode;
let randomColorCode = () => {
    colorCode = Math.floor(Math.random()*16777215).toString(16);
};

generateButton.addEventListener("click" , () => {
    randomColorCode();
    bg.style.backgroundColor = "#" + colorCode;
    colorCodeDisplay.textContent = `Color Code = #${colorCode}`;
    colorCodeDisplaySection.style.backgroundColor = `#${colorCode}`;
});


colorCodeCopy.addEventListener("click" , () => {
    navigator.clipboard.writeText(colorCode);
    alert("Color Code Copied!");
});