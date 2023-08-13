
export async function modifyCard(event) {
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