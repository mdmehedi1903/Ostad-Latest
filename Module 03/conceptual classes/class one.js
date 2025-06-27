let strings = "3.13"
let number = "3.13"


let toNumber = Number(strings); 
let toString = number.toString(); 

console.log(toNumber)
console.log(toString)   


console.log(new Date().toLocaleDateString())
console.log(new Date().toLocaleTimeString())

function greet(){
    let i = "hello word"
    console.log(i)
}

setTimeout(greet, 4000);
setInterval(greet, 1000);

console.log(Math.ceil(2.1))
console.log(Math.floor(2.9))














// // practice/
// // number & string
// let number = 33434;
// console.log("To number: ===> ")
// console.log(Number("234"))
// console.log("To string: ===> ")
// console.log(number.toString())


// // ceil floor & set timeout set interval
// function myFun(){
// console.log(Math.ceil("3.1"))
// console.log(Math.floor("3.5"))
// console.log(Math.round("3.2"))
// }

// setTimeout(myFun, 5000)
// setInterval(myFun, 1500)


// // date & time
// let date =  new Date().toLocaleDateString();
// let time =  new Date().toLocaleTimeString();
// console.log(`current date: ${date}, current time: ${time}`)