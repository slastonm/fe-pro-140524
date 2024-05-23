// console.log('====');
// console.log('Info');
// console.log('====');
sayHi('Tom');
sayHi('John');
sayHi();

// sayHello('Alex');

function showInfo(){
    console.log('====');
    console.log('Info');
    console.log('====');
}

for(let i=0; i<=5; i++){

    // console.log('====');
    // console.log('Info');
    // console.log('====');
    showInfo();
}
    console.log('Loop1 ');
for(let i=0; i<=3; i++){
    // console.log('====');
    // console.log('Info');
    // console.log('====');
    showInfo();
}
    console.log('Loop2 ');
for(let i=0; i<=5; i++){
    // console.log('====');
    // console.log('Info');
    // console.log('====');
    showInfo();
}
console.log('Loop3 ');


// Function Declaration
function sayHi(name){
    console.log(`Hello ${name}`);
}


//Function Expression 
let sayHello = function(name){
    console.log(`Say hello for ${name}`);
}

sayHello('Bob');


function doneLogin(){
    alert('Login done');
}
function cancelLogin(){
    alert('Login cancel');
}

function checkLogin(userName, done, cancel){
    if(userName==='Admin'){
        done();
    }
    else{
        cancel();
    }
}


// checkLogin('Admin', doneLogin, cancelLogin);
// checkLogin('User', doneLogin, cancelLogin);


function summ(a,b){
    console.log(`a+b=${a+b}`);
}
function minus(a,b){
    console.log(`a-b=${a-b}`);
}
function mult(a,b){
    console.log(`a*b=${a*b}`);
}
function divide(a,b){
    console.log(`a/b=${a/b}`);
}

let firstNum = Number(prompt('Type A value'));
let secondNum = Number(prompt('Type B value'));
let operation = prompt('Type +  - * /');

switch (operation) {
    case '+':
        summ(firstNum, secondNum)
        break;
    case '-':
        minus(firstNum, secondNum)
        break;
    case '*':
        mult(firstNum, secondNum)
        break;
    case '*':
        divide(firstNum, secondNum)
        break;  
    default:
        console.log('No info');
        break;
}


function getResult(a,b){
    console.log(`a+b=${a+b}`);
    return a+b;
}

console.log(`a+b=${getResult(firstNum, secondNum)}`);


let smile = [':)', '=)', ':)', '=)', ':)', '=)'];
let smileSecond = ['#;)', '=)', '#;)', '=)', '#;)', '=)'];



function checkSmile(smile, array, inex){
    if(smile ==='=)'){
        array[inex] = ';)'
    }
};
for(let i=0; i<smile.length; i++){
    checkSmile(smile[i], smile, i);
}
for(let i=0; i<smileSecond.length; i++){
    checkSmile(smileSecond[i], smileSecond, i);
}

console.log(smile);
console.log(smileSecond);

function helloUser(userName='?'){
    console.log(userName);
    if(userName === undefined){
        console.log('Функція в якій аргумент не вказаний');
    }
}
helloUser('Vlad');
helloUser();


function regular(a,b){
    let restult = a+b;
    return restult;
    // return a+b;
}
// let shortFn = (a,b)=>a+b;

let shortFn = (a,b)=>{
    return a+b;
    console.log('Hello arrow fn');
};

console.log(`Test arrow fn ${shortFn(2,2)}`);

// 6 Перепишіть стрілкову функцію в звичайну 
// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a,b,c){
    return a*b*c;
}

let multiplyValuesV = function(a,b,c){
    return a*b*c;
}

