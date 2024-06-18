function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
window.onload = function(){
    let btnChangeColor = document.querySelector('.colorChanger');
    let colorTextBoxEl = document.querySelector('.colorTextBox');

    btnChangeColor.onclick = function(){
        colorTextBoxEl.style.color = getRandomColor();
        colorTextBoxEl.style.backgroundColor = getRandomColor();

    }

    let resizeBlockEl = document.querySelector('.resizeBlock');

    resizeBlockEl.ondblclick = function(){
        this.style.width = `${this.offsetWidth *2}px`;
        this.style.height = `${this.offsetHeight *2}px`;
    }

    let countBtn = document.querySelector('.countUp');
    let counterEl = document.querySelector('.counter');
    let count = 0;

    function upCount(){
        count++;
        counterEl.textContent = count;
        if(count>10){
            countBtn.removeEventListener('click', upCount);
        }
    }
    countBtn.addEventListener('click', upCount);

    let containerEl = document.querySelector('.container');
    for(let i=0; i<10; i++){
        let newDiv = document.createElement('div');
        newDiv.textContent = `Element ${i+1}`;
        newDiv.style.backgroundColor = getRandomColor();
        newDiv.onclick = function(){
            this.remove();
        }
        containerEl.appendChild(newDiv);
    }
}