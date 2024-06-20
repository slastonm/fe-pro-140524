window.onload = function(){
    let formEl = document.querySelector('form');
    console.log(formEl);
    let [...formElement] = formEl.elements;
    console.log(formElement);
    // formEl.elements[0].value='New input value';
    // formEl.addEventListener('change', function(){
    //     formElement.forEach(element =>{
    //         checkInput(element);
    //     })
    // });

    function checkInput(element){
        console.log(element.value);
        if(element.value.length === 0 && element.tagName !== 'BUTTON'){
            element.style.backgroundColor = 'red';
        }
        // if(element.value.lenght === 0 && element.tagName !== 'BUTTON'){
        //     element.style.backgroundColor = 'red';
        // }
    }

    formEl.addEventListener('submit', function(e){
        if(false){
            alert('Submit');
        }
        else{
            e.preventDefault();
        }
    });

    let inputName = document.querySelector('#nameInput');
    inputName.addEventListener('click', function(){
        console.log(this);
        this.style.backgroundColor = 'green';
    });
    inputName.addEventListener('blur', function(){
        this.style.backgroundColor = 'red';
    });
    inputName.addEventListener('keyup', function(){
        alert('Key up');
    });
    // inputName.onfocus = function(){
    //     this.style.backgroundColor = 'green';
    // }
    // inputName.onblur = function(){
    //     this.style.backgroundColor = 'black';
    // }
    document.querySelector('#checkEl').onclick= function(){
        console.log(this.checked);
    }

    // let [...checkedInputs] = document.querySelectorAll('.options:checked')

    
}