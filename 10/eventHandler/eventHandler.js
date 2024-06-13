window.onload = function(){
    // let handle = true;
    let handle = false;

    let firstEl = document.querySelector('.first');
    let secondEl = document.querySelector('.second');
    let thirdEl = document.querySelector('.third');

    firstEl.addEventListener('click', function(e){
        alert('First');
        e.stopPropagation();
        this.style.background = '#b0cd23';
    }, handle);
    secondEl.addEventListener('click', function(e){
        alert('Second');
        e.stopPropagation();
        this.style.background = 'gray';
    }, handle);
    thirdEl.addEventListener('click', function(e){
        alert('Third');
        e.stopPropagation();
        this.style.background = 'coral';
    }, handle);
    
}