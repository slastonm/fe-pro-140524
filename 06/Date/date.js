let nowDate = new Date();
console.log(nowDate);

// new Date(year, month, hours, minutes, seconds, ms)

let firstDate = new Date(2024);
let secondsDate = new Date(2024, 1);
let thirdDate = new Date(2024, 1, 12, 10, 30);

console.log(firstDate);
console.log(secondsDate);
console.log(thirdDate);

console.log(`Повернути день ${thirdDate.getDate()}`);
console.log(`Повернути день тижня ${thirdDate.getDay()}`);
console.log(`Повернути рік ${thirdDate.getFullYear()}`);

console.log(`Повернути годинy ${thirdDate.getHours()}`);
console.log(`Повернути місяць ${thirdDate.getMonth()}`);

console.log(`Datstring ${thirdDate.toDateString()}`);
console.log(`toUTCstring ${thirdDate.toUTCString()}`);
console.log(`to JSON ${thirdDate.toJSON()}`);






