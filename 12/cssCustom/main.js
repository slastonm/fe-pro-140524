window.onload = function(){
    let changeBtn = document.querySelector('.changeTheme');
    changeBtn.onclick = function(){
        let root = document.documentElement;
        let bodyStyle = getComputedStyle(document.querySelector('body')).getPropertyValue('--bg-color');
        console.log(bodyStyle);
        if(bodyStyle === 'rgb(74, 71, 71)'){
            root.style.setProperty('--bg-color', 'white');
            root.style.setProperty('--text-color', 'black');
        }else{
            root.style.setProperty('--bg-color', 'rgb(74, 71, 71)');
            root.style.setProperty('--text-color', 'white');
        }
    }
    
    let baseSize = 10;
    document.querySelector('.scale').onclick= function(){
        baseSize+=1;
        let root = document.documentElement;
        root.style.setProperty('--font-size', `${baseSize}px`);

    }
}