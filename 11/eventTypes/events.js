window.onload = function(){
    let mouseBlock = document.querySelector('.mouseButton');
    let infoBlock = document.querySelector('h2 span');

    mouseBlock.addEventListener('mousedown', function(){
        infoBlock.textContent = 'Натиснута кнопка миші';
    });

    mouseBlock.addEventListener('mouseup', function(){
        infoBlock.textContent = 'Відпущено кнопка миші';
    });


    mouseBlock.addEventListener('click', function(){
        infoBlock.textContent = 'Клік';
    });

    mouseBlock.addEventListener('dblclick', function(){
        infoBlock.textContent = 'Клік 2';
    });

    mouseBlock.addEventListener('mouseover', function(){
        // this.style.backgroundColor = 'green';
        console.log(this);
        this.classList.add('active');
    });
    mouseBlock.addEventListener('mouseout', function(){
        // this.style.backgroundColor = 'white';
        this.classList.remove('active');
    });
    let menuEl = document.querySelector('.menu');
    mouseBlock.addEventListener('contextmenu', function(e){
        // alert('Hello');
        menuEl.classList.add('active');
        e.preventDefault();
    });
    document.body.onclick = function(){
        menuEl.classList.remove('active');
    }

    let infoP = document.querySelector('.mouseButton p');
    mouseBlock.addEventListener('mousemove', function(e){
        console.log(e);
        infoP.innerHTML =`
        <div>${e.clientX} and Y: ${e.clientY}</div>`;
    });
    let keyInfo = document.querySelector('h1');
    //keydown
    //keyup
    //keypress
    document.body.addEventListener('keydown', function(e){
        console.log(e);
        keyInfo.textContent = `Key press key name=  ${e.key}  code = ${e.code} and functional key alt ${e.altKey} and cltl ${e.ctrlKey} shift ${e.shiftKey}`;
        // keyInfo.textContent = `Key press key name=  ${e.key}`;
        if(e.code === '' && e.ctrlKey === true){
            
        }
    });
}