// combine array or array concatination
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = [...arr1, ...arr2]
console.log(combined)
console.log(" ")
console.log(" ")

// pass arguments 
function mySum(a,b,c){
    return a+b+c;
}
let myNumbers = [1,2,3]
console.log(mySum(...myNumbers))

console.log(" ")
console.log(" ")


// array copy and modify
let mainArray = [1,2,3,4,5,6]

let copiedArray = [...mainArray];
copiedArray.push(44)

console.log("Original Array: "+mainArray)
console.log("Copied & Modified Array: "+copiedArray)


// object concat or combine 
console.log(" ")
console.log(" ")

// array copy and modify & merge
let myObject = {a:1,b:2}
let myObject1 = {b:3,d:4}

let newObject = {...myObject, ...myObject1};
let copiedNewobject = {...newObject}
copiedNewobject.f = 5;

console.log(newObject)
console.log(copiedNewobject)


console.log(" ")
console.log(" ")


// array additional 
let array4 = [1,2,3,4,5,5];
let newArray = [5, ...array4, 1,2,3,4]
console.log(newArray)



console.log(" ")
console.log(" ")


// javascript reduice
function myReduce(...myItems){
    return myItems.reduce((acc,curr)=>acc+curr, 0);
}
console.log(myReduce(1,2,3,4,5))


//javascript map loop


function myNewFun(manOne, ...manNames){
    let toUpper = manNames.map(con=>con.toUpperCase());
    let makeString = toUpper.join(', ')

    return `Hello, ${manOne}: ${makeString}`
    // return toUpper.join(' ')

}

console.log(myNewFun("Peoples Name","Abdullah", "Abu Shadik", "Kaium"))
console.log(myNewFun("Organaization", "Hi"))

