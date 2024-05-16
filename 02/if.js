// let userValue = Number(prompt('Ваш бюджет'));

// if(userValue>1000){
//     console.log(`Вітаємо в нас є 100 пропозицій`);
// }
// else{
//     console.log(`Вітаємо в нас є 2 пропозицій`);
// }
// console.log('Пошук завершено');


let yearInfo = 2024;

if(yearInfo < 2024){
    console.log(`This yaer is past`);
}
else if(yearInfo>2024){
    console.log(`This yaer is future`);
}
else{
    console.log(`This yaer is now`);
}


let secretNumber = -600;
if(secretNumber<4){
    console.log(`secret number les than 4`);
}
else if(secretNumber>5 && secretNumber<10){
    console.log(`secret >5 and < 10`);
}
else if(secretNumber>10 && secretNumber<20){
    console.log(`secret >10 and < 20`);
}
else{
    console.log(`Secret number another value`);
}


let isAdmin = true;
// let isUser = false;
// if(isAdmin === false ){
//     console.log('Hello user');
// }

if(!isAdmin){
    console.log('Hello user');
}

let firstNumber = 100;
let secondNumber = 2000;
// let maxValue = null;

// if(firstNumber>secondNumber){
//     maxValue = firstNumber;
// }
// else{
//     maxValue = secondNumber;
// }
// console.log(`Max value ${maxValue}`);


let maxValue = firstNumber>secondNumber ? firstNumber : secondNumber;

console.log(`Max value ${maxValue}`);

