console.log("eve.holt@reqres.in");
console.log("cityslicka");



// ----- log in ------ //
const loginUserInput = document.getElementById("login");
const passwordUserInput = document.getElementById("password");
const confirmButton = document.getElementById("button");
const savedUserLogin = "";
const savedUserPassword = "";
const form = document.getElementById("form");
const alertLogin = document.getElementById("alertLogin");
const alertPassword = document.getElementById("alertPassword");
const alertDataUser = document.getElementById("alertDataUser");
const success = document.getElementById("success");
const boxButton = document.getElementById("boxButton");

function hiddenClass(input) {
  input.classList.remove("hidden-login");
}
function addClassHidden(cons) {
  cons.classList.add("hidden-login");
}

loginUserInput.addEventListener("blur", () => {
  if (!loginUserInput.value.includes("@")) {
    hiddenClass(alertLogin);
  } else if (loginUserInput.value.indexOf("@") < 2) {
    hiddenClass(alertLogin);
  } else if (
    !loginUserInput.value.slice(loginUserInput.value.indexOf("@")).includes(".")
  ) {
    hiddenClass(alertLogin);
  } else if (
    loginUserInput.value.slice(loginUserInput.value.indexOf("@")).indexOf(".") <
    3
  ) {
    hiddenClass(alertLogin);
  } else if (
    loginUserInput.value.slice(loginUserInput.value.indexOf("@")).indexOf(".") >
    loginUserInput.value.slice(loginUserInput.value.indexOf("@")).length - 3
  ) {
    hiddenClass(alertLogin);
  }
});
loginUserInput.addEventListener("focus", () => {
  addClassHidden(alertLogin);
  addClassHidden(alertDataUser);
});

passwordUserInput.addEventListener("blur", () => {
  if (passwordUserInput.value.length <= 6) {
    hiddenClass(alertPassword);
    passwordUserInput.value = "";
  }
});
passwordUserInput.addEventListener("focus", () => {
  addClassHidden(alertPassword);
  addClassHidden(alertDataUser);
});

form.addEventListener("focus", (e) => {
  if (e.target.tagName === "INPUT") {
    if (!confirmButton.hasAttribute("disabled")) {
      confirmButton.setAttribute("disabled", true);
    }
    if (!confirmButton.classList.contains("disabled")) {
      confirmButton.classList.add("disabled");
    }
  }
});

form.addEventListener("change", () => {
  if (
    loginUserInput.value.length > 0 &&
    passwordUserInput.value.length > 0 &&
    alertLogin.classList.contains("hidden-login") &&
    alertPassword.classList.contains("hidden-login")
  ) {
    confirmButton.removeAttribute("disabled");
    confirmButton.classList.remove("disabled");
  } else {
    if (!confirmButton.hasAttribute("disabled")) {
      confirmButton.setAttribute("disabled", true);
    }
    if (!confirmButton.classList.contains("disabled")) {
      confirmButton.classList.add("disabled");
    }
  }
});

// ----- отображение списка юзеров ------  //
const xhr = new XMLHttpRequest();
const cardItem = document.getElementById("card-template").innerHTML;
const userList = document.getElementById("section-list");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const incorrectLogin = document.getElementById("alertLoginPassword");
let counter = 1;
confirmButton.addEventListener("click", () => {
  let sendLoginData = {
    email: loginUserInput.value,
    password: passwordUserInput.value,
  };
  const requestLogIn = "https://reqres.in/api/login";
  xhr.open("POST", requestLogIn, true);
  xhr.onload = (e) => {
    JSON.stringify(sendLoginData);
    const response = JSON.parse(e.target.response);
    if (e.target.status === 400) {
      if (incorrectLogin.classList.contains("hidden-login")) {
        incorrectLogin.classList.remove("hidden-login");
      }
      return;
    }
    if (!incorrectLogin.classList.contains("hidden-login")) {
      incorrectLogin.classList.add("hidden-login");
    }
    getResponse();
    form.classList.add("hidden-login");
    boxButton.classList.remove("hidden-login");
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(sendLoginData));
});

function getResponse() {
  const requestContent = `https://reqres.in/api/users?page=${counter}`;
  xhr.open("GET", requestContent, true);
  xhr.onload = (e) => {
    try {
      const response = JSON.parse(e.target.response);
      const mappedUsers = response.data.map((user) => {
        return {
          ...user,
          name: `${user.first_name} ${user.last_name}`,
        };
      });
      let userListresult = "";
      mappedUsers.forEach((user) => {
        let currentUserCard = "";
        currentUserCard = cardItem;
        Object.keys(user).forEach((key) => {
          currentUserCard = currentUserCard.replaceAll(`{{${key}}}`, user[key]);
        });
        userListresult += currentUserCard;
      });
      const totalPages = response.total_pages;
      const currentPage = response.page;
      if (currentPage === 1) {
        previousButton.setAttribute("disabled", "");
        nextButton.removeAttribute("disabled", "");
      } else if (currentPage === totalPages) {
        nextButton.setAttribute("disabled", "");
        previousButton.removeAttribute("disabled", "");
      }
      userList.innerHTML = userListresult;
    } catch (error) {
      console.warn(e);
    }
  };
  xhr.send();
}
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
function modifyCard(event) {
  const fullName = event.target.parentNode.firstChild.nextSibling;
  const emailParag =
    event.target.parentNode.firstChild.nextElementSibling.nextElementSibling
      .nextElementSibling.nextElementSibling;
  const idUser = event.target.parentNode.id;
  const requestDelete = `https://reqres.in/api/users/${idUser}`;
  const requestPatch = `https://reqres.in/api/users/${idUser}`;
  if (event.target.classList.value === "button-delete") {
    xhr.open("DELETE", requestDelete, true);
    xhr.onload = (e) => {
      try {
        const response = JSON.parse(e.target.response);
      } catch (error) {
        if (e.target.status === 204) {
          event.target.parentNode.remove();
        }
      }
    };
    xhr.send();
  } else if (event.target.classList.value === "button-edit") {
    event.target.classList.toggle("hidden-login"); //скрываем кнопку edit
    event.target.nextSibling.nextSibling.classList.toggle("hidden-login"); //открываем кнопку confirm
    fullName.classList.add("hidden-login"); //скрываем параграф с полным именем
    fullName.nextElementSibling.classList.toggle("hidden-login"); //отображаем первый инпут с first name
    fullName.nextElementSibling.setAttribute(
      "value",
      fullName.innerText.split(" ")[0]
    ); //вносм value first name с параграфа полного имени
    fullName.nextElementSibling.nextElementSibling.classList.toggle(
      "hidden-login"
    ); //отображаем первый инпут с second name
    fullName.nextElementSibling.nextElementSibling.setAttribute(
      "value",
      fullName.innerText.split(" ")[1]
    ); //вносм value second name с параграфа полного имени
    emailParag.classList.add("hidden-login"); //скрываем параграф с емейлом
    emailParag.nextElementSibling.setAttribute("value", emailParag.innerText); //вносим value в инпут емейла
    emailParag.nextElementSibling.classList.toggle("hidden-login"); //отображаем инпут для редакта емейла
  } else if (event.target.classList.value === "button-confirm") {
    xhr.open("PATCH", requestPatch, true);
    xhr.onload = (e) => {
      try {
        const response = JSON.parse(e.target.response);
        if (e.target.status === 200) {
          fullName.innerText =
            fullName.nextElementSibling.value +
            " " +
            fullName.nextElementSibling.nextElementSibling.value; //вносим полное имя из двух инпутов
          fullName.classList.toggle("hidden-login"); //отображаем полное имя
          fullName.nextElementSibling.classList.toggle("hidden-login"); // скрываем лишний инпут
          fullName.nextElementSibling.nextElementSibling.classList.toggle(
            "hidden-login"
          ); // скрываем лишний инпут
          emailParag.innerText = emailParag.nextElementSibling.value; //вносим value инпута емейла в параграф емейла
          emailParag.classList.toggle("hidden-login"); //отображаем параграф с емейлом
          emailParag.nextElementSibling.classList.toggle("hidden-login");
          event.target.classList.toggle("hidden-login");
          event.target.previousElementSibling.classList.toggle("hidden-login");
        }
      } catch (error) {
        console.warn(error);
      }
    };
    xhr.send();
  }
}
