// > < >=  <=

// > 
console.log(`2>3 ${2>3}`);
console.log(`20>3 ${20>3}`);

// >=
console.log(`2>=2 ${2>=2}`);
console.log(`2>=3 ${2>=3}`);

console.log(`2>=1 ${2>=1}`);

// <
console.log(`2<3 ${2<3}`);
console.log(`20<3 ${20<3}`);
console.log(`2 string <3 ${'2'<3}`);
console.log(`2 string <2 ${'2'<2}`);

console.log(`2 <=2 ${2<=2}`);
console.log(`3 <=2 ${3<=2}`);
console.log(`1 <=2 ${1<=2}`);

// &&
// true && true = true
// true && fale = false
// false && true = false
// false && false = false

console.log(`&&`);
console.log(`2>1 && 4>1 ${(2>1) && (4>2)}`);
console.log(`2>1 && 4>1 && (3>6) ${(2>1) && (4>2) && (3>6)}`);
console.log(`2>1 && 4>1 && 3>2 ${(2>1) && (4>2) && (3>2)}`);


//||  or. или чи 
// true|| true = true
// true|| false = true
// false || true = true
// false || false = false
console.log('||');
console.log(`true || false ${2>1 || 3>20}`);
console.log(`true || false || false  ${2>1 || 3>20 || 3>4}`);
console.log(`false || false || false  ${0>1 || 3>20 || 3>4}`);


let userAge = 16;
console.log(`Check user age. Status ${userAge>18}`);

















