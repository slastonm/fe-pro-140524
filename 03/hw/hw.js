let firstNumber = 10; 
let seconNumber = 4;
if(firstNumber === seconNumber){
    alert('first = second');
}
else{
    alert('first != second');
}

let useNumber = Number(prompt('Type Number'));
// let useNumber = Number(input.value);

if(useNumber%2 === 0 ){
    console.log('Парне число');
}else{
    console.log('He Парне число');

}

let usePrice = Number(prompt('Price'));
let useQuantity = Number(prompt('Quantity'));
let totalCost = usePrice*useQuantity;
console.log(`Total price = ${totalCost}`);


let discount = userPrise*0.5;
alert(`Price with discoutn ${discount}`);


let num1 = 2;
let num2 = 3;
let num3 = 4;

if(num2>num1 && num3>num2){
    console.log(num3);
}
else if(num1>num2 && num1>num3){
    console.log(num1);
}
else{
    console.log(num2);
}

let month = 3;

if(month>=3 && month<=5){
    console.log('Spring');
}
else if(month>=6 && month<=8){
    console.log('Summer');
}
else if(month>=9 && month<= 11){
    console.log('Outem');
}
else if(month === 12 || month === 1 || month === 2 ){
    console.log('Winter');
}
else{
    console.log('Any information');
}

let studentScore = 70;


if(studentScore>=90 && studentScore<=100){
    console.log('A');
}
else if(studentScore>=80 && studentScore<90){
    console.log('B');
}
else if(studentScore>=70 && studentScore<80){
    console.log('c');
}
else if(studentScore>=60 && studentScore<70){
    console.log('D');
}
else if(studentScore<60){
    console.log('F');
}
else{
    console.log('No information about score');
}