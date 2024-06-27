// /b

let textTest = ' This is text test  my ';
// let bRegEx = /text\b/;
// let bRegEx = /text/;
let bRegEx = /\btext\b/;


console.log(bRegEx.test(textTest));

let hellooooo = 'Helloooooo wordl';
let plusRegEx = /o+/g;

let oResult = hellooooo.match(plusRegEx);
console.log(oResult);

let simpleWords = 'cat bat rat cow';
// let dotRegEx = /.at/g;
let dotRegEx = /c../g;

let animals = simpleWords.match(dotRegEx);
console.log(animals);

let fruts = 'apple bannan cherry';

let frutRegEx = /apple|bannan/g;
let arrFruts = fruts.match(frutRegEx);
console.log(arrFruts);

let phoneNumber = /^\+38 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
let myNumber ='+28 (051) 123-12-31';

console.log(`Number is ${phoneNumber.test(myNumber)}`);


let emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
let email = 'test@gmail.com';
let emailB = 'test-my@gmail.ua';
let emailC = 'test%my-test-str.gmail.ua';

console.log(emailRegEx.test(email));
console.log(emailRegEx.test(emailB));
console.log(emailRegEx.test(emailC));


