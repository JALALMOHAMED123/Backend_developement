// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// console.log(array.map(arr=> (arr==' ')?'empty string':arr));

// const [...ags]=array;
// console.log(ags);

function fun1(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve(a),b)
    });
}
async function fun(){
        console.log('a');

        console.log('b');

        const result=await fun1('c',3000);
        console.log(result);

        const result1=await fun1('d',0);
        console.log(result1);
        
        console.log('e')
}
fun();
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1

// console.log(val1)

// console.log(val2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }



// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)