let myMap = new Map();

myMap.set("name", "Mehedi");
myMap.set("age", "30");
myMap.set("district", "dhaka");

for(let myOneitem of myMap.keys() ){
    console.log(myOneitem)
}
console.log(' ')
console.log(' ')
for(let myOneitem of myMap.values() ){
    console.log(myOneitem)
}