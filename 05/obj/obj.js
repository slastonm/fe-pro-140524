// let userInfo = [
//     'Name',
//     ['html', 'css', 'js'],
//     'user@gmail.com',
//     'Not tel'
// ]

// console.log(`User name:${userInfo[0]}, skills:${userInfo[1]}`);

let userObj = {};
let userObjConst = new Object();

console.log(userObj);
console.log(userObjConst);

let userInfo = {
    userName:'UseNeamchenko',
    skills:[
        'html','C','Java'
    ],
    email:'uesr@gmail.com',
    study:true,
    info:function(){
        // console.log('Info about user');
        console.log(this.email);
    },
    secondInfo:()=>{
        console.log('Second info');
        // console.log(this.email); не працює


    }
};

console.log(userInfo.userName);
console.log(userInfo.email);
console.log(userInfo.study);
userInfo.info();
userInfo.secondInfo();

userInfo.newValue = 'test new key';
console.log(userInfo);

console.log(userInfo['email']);
console.log(userInfo['info']);

delete userInfo.email;
delete userInfo.skills;

console.log(userInfo);

let users = [
    {
        user:'User 1',
        age:35
    },
    {
        user:'User 2',
        age:24
    },
    {
        user:'User 3',
        age:34
    }
]

users.forEach(item=>{
    document.write(`<h3>${item.user}</h3><p>${item.age}</p>`);
})

users.sort((a,b)=>a.age-b.age);
console.log(users);