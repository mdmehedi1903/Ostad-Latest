class myClass {
    age = 40;
    name = "Emam Mehedi";
    myAdd(){
        let result = this.name;
        console.log(result)
    }
    myAge(){
        let result = this.age;
        console.log(result)
    }
}

class myId extends myClass {
    demo(){
        super.myAdd()
        super.myAge()
    }
}

obj1 = new myId();
obj1.demo()