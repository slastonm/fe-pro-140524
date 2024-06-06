console.log(window);
console.log(document);

window.onload = function(){
    // let idEl = document.getElementById('my');
    // console.log(idEl);
    // let headerEl = document.getElementsByTagName('header');
    // console.log(headerEl);
    // let sectionEl = document.getElementsByTagName('section');
    // console.log(sectionEl);
    // let containerEl = document.getElementsByClassName('container');
    // console.log(containerEl);

    let pEl = document.querySelector('p');
    console.log(pEl);
    let pElements = document.querySelectorAll('p');
    console.log(pElements);


    let pArrays = Array.from(pElements);
    console.log(pArrays);

    let [...mySectionArr] = document.querySelectorAll('section');
    console.log(mySectionArr);
    let [...containersElements] = document.querySelectorAll('.container');
    console.log(containersElements);

    let idEl = document.querySelector('#my');
    console.log(idEl);

    let [...listLinkElements] = document.querySelectorAll('.list li>a');
    console.log(listLinkElements);
    listLinkElements.forEach(item=>{
        console.log(item.innerText);
    })

    // let firstLiEl = document.querySelector('.no-list li:first-child');
    let firstLiEl = document.querySelector('.no-list li:last-child');

    console.log(firstLiEl);

    let spanEl = document.querySelector('span');
    // spanEl.array.forEach(element => {
    //     console.log(element);
    // });
    console.log(spanEl);

}