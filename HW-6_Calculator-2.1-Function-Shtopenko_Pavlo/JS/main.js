let userOper = "";
let validOper = false;
let userFirstNum;
let userSecNum;
let decision = 0;
const historyDec = [];
let isCalculationContinue = true;
let messageFinish = "";

function validUserNum(a) {
  if (isNaN(+a) || a === "") {
    alert("невірно введено операнд. Введіть ще раз.");
  }
}

function validationOperator(userOper) {
  switch (userOper) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "pow":
    case "cos":
    case "sin":
    case "history":
      validOper = true;
      break;
    default:
      alert("невірно введено знак оператора! Спробуйте ще.");
  }
}

function summ(a, b) {
  decision = Number(a) + Number(b);
}
function different(a, b) {
  decision = a - b;
}
function multiply(a, b) {
  decision = a * b;
}
function division(a, b) {
  decision = a / b;
}
function power(a, b) {
  decision = a ** b;
}
function cosine(a) {
  decision = Math.cos(a).toFixed(2);
}
function sinus(a) {
  decision = Math.sin(a).toFixed(2);
}

outer: while (userOper !== "history" && isCalculationContinue === true) {
  //запит оператора
  while (validOper === false) {
    userOper = prompt(
      "Введіть бажану математичну операцію у наступному форматі: \n+ якщо бажаєте додавати;\n- якщо бажаєте віднімати;\n/ якщо бажаєте ділити;\n* якщо бажаєте множити;\npow  якщо бажаєте ввести число у ступінь;\ncos якщо бажаєте визначити косинус;\nsin  якщо бажаєте визначити сінус;\nhistory якщо бажаєте переглянути історію обчислень;"
    ); //тут валідуємо введений оператор
    if (userOper === null) {
      break outer;
    }
    validationOperator(userOper);
  }

  //запит операндів
  switch (userOper) {
    case "+":
    case "-":
    case "/":
    case "*":
    case "pow":
      {
        while (isNaN(userFirstNum) || !userFirstNum) {
          userFirstNum = prompt("введіть Ваше перше значення числа");
          validUserNum(userFirstNum);
        }
        while (isNaN(userSecNum) || !userSecNum) {
          userSecNum = prompt("введіть Ваше друге значення числа");
          validUserNum(userSecNum);
        }
        switch (userOper) {
          case "+":
            summ(userFirstNum, userSecNum);
            break;
          case "-":
            different(userFirstNum, userSecNum);
            break;
          case "*":
            multiply(userFirstNum, userSecNum);
            break;
          case "/":
            division(userFirstNum, userSecNum);
            break;
          case "pow":
            power(userFirstNum, userSecNum);
            break;
        }
      }
      break;
    case "cos": {
      //тут запускаємо обчислення унарних операцій
      while (isNaN(userFirstNum) || !userFirstNum || userFirstNum === null) {
        userFirstNum = prompt("введіть Ваше значення числа");
        validUserNum(userFirstNum);
      }
      cosine(userFirstNum);
      break;
    }

    case "sin": {
      while (isNaN(userFirstNum) || !userFirstNum || userFirstNum === null) {
        userFirstNum = prompt("введіть Ваше значення числа");
        validUserNum(userFirstNum);
      }
      sinus(userFirstNum);
      break;
    }
    case "history": {
      console.log(`Історія Ваших обчислень:`);
      for (let i = 0; i <= historyDec.length - 1; i++) {
        console.log(historyDec[i]);
      }
    }
  }
  if (userOper === "/" && userSecNum === "0") {
    alert(
      "мабудь намагаєтесь поділити на нуль? ))) Введіть друге число: не нуль!"
    );
  } else if (userOper !== "history") {
    messageFinish = `Operation " ${userOper} " finished with result  : ${decision}`;
    alert(messageFinish);
  }
  if (decision !== Infinity) {
    historyDec[historyDec.length] = messageFinish;
  }
  isCalculationContinue = confirm(
    "Чи не хотіли б Ви створити нові обчислення?"
  );
  validOper = false;
  userOper = "";
  userFirstNum = "";
  userSecNum = "";
}
