window.onload = function(){
    function changeTitle(){
        let title = document.querySelector('h1');
        title.textContent = 'Time over';
    }

    // setTimeout(function(){
    //     let title = document.querySelector('h1');
    //     title.textContent = 'Time over';
    // }, 5000)
    let timeout = setTimeout(changeTitle, 6000);
    document.querySelector('#timeOutBtnStop').onclick = function(){
        clearTimeout(timeout);
    }
    let count = 0;
    let intervalCounter = setInterval(function(){

        let title = document.querySelector('h1');
        count++;
        title.textContent = `Time over ${count}`;
    },
    2000);

    document.querySelector('#intervalBtnStop').onclick = function(){
        alert('interval Stop');
        clearInterval(intervalCounter);
    }
}