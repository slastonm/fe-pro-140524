function getYearOfBirth(age){
    let currentYear = new Date().getFullYear();
    return currentYear-age;
}
console.log(`Year of birth ${getYearOfBirth(30)}`);

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
    sayHello(){
        console.log(`Hello my name is ${this._name}`);
    }
}

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
    study(){
        console.log(`${this._name} study with id ${this._studentId}`);
    }
}

const john = new Person('John', 20);
john.sayHello();

const firstStudent = new Student('Alex', 24, 'id123');
firstStudent.study();

const books = [
    { author: 'J.K. Rowling', title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    { author: 'George R.R. Martin', title: 'A Game of Thrones', year: 1996 },
    { author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring', year: 1954 },
    { author: 'Dan Brown', title: 'The Da Vinci Code', year: 2003 }
];

function filterBooks(booksArr){
    return booksArr.filter(book=>book.year > 1990);
}

console.log(filterBooks(books));

const employees = [
    { name: 'John', age: 28, salary: 3000 },
    { name: 'Jane', age: 32, salary: 4000 },
    { name: 'Peter', age: 24, salary: 2500 },
    { name: 'Mark', age: 30, salary: 3500 }
];

function incresaSalary(arr){
    let newSalaryDate = [];
    for(let emloyee of arr){
        let updateItem ={
            name: emloyee.name,
            age: emloyee.age,
            salary: emloyee.salary *1.1
        }
        newSalaryDate.push(updateItem);
    }
    return newSalaryDate;
}

function sortSalary(arr){
    return arr.sort((a,b)=>{
        return a.salary-b.salary
    })
}

console.log(incresaSalary(employees));
console.log(sortSalary(employees));