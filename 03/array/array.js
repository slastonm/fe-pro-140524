//let myFirstArray = [];// empty array;
let innerArrayValue = 'Test variable'
;let myFirstArray = ['Hello',23, true, 100, false, 'World', ['Inner array'], innerArrayValue ];
console.log(myFirstArray);

let secondArray = new Array();
console.log(secondArray);
secondArray[0]='First shell';
secondArray[1]='Second shell';
secondArray[2]=123;
secondArray[3]=true;
secondArray[4] = innerArrayValue;

console.log(secondArray);

let emptyArray = new Array(10);
console.log(emptyArray);

let firstUser = 'Tom';
let secondUser ='Bob';
let users = [firstUser, secondUser, 'Roy', 'Nick', 'Diana', 'Anna'];
// console.log( `Hello user ${users[0]}`);
// console.log( `Hello user ${users[1]}`);
// console.log( `Hello user ${users[2]}`);
console.log(users.length);

for(let i =0; i<users.length; i++){
    console.log( `Hello user ${users[i]}`);
}

let userInfo = [
    ['Tom', 'tom@gmail.com', 25],
    ['Bob', 'tom@gmail.com', 25],
    ['Diana', 'diana@gmail.com', 24]
]

for(let i=0; i<userInfo.length; i++){
    console.log(userInfo[i]);
    for(let c = 0; c<userInfo[i].length; c++){
        console.log(`User info: ${userInfo[i][c]}`);
    }
    console.log('=====');
}

let numbersArray = ['First value',2,3,4,5,'Last value'];
console.log(`First array element ${numbersArray[0]}`);
console.log(`Last array element ${numbersArray[numbersArray.length-1]}`);

for (let index = 7; index > 0; index--) {
    console.log(index);
    
}

for(let i = numbersArray.length-1; i>-1; i-- ){
    console.log(`Reverse value ${numbersArray[i]}`);
}


let emptySlots = ['test',,'test2'];
console.log(emptySlots);



