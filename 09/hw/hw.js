window.onload = function(){
    const booksArray = [
        {
            title: 'Пригоди Аліси в Країні Див',
            year: 1865,
            rating: 4.5
        },
        {
            title: '1984',
            year: 1949,
            rating: 4.8
        },
        {
            title: 'Гаррі Поттер і філософський камінь',
            year: 1997,
            rating: 4.7
        }
    ];

    let table = document.querySelector('table');
    let tbodyEl = document.createElement('tbody');
    table.appendChild(tbodyEl);
    booksArray.forEach(book=>{
        let row = document.createElement('tr');
        let titleTd = document.createElement('td');
        titleTd.textContent = book.title;
        row.appendChild(titleTd);

        let yearTd = document.createElement('td');
        yearTd.textContent = book.year;
        row.appendChild(yearTd);

        let raitingTd = document.createElement('td');
        raitingTd.textContent = book.rating;
        row.appendChild(raitingTd);

        tbodyEl.appendChild(row);

    });

    const elementsArray = [
        { tag: 'p', text: 'Елемент 1' },
        { tag: 'div', text: 'Елемент 2' },
        { tag: 'span', text: 'Елемент 3' }
    ];
    let containerEl = document.querySelector('.container');

    function createMyElement(elementData){
        let element = document.createElement(elementData.tag);
        element.textContent = elementData.text;
        return element;
    }

    elementsArray.forEach(element =>{
        let newElement = createMyElement(element);
        containerEl.appendChild(newElement);
    })
}