// console.log("eve.holt@reqres.in");
// console.log("cityslicka");
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
let sendLoginData = {
  email: loginUserInput.value,
  password: passwordUserInput.value,
};

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
const cardItem = document.getElementById("card-template").innerHTML; //шаблон карточки
const userList = document.getElementById("section-list");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const incorrectLogin = document.getElementById("alertLoginPassword");
const createButton = document.getElementById("create-user");
const formNewUser = document.getElementById("formNewUser")
const newFirstName = document.getElementById('inputNewFirstName');
const newSecondName = document.getElementById('inputNewSecondName');
const newEmail = document.getElementById('inputNewEmail');
let newID = null;
let counter = 1;

//логин через fetch


confirmButton.addEventListener("click", () => {
  if(login()
  .then(response => response.status) === 400) {
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
    formNewUser.classList.remove("hidden-login");
})

function login() {

  return fetch ("https://reqres.in/api/login", {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(sendLoginData)
  }
  )
};

// getResponse() через fetch

async function fetchResponse() {
  const response = await fetch(`https://reqres.in/api/users?page=${counter}`);

  const  result = await response.json();
  // console.log(result);
  return result;
 }

async function getResponse() {

  const mappedUsers = await fetchResponse().then(response => response.data.map((user) => {
    return {
      ...user,
      name: `${user.first_name} ${user.last_name}`,
    };
  }));

    let userListresult = "";
      mappedUsers.forEach((user) => {
        let currentUserCard = "";
        currentUserCard = cardItem; // текущей карте юзера присваивается шаблон пустой карточки
        Object.keys(user).forEach((key) => {
          currentUserCard = currentUserCard.replaceAll(`{{${key}}}`, user[key]); //в шаблонной карточке заменяются заглушки на текущее имя юзера
        });
        userListresult += currentUserCard; //в переменную добавляется новая обновленная карточка следующего юзера
      });
      const totalPages = await fetchResponse().then(response => response.total_pages);
      const currentPage = await fetchResponse().then(response => response.page)
      if (currentPage === 1) {
        previousButton.setAttribute("disabled", "");
        nextButton.removeAttribute("disabled", "");
      } else if (currentPage === totalPages) {
        nextButton.setAttribute("disabled", "");
        previousButton.removeAttribute("disabled", "");
      }
      userList.innerHTML = userListresult; //именно тут рендерится список юзеров в DOM
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

// /////////MODIFY CARD USER///////////



async function modifyCard(event) {
  const fullName = event.target.parentNode.firstChild.nextSibling;
  const emailParag =
    event.target.parentNode.firstChild.nextElementSibling.nextElementSibling
      .nextElementSibling.nextElementSibling;
  const idUser = event.target.parentNode.id;

  const requestDelete = await fetch(`https://reqres.in/api/users/${idUser}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json'}
  }
  );

  if (event.target.classList.value === "button-delete") {
    try {
      const response = JSON.parse(e.target.response);
    } catch (error) {
        if (requestDelete.status === 204) {
          event.target.parentNode.remove();
      } else {
        console.log('ERROR')
      }
    }

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

    const requestPatch = await fetch(`https://reqres.in/api/users/${idUser}`, {
      method: 'PATCH',
      headers: {'content-type': 'application/json'}
    }
    );
    try {
          if (requestPatch.status === 200) {
            // console.log(requestPatch.status);
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
  }
}


//создание нового юзера
createButton.addEventListener('click', async () =>{
  const sendNewUser = {
    first_name: newFirstName.value,
    last_name: newSecondName.value,
    email: newEmail.value
  } 
  
  
  const requestCreate = await fetch ("https://reqres.in/api/users", {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(sendNewUser)
  }
  )
    newID = await requestCreate.json().then(response => response.id);
    try {
    if (requestCreate.status === 201){
    createNewUser()
    }
  } catch(error) {
    console.warn(error)
  }
});


function createNewUser(){
      let newUser = cardItem;
      newUser = newUser.replaceAll('{{name}}', `${newFirstName.value} ${newSecondName.value}`);
      newUser = newUser.replaceAll('{{avatar}}', './img/man.jpg');
      newUser = newUser.replaceAll('{{email}}', newEmail.value);
      newUser = newUser. replaceAll('{{id}}', newID);
      userList.insertAdjacentHTML('afterbegin', newUser);
      newFirstName.value = '';
      newSecondName.value = '';
      newEmail.value = '';
    }


