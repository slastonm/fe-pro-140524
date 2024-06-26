window.onload = function(){
    let form = document.querySelector('form');
    let todoInput = document.querySelector('#todo');
    let listGroup = document.querySelector('.list-group');
    let itemsMod = [
        {
            value:'text',
            date:'25.06.2024',
            isDone:false
        }
    ]
    let items = [
        "Learn JavaScript",
        "Read a book",
        "Go for a walk"];
    function createItem(value){
        let item = document.createElement('li');
        item.classList.add('list-group-item', 'd-flex', 'align-items-center', 'justify-content-between');
        let date = new Date().toDateString();
        item.innerHTML = `<span>${value}:</span> <strong>${date}</strong>`;
        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function(){
            listGroup.removeChild(item);
        });
        item.appendChild(deleteBtn);
        return item
    }
    items.forEach(item=>{
        listGroup.appendChild(createItem(item));
    })
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
    // listGroup.addEventListener('click', function(e){
    //     this.removeChild(e.target);
    // });
}