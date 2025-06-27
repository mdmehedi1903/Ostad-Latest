let person = {
    myName: "Bill Gates",
    age: 30,
    smile: true,
    action: (a,b,c)=> {
        return a+b+c;
    }
}



for (let itemKey in person) {
    if (typeof person[itemKey] === 'function') {
        console.log(itemKey + '======> ' + person[itemKey](1,2,3));
    } else {
        console.log(itemKey + '======> ' + person[itemKey]);
    }
}

console.log(person['action'](1,2,3))