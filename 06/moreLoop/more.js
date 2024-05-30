// for of
let myArr = ['My', 'Arr', 'Hello', 123];
for (const value of myArr) {
    console.log(`For of value: ${value}`);
}

let myObjArr = [
    {
        usreName:'Tom',
        userAge:20
    },
    {
        usreName:'Tomas',
        userAge:24,
        producQuantity: 20
    }
]

for(const user of myObjArr){
    console.log(`user info: ${user.usreName} age: ${user.userAge}`);
}

let myObj = {
    a:111,
    b:222,
    c:true
}

// for(const objValue of myObj){
//     console.log(objValue);
// }

for(const letter of 'Hello'){
    console.log(letter);
}


// for in
for(let key in myObj){
    console.log(key);
    console.log(`Key value: ${key} is: ${myObj[key]}`);
}

let laptop ={
    brandName:'Apple',
    memory:'512Gb',
    RAM:'16GB',
    fingerPrintProtect:function(value){
        if(value == 'fingerprint'){
            return true;
        }
        else{
            return false;
        }
    }
}

// let myLaptop = {};
let myLaptop = new Object();
