let todoList = [];

// push додає значення в кінець массива
todoList[0]='Buy milk';
todoList.push('HW');
todoList.push('Watch video');
todoList.push(1);
todoList.push(true);
todoList.push(['test', 'push']);
todoList.push('new test','new test2');

console.log(todoList);

// pop Видаляє останній елемент массиву
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);
todoList.pop();
console.log(todoList);

//unshift  додає значення на початок масиву

todoList.unshift(0);
console.log(todoList);
todoList.unshift('Test');
console.log(todoList);
todoList.unshift('Start');
console.log(todoList);
todoList.unshift('This Start');
console.log(todoList);
todoList.unshift('new start', 3, true, ['new test', 'value']);
console.log(todoList);

//Shift видаляє елемент на початку массиву

todoList.shift();
console.log(todoList);
todoList.shift();
console.log(todoList);
todoList.shift();
console.log(todoList);
todoList.shift();
console.log(todoList);

// isArray повертає true якщо це массив false якщо щось інше
let myArr = [3,2,1];
console.log(`Is array ${Array.isArray(4)}`);
console.log(`Is array ${Array.isArray(true)}`);
console.log(`Is array ${Array.isArray('true string')}`);

console.log(`Is array ${Array.isArray([1,2,3])}`);
console.log(`Is array ${Array.isArray(myArr)}`);

let fillArr = [1,2,3,4,5,6];
fillArr.fill('New');
console.log(fillArr);
fillArr.fill('*',0,5);
console.log(fillArr);

fillArr.fill('^_^',3);
console.log(fillArr);

let userBase = new Array(100);
console.log(userBase);
userBase.fill('No user info');
console.log(userBase);

//Sort 
let sortMe = [13,4,1,2,15];
// let sortMe = ['Cat','Bat','Rat','Cow'];

// console.log(sortMe.sort());
//Up
console.log(sortMe.sort((a,b)=>a-b));
//Down
console.log(sortMe.sort((a,b)=>a+b));









