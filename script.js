const arr = [1,5,7,10];
//----------------------------ex1_1---------------------------

const arr1 = ["Emil", "Gayane", "Gor"];
const arr2 = ["Ani", "Armen", "Anna"];
const arr3 = ["Anush", "Sona", "Edgar"];


function concat(...arr){
    let newArr = [];
    arr.forEach((el)=>{
        el.forEach((elem)=>{
            newArr.push(elem);
        })
    })
    return newArr;
}

console.log(concat(arr1, arr2, arr3)); 

//----------------------------ex1_2---------------------------


function fill(value,index, arr){
    let newArr = [];

    for(let i =0;i<arr.length; i++){
        if(i === index){
            arr[i+1] = value;
            newArr.push(arr[i+1]);
        }else if(index === undefined){
            arr[i] = value;
            newArr.push(arr[i]);
        }
        else if(i !== index){
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}


console.log(fill("Ann", 2, arr1));

//----------------------------ex1_3---------------------------

function find(arr, val){
    let i = 0;
   
  while (i < arr.length) {
    if (arr[i] > val) {
      break;
    }
    i += 1;
  }

    return arr[i];
    
}

console.log(find(arr, 5));

//----------------------------ex1_4---------------------------

function findIndex(arr,num){
    for(let i = 0; i<arr.length; i++){
         if(arr[i] === num){
            return i;
         }
    }
}

console.log(findIndex(arr,1));

//----------------------------ex1_5---------------------------

const arr3d = [1,2,[5,7,[10]]]

function flat(arr,num){
    if(num > 0){
       return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val, num - 1) : val), [])
    }else{
       return arr.slice();
    }
}

console.log(flat(arr3d, 1));


//----------------------------ex1_6---------------------------

function map(arr,f){

    let newArr = [];
    
    arr.forEach((el)=>{
        if(el){
            newArr.push(f(el));
        }
    })

    return newArr;  
}

console.log(map(arr, (el)=> el + 1));


//----------------------------ex1_6---------------------------

function reduce(arr,acc){

    arr.forEach((el)=>{
        if(el){
             acc += el;
        }
    })
    return acc;
}

console.log(reduce(arr, 0));


// ------------------------------------------ ex2---------------------------


const array = [1,5,7,10,7,11];

function uniqueItems(arr){
   return arr.every((val,i)=>{
        if( arr.indexOf(val) === i){
            return true;
        }
   })
    
}

console.log(uniqueItems(array))

// ------------------------------------------ ex3---------------------------

function isogram(txt){
   
    return  txt.split("").every((val,i)=>{
       if( txt.indexOf(val) === i){
           return true;
       }
   })
}

console.log(isogram("hello"));


// ------------------------------------------ ex4_1---------------------------

const array1 = [1,7,8];
const array2 = [2,1,7];


function intersection(arr1,arr2){
    const newArr = [];
    for(let i = 0; i<arr1.length;i++){
        for(let ii = 0; ii<arr2.length; ii++){
            if(arr1[i] === arr2[ii]){
                newArr.push(arr1[i])
            }
        }
    }
    return newArr;

}

console.log(intersection(array1,array2));


// ------------------------------------------ ex4_2---------------------------

const letters = ['a','b','h','d', "j",'k']

function pull(arr, ...args){

    let arg = [...args];

  
    for(let ii = 0; ii < arg.length; ii++) {   
        for(let i = 0; i < arr.length; i++){                           
            if (arr[i] === arg[ii]) { 
                arr.splice(i, 1); 
                i--; 
                ii--;
            }
        }
        
    }
    return arr;

}

console.log(pull(letters, 'b','d', 'a'));


// ------------------------------------------ ex4_3---------------------------


function tail(arr){

    return arr.filter((el,i)=> i !== 0)
}

console.log(tail(arr))

// ------------------------------------------ ex4_4---------------------------


function take(arr,num){

    if(num === undefined){
        return arr.slice(0,1);
    }else{
        return arr.slice(0,num);
    }
}

console.log(take(arr,2));

