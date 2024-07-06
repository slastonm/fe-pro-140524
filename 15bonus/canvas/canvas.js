window.onload = function(){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle='black';
    ctx.fillRect(0,0, canvas.width, canvas.height);

    function drawDot(x,y){
        ctx.fillStyle ='white';
        ctx.beginPath();
        ctx.arc(x, y, 5, 0 , Math.PI*2, true);
        ctx.fill();
    }

    canvas.addEventListener('click', function(e){
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX- rect.left;
        const y = e.clientY- rect.top;
        drawDot(x,y);
    });
}