let prodcuct1 = 'product1';
let prodcuct2 = 'product2';
// ...
// console.log(prodcuct1);
// console.log(prodcuct2);

// console.log('1*1');
// console.log('1*2');
// DRY don't repeat yourself
let counter = 1;
do{
    console.log(`Counter value ${counter}`);
    counter++;
}while(counter<5);


let whileCounter = 0;
while(whileCounter<6){
    console.log(`While counter ${whileCounter}`);
    whileCounter++;
}

for(let i = 0; i<10; i++){
    if(i%2 === 0){
        continue;
    }
    console.log(`I value : ${i}`);
    // if(i=== 5){
    //     break;
    // }
}