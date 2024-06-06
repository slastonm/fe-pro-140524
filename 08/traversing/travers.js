window.onload = function(){
    let ulEl = document.querySelector('ul');
    let [...ulChildren] = ulEl.children;
    console.log(ulChildren);

    // console.log(ulEl.firstChild); може повернути текстовий вузол 
    console.log(ulEl.firstElementChild);
    console.log(ulEl.lastElementChild);
    ulEl.firstElementChild.innerText = 'First';
    ulEl.lastElementChild.innerHTML = 'Last';

    let activeEl = document.querySelector('.active');
    console.log(activeEl);
    console.log(activeEl.nextElementSibling);
    console.log(activeEl.previousElementSibling);
    activeEl.nextElementSibling.innerText = 'Next active';
    activeEl.previousElementSibling.innerText ='Previous active';

    let paretnEl = activeEl.parentElement;

    paretnEl.style.background = 'red';
    // console.log(paretnEl.parentElement);

}