const loginUserInput = document.getElementById("login");
const passwordUserInput = document.getElementById("password");
export const confirmButton = document.getElementById("button");
const form = document.getElementById("form");
const mainBox = document.getElementById("mainBox");
const alertDataUser = document.getElementById("alertDataUser");

// variables fo render list
const logOutButton = document.getElementById("logOutBut");
export const cardItem = document.getElementById("card-template").innerHTML; //шаблон карточки
export const userList = document.getElementById("section-list");
export const previousButton = document.getElementById("previous");
export const nextButton = document.getElementById("next");
const createButton = document.getElementById("create-user");
export const newFirstName = document.getElementById("inputNewFirstName");
export const newSecondName = document.getElementById("inputNewSecondName");
export const newEmail = document.getElementById("inputNewEmail");
export let newID = null;
export let counter = 1;

if (localStorage.getItem("token")) {
  renderList();
}

logOutButton.addEventListener("click", () => {
  localStorage.removeItem("token");
  mainBox.classList.add("hidden-login");
  form.classList.remove("hidden-login");
  passwordUserInput.value = "";
});

import { loginInputData } from "./services/enterLoginData.js";
loginInputData(loginUserInput, passwordUserInput);

// ----- отображение списка юзеров ------  //

import { listenerForRender } from "./services/renderList.js";
listenerForRender(
  loginUserInput,
  passwordUserInput,
  alertDataUser,
  confirmButton
);
import { renderList } from "./services/renderList.js";
import { getResponse } from "./services/renderList.js";

function nextPage() {
  counter += 1;
  getResponse();
}

function previousPage() {
  counter -= 1;
  getResponse();
}

nextButton.addEventListener("click", nextPage);
previousButton.addEventListener("click", previousPage);
userList.addEventListener("click", modifyCard);

// /////////MODIFY CARD USER///////////

import { modifyCard } from "./services/modifyCard.js";

//создание нового юзера
createButton.addEventListener("click", async () => {
  const sendNewUser = {
    first_name: newFirstName.value,
    last_name: newSecondName.value,
    email: newEmail.value,
  };

  const requestCreate = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(sendNewUser),
  });
  newID = await requestCreate.json().then((response) => response.id);
  try {
    if (requestCreate.status === 201) {
      createNewUser();
    }
  } catch (error) {
    console.warn(error);
  }
});

import { createNewUser } from "./services/createUser.js";
