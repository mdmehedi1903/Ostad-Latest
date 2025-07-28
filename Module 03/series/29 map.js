let myMap = new Map();

myMap.set("name", "Mehedi");
myMap.set("age", "30");
myMap.set("district", "dhaka");

// myMap.delete('name') // just delete
// myMap.clear() // just clear all
// console.log(myMap.get('district')) just get any of items by key

if(myMap.has("named")){
    console.log(true)
}
else{
    console.log(false)

}

for(let myOneitem of myMap.values() ){
    console.log(myOneitem)
}