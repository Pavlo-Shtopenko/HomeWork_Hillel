const userName = prompt('What is your name?');
const userBirth = Number(prompt('What is your birth year?'));
const userCountry = prompt('Where are you from?');
let userAge = 2023 - userBirth;
alert("Nice to meet you, "+userName+"! You are "+userAge+" years old! You are from "+userCountry+"!");