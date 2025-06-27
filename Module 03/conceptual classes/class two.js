let myArray = ["Mehedi", "Rakib", "Hasan", "Korimi", "Gazi"]
let [arr1, arr2, ...arr3] = myArray;

console.log(arr1, arr2)
console.log(arr3)


// default value

var myNew = [4];
 [first = 1, second = 2] = myNew;
console.log(first)
console.log(second)

 
var char = [a=5, b=3]
console.log(b)

let x = 5;
let y = 10;

[x,y] = [y,x]
console.log('x='+x,'y='+y)

//nested array
let myNest = [1,[2,3],4]
let [firsts, [seconds, thirds], fourths] = myNest;
console.log(firsts)
console.log(seconds)
console.log(thirds)
console.log(fourths)


// array arguments
function myArgu([a,b,c,d=4]){
    return a+b+c+d;
}
let myArgus = [1,2,3,9]
console.log(myArgu(myArgus))


let person = {
    Name : "Mehedi",
    age: 30,
    gender: "male"
}

// object = de-struturing

let {age, gender, Name:pName, school = "66"} = person;

console.log(pName)
console.log(age)
console.log(gender)
console.log(school)


// nested 

const student = {
    sname: "Alice Smith",
    age: 21,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      zipCode: "90001"
    },
    age: 20,
    isEnrolled: true
  };

  const {address: {street,city,zipCode}, sname:student_name, ...rest} = student;

  console.log(student_name)
  console.log(street)
  console.log(city)
  console.log(rest.age)
  console.log(rest.isEnrolled)



  function myStaff({name,position,...rest}){
    console.log(name)
    console.log(rest)
  }

  const staff = {
    name: "Robert Johnson",
    position: "Office Manager",
    department: "Administration",
    isFullTime: true
  };


  staff.country = "USA"
  console.log(staff)

  myStaff(staff)



  
  const staff2 = {
    name: "Robert Johnson",
    position: "Office Manager",
    department: "Administration",
    isFullTime: true
  };

  const propertyName = 'name';
  const {[propertyName]: fName} = staff2;

  console.log(eval('fName'))