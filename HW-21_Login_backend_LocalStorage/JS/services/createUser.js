import {cardItem, newFirstName, newSecondName, newEmail, newID, userList} from '../index.js';



export function createNewUser(){
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

