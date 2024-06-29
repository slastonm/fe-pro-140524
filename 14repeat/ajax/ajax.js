window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.response);
            let containerEl = document.querySelector('.container');
            xhr.response.forEach(element => {
                let pEl = document.createElement('p');
                pEl.innerHTML = `Uesr Info: ${element.name} phone: ${element.phone}`;
                containerEl.appendChild(pEl);
            });
        }
    }
    xhr.responseType = 'json';
    xhr.send(null);
}