window.onload = function(){
    let formEl = document.querySelector('form');
    console.log(formEl);
    let [...formElement] = formEl.elements;
    console.log(formElement);
    formEl.elements[0].value='New input value';
}