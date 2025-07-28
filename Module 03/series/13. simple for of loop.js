let myArray = [1,2,3,4,5,6,6];
let ourNames = ["Mehedi", "Hasan", "Gazi"];

sum = 0;
for(let item of myArray){
    sum = sum+item;
}
for(let oneName of ourNames){
    console.log(oneName)
}

console.log(sum)
