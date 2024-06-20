window.onload = function(){
    let form = document.querySelector('form');
    let todoInput = document.querySelector('#todo');
    let listGroup = document.querySelector('.list-group');

    let items = [];
    function createItem(value){
        let item = document.createElement('li');
        item.classList.add('list-group-item');
        let date = new Date().toDateString();
        item.innerHTML = `${value}: <strong>${date}</strong>`;
        return item
    }
    form.addEventListener('submit', function(e){
        e.preventDefault();
        if(todoInput.value.length === 0){
            console.log(this);
            todoInput.classList.add('bg-danger', 'border-danger');
        }
        else{
            console.log(todoInput);
            listGroup.appendChild(createItem(todoInput.value));
            todoInput.value ='';
            if(todoInput.classList.contains('border-danger')){
                todoInput.classList.remove('bg-danger', 'border-danger');
            }    
        }
    });
    listGroup.addEventListener('click', function(e){
        this.removeChild(e.target);
    });
}