let numberEx = 42;
if(typeof numberEx === 'number'){
    console.log(`numberEx is number`);
}
console.log(typeof numberEx);

let strinValue = 'String';
console.log(typeof strinValue);

let objEx = {
    username:'test'
}
console.log(typeof objEx);

let arrEx = [1,2,4]
console.log(typeof arrEx);

let boolEx = false;
console.log(typeof boolEx);

let myFn = ()=>'String';

console.log(typeof myFn);

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello my name is ${this._name}`);
    }
}

console.log(typeof Person);

const hiddenKey = Symbol('hidden');

console.log(typeof hiddenKey);

console.log(typeof null);// obj
console.log(typeof undefined);
console.log(typeof NaN);
