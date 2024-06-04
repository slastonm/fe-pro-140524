let firstValue = 2;
let secondValue = 3;
let result = firstValue+secondValue;
console.log(`1=${firstValue} 2=${secondValue} result ${result}`);

let arrData = [
    1,2,3, 'A', 'V', 'C', 'D'
];
let changeData=(value)=>value+3;
arrData.forEach(item=>{
    let resuslt = changeData(item);
    console.log(resuslt);
})