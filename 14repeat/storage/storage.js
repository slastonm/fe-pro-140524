window.onload = function(){
    document.cookie ="user=Tom; SameSite=None; Secure";
    document.cookie ="admin=Bob; SameSite=None; expires=31 Dec 2024 23:59:59 GMT; Secure";
    document.cookie ="manager=John; SameSite=None; max-age=3600; Secure";
    document.cookie ="user=Tom; SameSite=None;max-age=0; Secure";
    let allCookies = document.cookie;
    console.log(allCookies);

    //Local storage

    // window.localStorage.setItem('userMenuState', 'false');
    // window.localStorage['keyName']='Text value test';
    // window.localStorage.simpleKey ='My simple key';

    // console.log(window.localStorage.getItem('userMenuState'));
    // console.log(window.localStorage['keyName']);
    // console.log(window.localStorage.simpleKey);

    // window.localStorage.userData = {user:'John', age:29};
    // let users = [
    //     {user:'John', age:29},
    //     {user:'John2', age:30},
    //     {user:'John3', age:31}
    // ]
    // window.localStorage.userData = JSON.stringify({user:'John', age:29});
    // window.localStorage.userData = JSON.stringify(users);


    // console.log(window.localStorage.userData);
    if(!false){
        window.localStorage.userData = JSON.stringify([]); 
    }
    console.log(JSON.parse(window.localStorage.userData));

    window.localStorage.removeItem('simpleKey');
    window.localStorage.removeItem('keyName');
    // window.localStorage.clear();

    //Session storage
    window.sessionStorage.setItem('userMenuState', 'false');
    window.sessionStorage['keyName']='Text value test';
    window.sessionStorage.simpleKey ='My simple key';
    console.log('Session storage');
    console.log(window.sessionStorage.getItem('userMenuState'));
    console.log(window.sessionStorage['keyName']);
    console.log(window.sessionStorage.simpleKey);
    window.sessionStorage.clear();
}