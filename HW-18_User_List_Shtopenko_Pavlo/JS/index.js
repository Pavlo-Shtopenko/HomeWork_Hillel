const xhr = new XMLHttpRequest();
const cardItem = document.getElementById("card-template").innerHTML;
const userList = document.getElementById("section-list");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
let counter = 1;

function getResponse() {
  const requestContent = `https://reqres.in/api/users?page=${counter}`;
  xhr.open("GET", requestContent, false);
  xhr.send();
  const response = JSON.parse(xhr.response);
  const totalPages = response.total_pages;
  const currentPage = response.page;

  if (currentPage === 1) {
    previousButton.setAttribute("disabled", "");
    nextButton.removeAttribute("disabled", "");
  } else if (currentPage === totalPages) {
    nextButton.setAttribute("disabled", "");
    previousButton.removeAttribute("disabled", "");
  }

  const mappedUsers = response.data.map((user) => {
    return {
      ...user,
      name: `${user.first_name} ${user.last_name}`,
    };
  });
  let result = "";
  mappedUsers.forEach((user) => {
    result += cardItem
      .replaceAll("{{name}}", user.name)
      .replaceAll("{{email}}", user.email)
      .replaceAll("{{avatar}}", user.avatar);
  });
  userList.innerHTML = result;
}

getResponse();
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

//  -----  New User List ---------  //
const nhr = new XMLHttpRequest();
const inputFirstName = document.getElementById("first_name");
const inputLastName = document.getElementById("last_name");
const inputEmail = document.getElementById("email");
const inputJob = document.getElementById("job");
const buttonCreateUser = document.getElementById("create-button");
const newUserListItems = document.getElementById("newUserListItems");

function sendResponse() {
  nhr.open("POST", "https://reqres.in/api/users", false);
  const userData = {
    first_name: inputFirstName.value,
    last_name: inputLastName.value,
    email: inputEmail.value,
    job: inputJob.value,
  };
  const toJSONUserData = JSON.stringify(userData);
  nhr.setRequestHeader("Content-type", "application/json");
  nhr.send(toJSONUserData);
  const responseNewUser = JSON.parse(nhr.response);

  newUserListItems.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
  <p>${responseNewUser.first_name} ${responseNewUser.last_name}</p>
  <p>${responseNewUser.email}</p>
  <p>${responseNewUser.job}</p>
</div>`
  );
}

buttonCreateUser.addEventListener("click", () => {
  sendResponse();
  inputFirstName.value = "";
  inputLastName.value = "";
  inputEmail.value = "";
  inputJob.value = "";
});
