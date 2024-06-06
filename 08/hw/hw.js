function minValue(a, b){
    return Math.min(a,b);
}

console.log(`Min value 3 and 7 is ${minValue(3,7)}`);

let myString = 'My string js split by space';
let arrMyString = myString.split(' ');
let upperCaseArr = arrMyString.map(word=>word.toUpperCase());

console.log(arrMyString);
console.log(upperCaseArr);


function restExample(str, ...args){
    console.log(`String value ${str}`);
    console.log(`Args value ${args}`);
    console.log(args);

}

restExample('Hello string', 1,2,3,4,5,6);

function checkValueType(value){
    if(typeof value === 'number'){
        console.log(`${value} це число`);
    }
    else if(typeof value === 'string'){
        console.log(`${value} це рядок`);
    }
    else{
        console.log(`${value} це iнший тип`);
    }
}

checkValueType(23);
checkValueType('String');
checkValueType(null);
checkValueType(NaN);


