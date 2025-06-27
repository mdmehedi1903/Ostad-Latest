let myName = "Emam Mehedi" //GLobal variable

function myFun(){
    let yourName = "Lamia"; // Local Variable
    console.log(yourName +" + "+myName)
}


console.log(myName);
myFun()
// console.log(yourName) // it will make error cause  it's local variable only work within function where declared