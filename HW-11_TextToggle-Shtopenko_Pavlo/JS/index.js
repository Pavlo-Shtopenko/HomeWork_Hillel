const buttonHider = document.getElementById("hider");
const targetText = document.getElementById("hidenText");
const textButton1 = document.getElementById("hiderTextButton1");
const textButton2 = document.getElementById("hiderTextButton2");
const buttonIncrease = document.getElementById("increase");
const buttonDecrease = document.getElementById("decrease");

let getFontSize = function (x) {
  return parseInt(getComputedStyle(x, null).fontSize);
};

buttonIncrease.addEventListener(
  "click",
  function () {
    console.log(getFontSize(targetText) + 1 + "px");
    targetText.style.fontSize = getFontSize(targetText) + 1 + "px";
  },
  false
);

buttonDecrease.addEventListener(
  "click",
  function () {
    console.log(getFontSize(targetText) + 1 + "px");
    targetText.style.fontSize = getFontSize(targetText) - 1 + "px";
  },
  false
);

buttonHider.onclick = hiding;
function hiding() {
  targetText.classList.toggle("hidden-text");
  buttonIncrease.classList.toggle("hidden-text");
  buttonDecrease.classList.toggle("hidden-text");
  textButton1.classList.toggle("hidden-text");
  textButton2.classList.toggle("hidden-text");
}
