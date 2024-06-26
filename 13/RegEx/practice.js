let styleText = 'scss g';
let startRegEx = /^c/
let endRegEx = /ss$/;
console.log(`Test string start C ${startRegEx.test(styleText)}`);
console.log(`Test string end SS ${endRegEx.test(styleText)}`);

let timeString = '17:30';
let time2String = '7:33';

// let timeRegEx = /^\d{1,2}:\d\d $/;
let timeRegEx = /^\d{1,2}:\d{2}$/;


console.log(`Test string end SS ${timeRegEx.test(timeString)}`);
console.log(`Test string end SS ${timeRegEx.test(timeString)}`);



