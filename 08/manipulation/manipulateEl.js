window.onload = function(){
    let containerEl = document.querySelector('.container');
    let titleEl = document.createElement('h3');
    titleEl.innerText = 'Hello JS';
    containerEl.appendChild(titleEl);

    let linksData = ['Home', 'About', 'Contacts'];
    let navEl = document.querySelector('nav');
    
    for(let link of linksData){
        let aEl = document.createElement('a');
        // aEl.innerText = link;
        let template =`<strong>icon</strong>`
        aEl.innerHTML=`<span>Visit: ${link} ${template}</span>`;
        aEl.setAttribute('href','#');
        // navEl.appendChild(aEl);
        // navEl.prepend(aEl);
        // containerEl.prepend(aEl);
        // containerEl.appendChild(aEl);
        // containerEl.after(aEl);
        containerEl.before(aEl);

    }
    navEl.remove();
    titleEl.remove();
    let [...linksElements] = document.querySelectorAll('a');
    // linksElements.forEach(item=>{
    //     item.remove();
    // });
    let listEl = document.querySelector('ul');
    listEl.removeChild(listEl.firstElementChild);
    listEl.removeChild(listEl.firstElementChild);
}