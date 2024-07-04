window.onload = function(){
    // fetch(ulr, {})
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response=>response.json())
    .then(json=>{
        console.log(json);
        let title = document.createElement('h1');
        title.innerHTML = `${json.title}`;
        document.querySelector('body').appendChild(title);
    })



    // respone.text()
    // respone.json()
    // respone.formData()
    // respone.blob()

    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        body:JSON.stringify({
            userId: 1,
            id: 1,
            title: "new",
            body: "architecto"
        }),
        headers:{
            'Content-type':'application/json; charset=UTF-8',
            'my-type':'key'
        }
    }).then(response=>response.json()).then(data=>{
        console.log(data);
    });

    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PUT',
        body:JSON.stringify({
            userId: 1,
            id: 1,
            title: "new Put",
            body: "architecto 2"
        }),
        headers:{
            'Authorization':'Bearer your_token_here',
            'Cookie':'sessionId = your_session_id'
        }
    }).then(response=>response.json()).then(data=>{
        console.log(data);
    }).catch(erro=>{
        console.log(erro);
    });

    let id =1;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method:'DELETE'
    }).then(response=>response.json()).then(data=>{
        console.log(`About delete ${data}`);
    }).catch(erro=>{
        console.log(erro);
    });

}