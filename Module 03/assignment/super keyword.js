class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Greetings! My name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  class Student extends Person {
    constructor(name, age, major) {
      super(name, age);
      this.major = major;
    }
  
    introduce() {
      console.log(`Hello there! I'm ${this.name}, a ${this.age}-year-old student majoring in ${this.major}.`);
    }
  }
  
  const person1 = new Person("Sumon", 25);
  person1.introduce();
  
  const student1 = new Student("Mehedi", 20, "MERN Programming");
  student1.introduce();
  