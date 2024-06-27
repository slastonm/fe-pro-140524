window.onload = function(){
    let xhr = new XMLHttpRequest();
    xhr.open('get', 'https://jsonplaceholder.typicode.com/posts');

    xhr.onreadystatechange = function(){
        if(xhr.readyState ==4 && xhr.status == 200){
            //404 
            console.log(xhr.response);
        }
    }
    xhr.responseType ='json';
    xhr.send(null);
}