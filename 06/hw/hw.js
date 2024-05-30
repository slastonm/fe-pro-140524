function removeElements(arr, index, count){
    arr.splice(index, count);
    return arr
}

let remArr = [1,2,3,4,5,6];
let secondRemArr = [7,8,9,10,1,2];

console.log(`test splice ${removeElements(remArr, 2, 3)}`);
console.log(`test splice ${removeElements(secondRemArr, 0, 3)}`);

function reverseArr(arr){
    return arr.reverse();
}

function summArray(arr1, arr2){
    return arr1.concat(arr2);
}

console.log(summArray(remArr, secondRemArr));

function arrayIncludes(arr, element){
    // return arr.includes(element);
    if(arr.includes(element)){
        return `${element } in array`
    }
    else{
        return `${element} dosen't exist in arr`
    }
}

console.log(arrayIncludes([1,2,3], 4));
console.log(arrayIncludes([1,2,3], 2));

function mapArray(arr, transform){
    let newArr = arr.map(transform);
    return newArr;
}

function newItem(value){
    return `String + ${value}`;
}
console.log(mapArray([1,2,3], element=>`Number: ${element}`));

console.log(mapArray([1,2,3], newItem));


function felterAndMumltiply(arr){
    // let evenNumbers = arr.filter(num=>num%2 === 0);
    // let multiplyNumbers = evenNumbers.map(num=>num*2);
    // return multiplyNumbers;
    return arr.filter(num=>num%2 === 0).map(num=>num*2);
}
console.log(felterAndMumltiply([1,2,3,4,5,6]));


function sliceAndReverse(arr, start, end){
    // let slicedArr = arr.slice(start, end);
    // let reversedValue = slicedArr.reverse();
    return arr.slice(start, end).reverse();
}

console.log(sliceAndReverse([1,2,3,4,5,6], 1,4));

function filterSlicer(arr){
    // let filterValue = arr.filter(num=>num>10);
    // let slicedArr = filterValue.slice(0,3);
    // return slicedArr;
    return arr.filter(num=>num>10).slice(0,3);
}

console.log(filterSlicer([5,7,17,20,3,4,11,12,9]));
