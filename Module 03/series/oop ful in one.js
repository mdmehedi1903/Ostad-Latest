class teacher {
    constructor(a,b){
        this.firstDigit = a;
        this.lastDigit = b;
    }
    name= "Mr. John";
    subject= "Mathematics";
    static experience= 10 + " Years"; 
      anotherDigit= 7;
     anotherDigit1= 9;
      calculate= function(anotherThird) {
        console.log(this.firstDigit+this.lastDigit+this.anotherDigit+this.anotherDigit1+anotherThird);
      };
     action(){
        console.log("Teaching")
     };
     action1(){
        console.log("Tution")
     }
    
  };

  class student extends teacher {
    name= "Mr. John Doe";
    teacherAction(){
        super.action()
        super.action1()
    }
  }

let obj = new teacher(5,6);
let obj1 = new student(5,6);
obj.calculate(5)
console.log(teacher.experience)
console.log(obj.name);
console.log(obj1.name);
obj1.teacherAction()
