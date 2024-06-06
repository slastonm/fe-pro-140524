window.onload = function(){
    let linkEl = document.querySelector('#main');
    let hrefValue = linkEl.getAttribute('href');
    let classValue = linkEl.getAttribute('class');
    let targetValue = linkEl.getAttribute('target');
    console.log(hrefValue);
    console.log(classValue);
    console.log(targetValue);

    let btnEl = document.querySelector('button');
    let disabledAttr  = btnEl.hasAttribute('disabled');
    console.log(disabledAttr);
    
}