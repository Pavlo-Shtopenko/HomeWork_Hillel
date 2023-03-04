const userOper = prompt(
  "Введіть бажану математичну операцію у наступному форматі: \n+ якщо бажаєте додавати;\n- якщо бажаєте віднімати;\n/ якщо бажаєте ділити;\n* якщо бажаєте множити;\npow  якщо бажаєте ввести число у ступінь;\ncos якщо бажаєте визначити косинус;\nsin  якщо бажаєте визначити сінус;"
);
console.log(userOper);
let userFirstNum = 0;
let userSecNum = 0;
let decision = 0;

switch (userOper) {
  case "+":
  case "-":
  case "/":
  case "*":
  case "pow":
    {
      userFirstNum = +prompt("введіть Ваше значення числа");
      userSecNum = +prompt("введіть Ваше друге значення числа");
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
  case "cos":
    userFirstNum = +prompt("введіть Ваше значення числа");
    decision = Math.cos(userFirstNum);
    break;
  case "sin":
    userFirstNum = +prompt("введіть Ваше значення числа");
    decision = Math.sin(userFirstNum);
    break;
  default:
    alert("Ви вказали недійсний операнд. Спробойте ще раз");
}

switch (true) {
  case isNaN(decision):
    alert("помилка вводу. Введіть ціле число");
    break;
  case decision === Infinity:
    alert(
      "мабудь намагаєтесь поділити на нуль? ))) Введіть друге число: не нуль!"
    );
    break;
  default:
    alert(`Ваше рішення дорівнює ${decision} !`);
}
