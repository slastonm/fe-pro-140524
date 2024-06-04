let myString = '              JavaScript css css';
console.log(myString.length);

let resultString = myString.replace('css','html');
console.log(resultString);

let sliceStr = myString.slice(1,5);
console.log(sliceStr);
console.log(resultString);

// let citys = 'Kиїв,Львів,Харків,Чернігів';
let citys = 'Kиїв,   Львів  , Харків-Чернігів';


let citysArr = citys.split('-');
console.log(citysArr);

let userInputCat = '        CatName   ';
let clearInput = userInputCat.trim();
// let clearInput = userInputCat.trimStart();
// let clearInput = userInputCat.trimEnd();


console.log(userInputCat.length);
console.log(clearInput.length);


// кАмінь === КамінЬ   КАМІНЬ === Камінь

let uppeCaseName = clearInput.toUpperCase();

let lowerCaseName = clearInput.toLowerCase();

console.log(uppeCaseName);
console.log(lowerCaseName);



