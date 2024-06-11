window.onload = function(){
    let myBlockEl = document.querySelector('.myBlock');
    let widthBlock = myBlockEl.offsetWidth;
    let heightBlock = myBlockEl.offsetHeight;

    console.log(`Ofset w: ${widthBlock} ofset h:${heightBlock}`);

    let clientWidth = myBlockEl.clientWidth;
    let clientHeight = myBlockEl.clientHeight;

    console.log(`Client w: ${clientWidth} Client h:${clientHeight}`);

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    let bodyEl = document.querySelector('body');
    console.log(`Window size ${windowWidth} and ${windowHeight} body size ${bodyEl.clientWidth} and ${bodyEl.clientHeight}`);
    // let r = Mat.random()
    // bodyEl.style.backgroundColor = `rgb(65, 111, 69)`
}