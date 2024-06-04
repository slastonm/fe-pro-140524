const hiddenKey = Symbol('hidden');
const secondHiddenKey = Symbol('hidden');

console.log(hiddenKey);
console.log(secondHiddenKey);
console.log(hiddenKey === secondHiddenKey);
console.log(hiddenKey == secondHiddenKey);


// Spread

let firstArr = [1,2,3];
let secondArr = [...firstArr, 4,5,6];
console.log(secondArr);

let firstObj = {
    a:1,
    b:2
}
let secondObj = {
    ...firstObj,
    c:3
}
console.log(secondObj);

function sum(...arg){
    return arg
}

console.log(sum(1,2,3,4,5,6));

let numbers = [10,30,40];
let [firts, second, third] = numbers;
// let firstNum = numbers[0];
console.log(firts);
console.log(second);
console.log(third);


const hero = {
    nickName:'Batman',
    realName:'Bruce',
    suitColor:'green'
}

// console.log(hero.nickName, hero.realName);

const {nickName, realName, suitColor='black'} = hero;
console.log(`Hello ${nickName} and ${realName} suit color ${suitColor}`);

const heroes = [
    {name:'Batman'},
    {name:'Joker'}
]
for(const {name} of heroes){
    console.log(name);
}
