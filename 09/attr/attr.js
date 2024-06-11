
window.onload = function(){
    let buttonEl = document.querySelector('button');  
    buttonEl.setAttribute('class', 'btn btn-primary');
    // buttonEl.setAttribute('class', 'btn-primary');  
    let linkEl = document.querySelector('a');
    linkEl.setAttribute('class', 'btn me-3');
    linkEl.removeAttribute('target');
    buttonEl.removeAttribute('disabled');
    linkEl.setAttribute('style','background-color:red');
}


