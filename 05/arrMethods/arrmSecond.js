let spliceArr = [0,1,2,3,4,5,6];

// let afterSplice = spliceArr.splice();
// let afterSplice = spliceArr.splice(2);
// let afterSplice = spliceArr.splice(2,3);
let afterSplice = spliceArr.splice(-1);


console.log(`after call spice: ${afterSplice}`);
console.log(`after call spice origin: ${spliceArr}`);

console.log('Reverse');
let reverseArr = ['First', 2,true, false, 120,'last'];
reverseArr.reverse();
console.log(`Reverse result ${reverseArr}`);

let firstArr = [1,2,3];
let secondArr = [4,5,6];

firstArr = firstArr.concat(secondArr, [11,12,13], 15);
firstArr = firstArr.concat(16,17,'test');

console.log(firstArr);

let includesArr = [1,2,3,'test'];
console.log(`2 includes to includesArr ${includesArr.includes(2)}`);
console.log(`test includes to includesArr ${includesArr.includes('test')}`);
console.log(`0 includes to includesArr ${includesArr.includes(0)}`);
console.log(`10 includes to includesArr ${includesArr.includes(10)}`);

console.log('IndexOf');

let indexArr =[1,2,3,100,'test','value'];
let findIndex = indexArr.indexOf('value');
if(findIndex>0){
    indexArr[findIndex] ='new value';
}
console.log(indexArr);
console.log(`Find index ${findIndex}`);
console.log(`2 index is ${indexArr.indexOf(2)}`);
console.log(`test index is ${indexArr.indexOf('test')}`);
console.log(`test index is ${indexArr.indexOf('test2')}`);
console.log(`test index is ${indexArr.indexOf(250)}`);

let joinArr = ['Hello','World'];
let afterJoin = joinArr.join(',');
let newStr = afterJoin.toLocaleUpperCase();
console.log(afterJoin);
console.log(newStr.split(','));


let sliceArr = ['Hello',2,3,4,5,6];

// let afterSlice = sliceArr.slice();
// let afterSlice = sliceArr.slice(3);
// let afterSlice = sliceArr.slice(-2);
let afterSlice = sliceArr.slice(3,5);


console.log(`after call slice: ${afterSlice}`);
console.log(`after call slice origin: ${sliceArr}`);


let userAges = [19,10,20,34,25,74,17];
function checkUserAge(value){
    return value >=20;
}

let filtredAges = userAges.filter(checkUserAge);
console.log(filtredAges);
console.log(`Origin ${userAges}`);

let pairAge = userAges.filter((number)=>number%2 === 0);
console.log(pairAge);

let shortSort = userAges.filter(value =>value<30);
console.log(shortSort);


console.log('ForEach');
// Array.forEach((value, index, array)={})

let myForEachArr = ['My','For', 'Each', 'Test'];
myForEachArr.forEach((value,index, arr)=>{
    console.log(`Foraeach ${value} value index ${index} from ${arr}`);
})

let numbersForEach = [10,20,30];

numbersForEach.forEach(item=>{
    console.log(`Call each number and manipulate ${item*5}`);
})

console.log(numbersForEach);


console.log('Map');

// arr.map((value, index, array)={})

let beforeMap = [11,12,13];
let afterMap = beforeMap.map((value, index, arr)=>{
    return `Arr value ${value}, index:${index} from ${arr}`
});
console.log(beforeMap);
console.log(afterMap);

let doubleValue = beforeMap.map(item=>item*2);
console.log(doubleValue);
function tripleValue(value){
    return value*3;
}
let tripleArr = beforeMap.map(tripleValue);
console.log(tripleArr);



