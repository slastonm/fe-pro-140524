let numberValue = 1;
// numberValue = numberValue +1;
numberValue += 1;

// Postfix increment decrement

let postFixIncerment = 1;
console.log(`Start value ${postFixIncerment}`); //1
console.log(`Call postfixIncrement ${postFixIncerment++}`);
console.log(`Second call postfixIncrement ${postFixIncerment}`);
console.log(`Call postfixIncrement ${postFixIncerment++}`);
console.log(`Second call postfixIncrement ${postFixIncerment}`);
console.log(`Call postfixIncrement ${postFixIncerment++}`);
console.log(`Second call postfixIncrement ${postFixIncerment}`);
console.log('=====');
let postFixDecrement = 4;
console.log(`Start value ${postFixDecrement}`); //4
console.log(`Call postfixDecrement ${postFixDecrement--}`);//4
console.log(`Second call postfixDecrement ${postFixDecrement}`);//3
console.log(`Call postfixDecrement ${postFixDecrement--}`);
console.log(`Second call postfixDecrement ${postFixDecrement}`);
console.log(`Call postfixDecrement ${postFixDecrement--}`);
console.log(`Second call postfixDecrement ${postFixDecrement}`);

console.log('=====');

let prefixIncrement = 1;
console.log(`Start value ${prefixIncrement}`); //1
console.log(`Call prefixIncrement ${++prefixIncrement}`);
console.log(`Second call prefixIncrement ${prefixIncrement}`);
console.log(`Call prefixIncrement ${++prefixIncrement}`);
console.log(`Second call prefixIncrement ${prefixIncrement}`);
console.log(`Call prefixIncrement ${++prefixIncrement}`);
console.log(`Second call prefixIncrement ${prefixIncrement}`);
console.log('=====');
let prefixDecrement = 4;
console.log(`Start value ${prefixDecrement}`); //4
console.log(`Call prefixDecrement ${--prefixDecrement}`);//3
console.log(`Second call prefixDecrement ${prefixDecrement}`);//3
console.log(`Call prefixDecrement ${--prefixDecrement}`);//2
console.log(`Second call prefixDecrement ${prefixDecrement}`);
console.log(`Call prefixDecrement ${--prefixDecrement}`);
console.log(`Second call prefixDecrement ${prefixDecrement}`);

