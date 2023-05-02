//блок выбора приветствия
const date = new Date();
const currentTime = date.getHours();
let greeting =
  currentTime >= 0 && currentTime < 6
    ? "Good Night"
    : currentTime >= 18 && currentTime < 23
    ? "Good Evening"
    : currentTime >= 12 && currentTime < 18
    ? "Good Day"
    : "Good Morning";
const greetingUser = document.getElementById("greeting");
greetingUser.innerText = greeting;

//основной код по ТЗ
const inputCard = document.getElementsByClassName("creator")[0];
const inputTask = document.getElementById("action");
const inputDescroption = document.getElementById("description");
const button = document.getElementsByClassName("button-submit")[0];
const selectRange = document.getElementById("select-range");
const settingsBlock = document.getElementById("settings").innerHTML;
const cardList = document.createElement("ul");
cardList.classList.add("cardList");

button.addEventListener("click", () => {
  saveCard();
  inputTask.value = "";
  inputDescroption.value = "";
  selectRange.value = "normal";
});



function saveCard() {
  const cardItem = document.createElement("li");
  cardItem.classList.add("cardItem");
  const savedTask = document.createElement("p");
  savedTask.classList.add("savedInput");
  savedTask.innerText = `${inputTask.value}`;
  const savedDescription = document.createElement("p");
  savedDescription.classList.add("savedInput");
  savedDescription.innerText = `${inputDescroption.value}`;
  cardItem.insertAdjacentElement("afterbegin", savedDescription);
  cardItem.insertAdjacentElement("afterbegin", savedTask);
  cardItem.insertAdjacentHTML("beforeend", settingsBlock);
  const range = document.getElementById("select-range").value;
  if (range === "so-so") {
    cardItem.classList.add("so-so");
  } else if (range === "normal") {
    cardItem.classList.add("normal");
  } else {
    cardItem.classList.add("important");
  }
  cardList.insertAdjacentElement("afterbegin", cardItem);
  inputCard.insertAdjacentElement("afterend", cardList);
  const checkbox = document.querySelector('input[type="checkbox"]');
  const deleteButton = document.querySelector(".image");
  checkbox.addEventListener("change", onCheckboxChange);
  function deleteClick() {
    if (checkbox.checked) {
      cardItem.remove();
    }
  }
  deleteButton.addEventListener("click", deleteClick);
}

function onCheckboxChange(event) {
  if (event.target.checked) {
    event.composedPath()[3].classList.add("line-through");
  } else {
    event.composedPath()[3].classList.remove("line-through");
  }
}
