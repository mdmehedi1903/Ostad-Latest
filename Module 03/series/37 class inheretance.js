class myClass {
    age = 40;
    name = "Emam Mehedi";
    myAdd(a,b){
        let result = a+b
        console.log(result)
    }
}

class myId extends myClass {
    age = 555;
}

obj1 = new myClass();
console.log(obj1.age)

obj1 = new myId();
console.log(obj1.age)