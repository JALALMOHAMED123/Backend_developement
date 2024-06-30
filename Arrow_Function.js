const mul=(a,b)=> a*b;

console.log(mul(1,2));

const Student={
    name: 'hari',
    age: 25,
    fun: function(){
        console.log("Hi, My name is "+this.name);
    }
}
Student.fun();
function call(...args){
    console.log(args);
}
call(1,2,true,'string');

