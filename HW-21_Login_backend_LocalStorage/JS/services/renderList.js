import {login} from './login.js';
import {counter, cardItem, previousButton, nextButton, userList} from '../index.js'

export function listenerForRender(loginUserInput, passwordUserInput, alertDataUser, confirmButton){ 
    confirmButton.addEventListener("click", async () => {
    let sendLoginData = {
      email: loginUserInput.value,
      password: passwordUserInput.value,
    };
    const result = await login(sendLoginData);
     if(result.status === 400){
          alertDataUser.classList.remove("hidden-login");
        } else if((result.status === 200)){
          renderList();
          result.json().then(response => {localStorage.setItem('token', response.token)})
        } })
    }
  
export  function renderList() {
    getResponse();
      mainBox.classList.remove("hidden-login");
      form.classList.add("hidden-login");
      boxButton.classList.remove("hidden-login");
      formNewUser.classList.remove("hidden-login");
  }

  async function fetchResponse() {
    const response = await fetch(`https://reqres.in/api/users?page=${counter}`);
    const  result = await response.json();
    return result;
   }

export async function getResponse() {

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
  