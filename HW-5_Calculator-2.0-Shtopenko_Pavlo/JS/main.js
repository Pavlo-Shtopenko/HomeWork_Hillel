let userOper = "";
let validOper = false;
let userFirstNum;
let userSecNum;
let decision = 0;
const historyDec = [];
let isCalculationContinue = true;
let messageFinish = ''

while (userOper !== "history" && isCalculationContinue === true) {
  //запит оператора
  while (validOper === false) {
    userOper = prompt(
      "Введіть бажану математичну операцію у наступному форматі: \n+ якщо бажаєте додавати;\n- якщо бажаєте віднімати;\n/ якщо бажаєте ділити;\n* якщо бажаєте множити;\npow  якщо бажаєте ввести число у ступінь;\ncos якщо бажаєте визначити косинус;\nsin  якщо бажаєте визначити сінус;\nhistory якщо бажаєте переглянути історію обчислень;"
    ); //тут валідуємо введений оператор
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

  //запит операндів
  switch (userOper) {
    case "+": //тут проводимо операцію з ДВОМА операндами
    case "-":
    case "/":
    case "*":
    case "pow":
      {
        while (isNaN(userFirstNum) || isNaN(userSecNum)) {
          userFirstNum = +prompt("введіть Ваше перше значення числа");
          userSecNum = +prompt("введіть Ваше друге значення числа");
          if (isNaN(userFirstNum) || isNaN(userSecNum)) {
            alert("невірно введено операнд або операнди. Введіть ще раз.");
          }
        }
      }
      switch (userOper) {
        case "+":
          decision = userFirstNum + userSecNum;
          break;
        case "-":
          decision = userFirstNum - userSecNum;
          break;
        case "*":
          decision = userFirstNum * userSecNum;
          break;
        case "/":
          decision = userFirstNum / userSecNum;
          break;
        case "pow":
          decision = userFirstNum ** userSecNum;
          break;
      }
      break;
    case "cos": //тут запускаємо обчислення унарних операцій
    {
      while (isNaN(userFirstNum)) {
        userFirstNum = +prompt("введіть Ваше значення числа");
        if (isNaN(userFirstNum)) {
          alert("невірно введено операнд. Введіть ще раз.");
        }
      }
      decision = Math.cos(userFirstNum).toFixed(2);
      break;
    }

    case "sin":
      {
        while (isNaN(userFirstNum)) {
          userFirstNum = +prompt("введіть Ваше значення числа");
          if (isNaN(userFirstNum)) {
            alert("невірно введено операнд. Введіть ще раз.");
          }
        }
        decision = Math.sin(userFirstNum).toFixed(2);
        break;
      }
    case "history": {
      console.log(`Історія Ваших обчислень:`);
      for (let i =0; i <= historyDec.length - 1; i++){
        console.log(historyDec[i]);
      }
    }
  }
  if (userOper === "/" && userSecNum === 0) {
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
  isCalculationContinue = confirm("Чи не хотіли б Ви створити нові обчислення?");
  validOper = false;
  userOper = "";
  userFirstNum = NaN;
  userSecNum = NaN;
}
