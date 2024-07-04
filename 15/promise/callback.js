// function loadData(url, callback) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url, true);
//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             callback(null, xhr.response);
//         } else {
//             callback(new Error(xhr.statusText), null);
//         }
//     };
//     xhr.onerror = function() {
//         callback(new Error("Network error"), null);
//     };
//     xhr.send();
// }

// loadData('https://jsonplaceholder.typicode.com/users', function(error, data) {
//     if (error) {
//         console.error("Failed to load data:", error);
//     } else {
//         console.log("Data loaded successfully:", data);
//     }
// })

function loadData(url) {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();     
        xhr.open("GET", url, true); 
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(xhr.responseText);
            }
            else{
                reject(new Error(xhr.statusText))
            }
        }
        xhr.onerror = function() {
            reject(new Error(xhr.statusText))
        };
        xhr.send();
    })
}

loadData('https://jsonplaceholder.typicode.com/users').then(data=>{
    console.log(`Promise resutl ${data}`);
}).catch(error=>{
    console.log(error);
})