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
const loginUserInput = document.getElementById("login");
const passwordUserInput = document.getElementById("password");
const confirmButton = document.getElementById("button");
const savedUserLogin = "admin@gmail.com";
const savedUserPassword = "password123";
const form = document.getElementById("form");
const alertLogin = document.getElementById("alertLogin");
const alertPassword = document.getElementById("alertPassword");
const alertDataUser = document.getElementById("alertDataUser");
 
function hiddenClass(input) {
  input.classList.remove("hidden");
}
function addClassHidden(cons){
  cons.classList.add("hidden");
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
  }
});
loginUserInput.addEventListener("focus", () => {
  addClassHidden(alertLogin);
  addClassHidden(alertDataUser);
});

passwordUserInput.addEventListener("blur", () => {
  if (passwordUserInput.value.length <= 6) {
    hiddenClass(alertPassword)
    passwordUserInput.value = '';
  }
});
passwordUserInput.addEventListener("focus", () => {
  addClassHidden(alertPassword);
  addClassHidden(alertDataUser);
});

form.addEventListener("focus", (e) => {
  if (e.target.tagName === "INPUT") {
    console.log("delegate!!!");
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
    alertLogin.classList.contains("hidden") &&
    alertPassword.classList.contains("hidden")
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

confirmButton.addEventListener("click", () => {
  if (
    loginUserInput.value === savedUserLogin &&
    passwordUserInput.value === savedUserPassword
  ) {
    form.innerHTML =
      '<div class="sucsefull-enter">Congratulations! Welcome in Your Cabinet!</div>';
  } else {
    alertDataUser.classList.remove("hidden");
    loginUserInput.value = "";
    passwordUserInput.value = "";
    addClassHidden(alertLogin);
    addClassHidden(alertPassword);
  }
});
