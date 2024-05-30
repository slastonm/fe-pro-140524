function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.allInfo = function(){
        return `Book info: ${this.title} write by ${this.author} in ${this.year}`
    }
}

Book.prototype.getAllInfo = function(){
    return `Book info: ${this.title} write by ${this.author} in ${this.year}`
}
let myFirstBook = new Book('Harry Potter', 'Rowling J.', 1997);
let mySecondBook = new Book('Harry Potter 2', 'Rowling J.', 2000);
console.log(myFirstBook);
console.log(mySecondBook);

console.log(myFirstBook.getAllInfo());
console.log(mySecondBook.getAllInfo());


class BookConstructor{
    constructor (title, author, year){
        this._title = title;
        this._author = author;
        this._year = year;        
    }
    allInfo = function(){
        return `Book info: ${this._title} write by ${this._author} in ${this._year}`
    }
    get titleInfo(){
        return `Title info ${this._title}`;
    }
    set title(newTitle){
        this._title = newTitle;
    }
    // this.allInfo = function(){
    //     return `Book info: ${this.title} write by ${this.author} in ${this.year}`
    // }
    static createBookFromCSV(value){
        const [title, author, year] = value.split(',');
        return new BookConstructor(title, author, parseInt(year));
    }
}

let harryBook = new BookConstructor('Harry Potter 3', 'Rowling J.', 2002);


console.log(harryBook.titleInfo);
harryBook.title = 'New Harry Potter story';

console.log(harryBook);


let bookFromFile = 'Harry Potter 4, Rowling J., 2004';

let newBookPart = BookConstructor.createBookFromCSV(bookFromFile);
console.log(newBookPart);

// console.log(newBookPart.createBookFromCSV(bookFromFile));
// Інкапсуляція
class Product{
    constructor(productName, price){
        this._productName = productName;
        this._price = price;
    }
    getAllInfo(){
        return `Product: ${this._productName} price ${this._price} $`;
    }
}
// Наслідування
class Electronics extends Product{
    constructor(productName, price, type){
        super(productName, price);
        this._type = type;
    }
    getElectronicInfo(){
        return `Product: ${this._productName} price ${this._price} $ Type ${this._type}`;
    }
}

let laptop = new Electronics('HP', 900, 'laptop');
console.log(laptop.getElectronicInfo());
console.log(laptop);


// Поліморфізм

class Basket{
    constructor(){
        this._products = [];
    }
    addProduct(product){
        this._products.push(product);
    }
    get totalPrice(){
        let price = 0;
        this._products.forEach(item=>price+=item._price);
        return price;
    }
}

let book = new Product('Simple book name', 10);
let phone = new Electronics('Mobile phone', 250, 'mobile');

let basket = new Basket();

basket.addProduct(laptop);
basket.addProduct(book);
basket.addProduct(phone);

console.log(basket);
console.log(`Shoping price ${basket.totalPrice}`);
