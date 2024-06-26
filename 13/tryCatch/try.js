
let user = {
    userName:'Tom',
    // userAge:22
}
try{
    // let tryName = 'Hello try';
    if(!user.userAge){
        throw new SyntaxError('No information about age');
    }
    // alert(tryName);
}
catch(error){
    // console.log(error);
    console.log(error.message);
    // console.log(error.name);
    // console.log(error.stack);
}
finally{
    console.log('Finaly block work');
}