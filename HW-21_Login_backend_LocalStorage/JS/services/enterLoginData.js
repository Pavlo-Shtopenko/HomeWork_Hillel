
import {confirmButton} from '../index.js';

export function loginInputData(loginUserInput, passwordUserInput){ 
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
      function hiddenClass(input) {
        input.classList.remove("hidden-login");
      }
      function addClassHidden(cons) {
        cons.classList.add("hidden-login");
      }
};