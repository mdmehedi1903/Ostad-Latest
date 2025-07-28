// simple functions

function myName(msg){
    console.log(msg)
}
myName("hello simple function")



//dynamic function
let myFun = function(holdPara){
    return holdPara;
}
console.log(myFun("dynamic function"))



// arrow function
let myArrow = (x, ...y)=> {
    return x+y;
}
console.log(myArrow("How are you? ", 1,2,3,4))

// arrow function 2
const calculateSquare = a=>a*a;
console.log(calculateSquare(5))



// IIF

// (() => {
//     console.log("I am IIFE function");
// })();

// // IIF Function signature

// (function() {
//     console.log("I am IIFE function");
// })();














// regular 
console.log("")

function regularFun () {
    console.log("Regular function!");
    console.log("")
}

// arrow function 

arrowFun = () => {
    console.log("Arrow function!");
    console.log("")
}

regularFun();
arrowFun();

// async await
asyncAwait1 = async () => {
    await ('https://jsonplaceholder.typicode.com/posts');
}

asyncAwait2 = async () => {
    await fetch('https://dummyjson.com/products/1');
}

asyncAwait1();
asyncAwait2();

// rest parameter

function restPara(...abc) {
    console.log("");
    console.log(abc);
}

restPara(1, 2, 3, 4, 5);

// extra parameter

function extraPara() {
    let abc = [1, 2, 4, 5, 46, 7, 8, 67, 8];
    console.log("");
    console.log(abc);
    console.log("");
    console.log(...abc);
}

extraPara();

// dynamic function
let myDynamic = function(holdPara) {
    return holdPara;
}

console.log(myDynamic("Emam Mehedi"));

