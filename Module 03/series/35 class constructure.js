class myClass {
    constructor(a,b){
        this.firstName = a;
        this.lastName = b;
    }

    myAdd(){
        let result = this.firstName + this.lastName;
        console.log(result)
    }
}

let obj = new myClass(102,-2);
obj.myAdd()