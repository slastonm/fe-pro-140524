let firstPromise = new Promise(function(resolve, reject){
    console.log('Hello promise');
});

//pending
//fulfielled
//rejected


let x = 2;
let y = 0;

// let calcPromise = new Promise(function(resolve, reject){
//     if(y === 0){
//         reject(alert('0 is bad value'));
//     }
//     else{
//         let result = x/y;
//         resolve(alert(`Resolve result ${result}`));
//     }
// });

let numberValue = 1;
let checkNumber = new Promise(function(resolve, reject){
    if(numberValue >2){
        resolve('Nice number');
    }
    else{
        reject('Bad value try another number');
        throw 'Small number';
    }
});

checkNumber.then(function(value){
    console.log(value);
}).catch((e)=>{
    console.log(e);
});


let firstP = new Promise(function(resolve){
    resolve('First promise text');
});


let secondP = firstP.then(function(value){
    return(`${value} second promise text`);
});

let thirdP = secondP.then(function(value){
    return(`${value} third promise text`);
});

let finalP = thirdP.then(function(finalValue){
    console.log(`Finish: ${finalValue} `);
});


new Promise(resolve=>resolve('First value'))
.then(value=>`${value} second P`)
.then(value=>`${value} third P`)
.then(finalValue=>{
    console.log(finalValue);
});

let myFinalPromise = new Promise((resolve, reject)=>{
    let valueCondition = false;
    if(valueCondition){
        resolve('==== My final Promise result ====');
    }
    else{
        reject('!!! Promise reject !!!');
    }
});

myFinalPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Finally work');
})