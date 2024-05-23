let dayOfWeek = ['Пн','Вт','Ср', 'Чт', 'Пт'];
for (let index = 0; index < dayOfWeek.length; index++) {
    if(dayOfWeek[index] =='Вт'||dayOfWeek[index] =='Чт'){
        console.log('Lesson js');
    };
    
}

let start = 1;
let end = 20;
let summ = 0;
let i = start;

while (i<=end){
    if(i%2===0){
        summ+=i;
    }
    i++;
}
console.log(`Сумма парних чисел від ${start} - ${end} = ${summ}`);

let numberValue = 5;
for(let i =0; i<=10; i++){
    console.log(`${numberValue} * ${i} = ${numberValue*i}`);
}

for(let i=10; i>=1; i--){
    console.log(i);
}


let userNum = Number(prompt('Type number'));
for(let i =0; i<=userNum; i++){
    if(i%2==0){
        console.log(`${i} %2 `);
    }
    else{
        console.log(`${i}  не парне`);
    }
}

for(let i=0; i<=10; i++){
    if(i%2===0){
        console.log('Перше парне число');
        break;
    }
}

for(let i=0; i<=10; i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
}


let userDay = prompt('Type day');

switch(userDay){
    case 'Пн':
    case 'Ср':
    case 'Пт':
    case 'Cб':
    case 'Нд':        
        console.log('У вас вільний вечір');
        break;
    case 'Вт':
    case 'Чт':        
        console.log('У вас js');
        break;
    default:
        console.log('No information');
        break;
}

let smile = [':)', '=)', ':)', '=)', ':)', '=)'];

for(let i=0; i<smile.length; i++){
    if(smile[i] === '=)'){
        smile[i] = ';)';
    }
}

console.log(smile);