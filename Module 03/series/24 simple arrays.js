var myArray = ["A", "C", "B", "D"]
var myArray2 = new Array(1,2,3,4,5,6,7,8,8)
var myArray3 = [...myArray2, ...myArray];

for(let item of myArray3){
    console.log(item)
}