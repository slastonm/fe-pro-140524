window.onload = function(){
    let clickBtn = document.querySelector('.clickEl');
    let clickCounter = 0;
    clickBtn.onclick = function(){
        let divEl = document.createElement('div');
        divEl.classList.add('border', 'p-1', 'mb-1');
        divEl.textContent = clickCounter;
        document.body.appendChild(divEl);
        clickCounter++;
    }

    let hoverJs = document.querySelector('.hover-js');
    let advanceButton = document.querySelector('.event-js');

    advanceButton.addEventListener('click', function(){
      this.classList.toggle('btn-lg');  
    });
    advanceButton.addEventListener('mouseover', function(){
        this.classList.replace('btn-warning','btn-success');  
        hoverJs.classList.replace('bg-warning','bg-info'); 
    });
    advanceButton.addEventListener('mouseout', function(){
        this.classList.replace('btn-success','btn-warning');
        hoverJs.classList.replace('bg-info','bg-warning'); 
    });

    let buyCounter = 0;
    let buyInfo = document.querySelector('.buy-info');
    let buyBtn = document.querySelector('.buy');

    buyInfo.innerHTML = `<strong>User buy for ${ buyCounter*100} $</strong>`;
    function buyOperation(){
        buyCounter++;
        buyInfo.innerHTML = `<strong>User buy for ${ buyCounter*100} $</strong>`;        
    }
    buyBtn.addEventListener('click', buyOperation);

    let stopBuying = document.querySelector('.stop-buy');
    stopBuying.addEventListener('click', function(){
        alert('Remove listner');
        buyBtn.removeEventListener('click',buyOperation);
    });

    let titleEl = document.querySelector('h1');

    titleEl.onclick= function(){
        // console.log(this);
        this.style.backgroundColor = 'yellow';
        this.style.fontSize = '50px';
        this.innerHTML = 'Changed text';
    }

    // let [...listItems] = document.querySelectorAll('.list-group-item');
    // listItems.forEach(item=>{
    //     item.onclick = function(){
    //         this.classList.add('bg-info');
    //     }
    // });

    let listParent = document.querySelector('.list-group');
    // e-event
    listParent.onclick = function(e){
        // console.log(e);
        // console.log(e.target);
        // e.target.classList.add('bg-info');
        if(e.target.classList.contains('active')){
            e.target.classList.add('bg-info');
        }
        else{
            e.target.classList.add('bg-success');
        }

    }
    document.querySelector('.prevent').onclick = function(e){
        e.preventDefault();
        alert('Open window');
    }
}