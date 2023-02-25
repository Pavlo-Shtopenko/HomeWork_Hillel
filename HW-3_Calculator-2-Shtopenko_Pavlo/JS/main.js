const userOper = prompt('Введіть бажану математичну операцію у наступному форматі: \n+ якщо бажаєте додавати;\n- якщо бажаєте віднімати;\n/ якщо бажаєте ділити;\n* якщо бажаєте множити;\npow  якщо бажаєте ввести число у ступінь;\ncos якщо бажаєте визначити косинус;\nsin  якщо бажаєте визначити сінус;');
console.log(userOper);
let userFirstNum = 0;
let userSecNum = 0;
let decision = 0;

if (userOper === '+' || userOper ===  '-' || userOper ===  '/' || userOper ===  '*' || userOper ===  'pow'){
    userFirstNum = +prompt('введіть Ваше значення числа');
    userSecNum = +prompt("введіть Ваше друге значення числа")
    if (userOper === '+'){
        decision = userFirstNum + userSecNum;
    } else if(userOper === '-'){
        decision = userFirstNum - userSecNum;
    } else if(userOper === '*'){
        decision = userFirstNum * userSecNum;
    } else if(userOper === '/'){
        decision = userFirstNum / userSecNum;
    } else if(userOper === 'pow'){
        decision = userFirstNum ** userSecNum;
    }
} else if(userOper === 'cos'){
    userFirstNum = +prompt('введіть Ваше значення числа');
    decision = Math.cos(userFirstNum);
} else if(userOper === 'sin'){
    userFirstNum = +prompt('введіть Ваше значення числа');
    decision = Math.sin(userFirstNum);
} else {
    alert('Ви вказали недійсний операнд. Спробойте ще раз');
}

if(isNaN(decision)){
    console.log('помилка вводу. Введіть ціле число');
    
    } else if(decision === Infinity){
        alert('мабудь намагаєтесь поділити на нуль? ))) Введіть друге число не нуль!')
    } else{
        alert(`Ваше рішення дорівнює ${decision} !`);        
    }

