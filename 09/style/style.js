window.onload = function(){
    let h1Title = document.querySelector('h1');
    h1Title.setAttribute('style','background-color:yellow;');
    // h1Title.setAttribute('style','text-align:center');
    h1Title.style.cssText +='text-align:center; padding:50px;';

    let pEl = document.querySelector('p');
    console.log(pEl.style);
    pEl.style.marginTop = '50px';
    pEl.style.fontSize = '25px';
    pEl.style.padding= '50px';
    pEl.setAttribute('class', 'textStyle');

    let divEl = document.querySelector('.myBlock');
    // divEl.className +=' border p-3';
    console.log(divEl.className);
    console.log(divEl.classList);

    divEl.classList.add('border');
    // divEl.classList.add('p-4');
    divEl.classList.add('d-flex', 'p-4', 'mx-auto', 'w-50', 'bg-info');

    // divEl.classList.remove('d-flex');
    // divEl.classList.remove('border');

    divEl.classList.remove('border', 'd-flex', 'mx-auto');
    divEl.classList.remove('border', 'd-flex', 'mx-auto');


    divEl.classList.replace('bg-info', 'bg-warning');
    // divEl.classList.replace('bg-info2', 'bg-warning');

    console.log(divEl.classList.contains('bg-warning'));
    console.log(divEl.classList.contains('bg-danger'));

    if(divEl.classList.contains('bg-warning')){
        divEl.classList.replace('bg-warning', 'bg-info');
        divEl.classList.add('mx-auto');
    }
    // else{

    // }

    // divEl.classList.toggle('show');
    let buttonEl = document.querySelector('button');

    buttonEl.onclick = function(){
        divEl.classList.toggle('show');
    }


}