window.onload = function(){
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }
    window.addEventListener('scroll', function(){
        let scrollPositionY = window.scrollY;
        // console.log(`Scroll position ${scrollPositionY}`);
        if(Math.floor(scrollPositionY)%100 === 0){
            // console.log(`Scroll position ${scrollPositionY}`);
            document.body.style.background = getRandomColor();
        }
    });

    let pEl = document.querySelector('p');
    pEl.addEventListener('copy', function(e){
        e.preventDefault();
        alert('Копіювати заборонено');
    });
    let textAreaEl =  document.querySelector('textarea');
    textAreaEl.addEventListener('paste', function(e){
        e.preventDefault();
        alert('Done');
    });
    let infoTitle = document.querySelector('h4');
    function sizeInfo(){
        let sizeW = window.outerWidth;
        let sizeH = window.outerHeight;
        infoTitle.textContent = `Width ${sizeW} Height ${sizeH}`;
    }
    window.addEventListener('resize', sizeInfo);
}