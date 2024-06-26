window.onload = function(){
    let simpleRegEx = /hi/;
    let simpleRegExPatern = /\d\d\d/g;
    console.log(simpleRegExPatern);
    let regClass = new RegExp('hi');
    let regClassPatern = new RegExp('\d\d\d');

    let textValue = document.querySelector('p').textContent;
    console.log(textValue);

    let firstSearch = textValue.search(simpleRegExPatern);
    console.log(firstSearch);

    let newResult = textValue.replace(simpleRegExPatern, '!!!');
    // document.querySelector('p').textContent = newResult;


    let matchResult = textValue.match(simpleRegExPatern);
    console.log(matchResult);

    let pinCodePatern = /\d\d\d\d/;

    console.log(pinCodePatern.test('123'));
    console.log(pinCodePatern.test('1234'));
    console.log(pinCodePatern.test('12 34'));
    console.log(pinCodePatern.test('12a3'));
    console.log(pinCodePatern.test('!2a3'));




}