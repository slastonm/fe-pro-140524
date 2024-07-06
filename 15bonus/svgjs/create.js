window.onload = function(){
    const svgNS = 'http://www.w3.org/2000/svg';
    let svgContainer = document.querySelector('.container');
    function drawSvgRect(width, height, fill){
        let svg = document.createElementNS(svgNS, 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.display = 'block';

        let svgRect = document.createElementNS(svgNS, 'rect');
        svgRect.setAttribute('width', width);
        svgRect.setAttribute('height', height);
        svgRect.setAttribute('fill', fill);

        svg.appendChild(svgRect);
        svgContainer.appendChild(svg);
    }

    drawSvgRect(100, 200, 'orange');
    drawSvgRect(100, 200, 'yellow');

}