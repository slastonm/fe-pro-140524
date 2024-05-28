function wellcomeUser(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i]);
    }
}
function hiUser(value){
    console.log(`Hi how are you ${value}`);
}
let arrowHi = (value)=>{
    console.log(`Hi arrow ${value}`);
}

let users = ['Tom','Bob','John'];
let listUsers = ['Ann','Julia','Elen'];

wellcomeUser(users, hiUser);
wellcomeUser(listUsers, arrowHi);

function powerValue(number, exponent){
    let result = 1;
    for(let i=0; i<exponent; i++){
        result*=number;
    }
    return result;
}
console.log(`2 in 2 ${powerValue(2,2)}`);
console.log(`4 in 2 ${powerValue(4,2)}`);
console.log(`2 in 3 ${powerValue(2,3)}`);

function squerArr(arr){
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[index]*arr[index]);
    }
    return newArr;
}

console.log(`New arr ${squerArr([2,4,6])}`);
console.log(`New arr ${squerArr([3,5,7])}`);

function addUniqNumber(arr, num){
    for(let i=0; i<arr.length; i++){
        if(arr[i] === num){
            return arr;
        }
    }
    arr.push(num);
    return arr;
}
console.log(`Test function ${addUniqNumber([1,2,3], 4)}`);
console.log(`Test function ${addUniqNumber([1,2,3], 2)}`);
console.log(`Test function ${addUniqNumber([1,2,3], 5)}`);


function sortAndRemoveMax(arr){
    arr.sort((a,b)=>a-b);
    arr.pop();
    return arr;
}
console.log(`Test sort and remove ${sortAndRemoveMax([1,5,3,7])}`);
console.log(`Test sort and remove ${sortAndRemoveMax([11,50,3,7])}`);

function findMax(arr){
    let maxValue = arr[0];
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log(`Bubl sorting ${findMax([100,5,6,10])}`);
console.log(`Bubl sorting ${findMax([100,5000,6,10])}`);
console.log(`Bubl sorting ${findMax([-100,-5000,6,-10])}`);


