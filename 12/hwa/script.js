// window.addEventListener('click', function(event) {
//     console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
//     console.log(`screenX: ${event.screenX}, screenY: ${event.screenY}`);
// });
window.onload = function(){
    let textBlockEl = document.querySelector('#textBlock');
    let contextMenuEl = document.querySelector('#contextMenu');

    textBlockEl.addEventListener('contextmenu', function(e){
        e.preventDefault();
        contextMenuEl.style.display ='block';
        contextMenuEl.style.left = `${e.pageX}px`;
        contextMenuEl.style.top = `${e.pageY}px`;
    });

    document.querySelector('#centerContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'center';
    });
    document.querySelector('#rightContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'right';
    });
    document.querySelector('#leftContent').addEventListener('click', function(){
        textBlockEl.style.textAlign = 'left';
    });
    document.querySelector('#hideMenu').addEventListener('click', function(){
        contextMenuEl.style.display = 'none';
    });

    let gameArea = document.querySelector('#gameArea');
    let moveObj = document.querySelector('#movableObject');

    let step = 5;
    let position = {
        top:225,
        left:225
    }
    document.addEventListener('keydown', function(e){
        switch(e.key){
            case 'ArrowUp':
                position.top = Math.max(0, position.top-step);
                break;
            case 'ArrowDown':
                position.top = Math.min(gameArea.clientHeight - moveObj.clientHeight, position.top+step);
                break;
            case 'ArrowLeft':
                position.left = Math.max(0, position.left-step);
                break;
            case 'ArrowRight':
                position.left = Math.min(gameArea.clientWidth - moveObj.clientWidth, position.left+step);
                break;
        }
        moveObj.style.top = `${position.top}px`;
        moveObj.style.left = `${position.left}px`;

    })
}