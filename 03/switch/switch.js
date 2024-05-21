// ===
let buyItem = 'Milk';
switch(buyItem){
    case 'orange':
        console.log(`Orange cost = 1$`);
        break;
    case 'milk':
    case 'Milk':
        console.log('Milk cost = 2$');
        break;
    default:
        console.log(`Any information about ${buyItem}`);
        break;
}

// let traficLight = 'green';
let traficLight = 'Червоний';

switch(traficLight){
    case 'Зелений':
    case 'Green':
    case 'green':
        console.log('go');
        break;
    case 'Червоний':
    case 'Red':
    case 'red':
        console.log('stop');
        break;
    case 'Помаренчевий':
    case 'Orange':
    case 'orange':
        console.log('preper');
        break;
    default:
        console.log('Error');
        break;        
}