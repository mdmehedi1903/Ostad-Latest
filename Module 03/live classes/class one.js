// Object learn before OOP

// let person = { 
//     Name: "Emam Mehedi  =  ",
//     age: 23,
//     action: function(){
//         return `${this.Name + this.age}`;
//     },
//     action1: ()=>{
//         return `${person.Name + person.age}`;
//     }
// }

// console.log(person.action())
// console.log(person.action1())




class father { //class
    constructor(name){ //constructor
        console.log(name)
    }
    
    first_name = "Emam "; 
    last_name = "Mehedi";
    asset = "50 Core BDT";
    static age = 23; //static
    action = ()=> {
        return `${this.first_name + this.last_name}`;
    }
}

class son extends father {
    asset = "30 Core                 BDT"; // overriding  
}

let myObj1 = new father("I'm constructor by father!"); //constructor paramerter and object instance creation
let sonObject = new son("I'm constructor by son!"); //constructor paramerter and object instance creation

console.log(myObj1.action())
console.log(father.age) //static

console.log(sonObject.asset)
console.log(myObj1.asset)