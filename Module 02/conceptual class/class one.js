// Operator = : assignment: =, loose equality ==; strict equality ===


// loose equality ==;
console.log(5 == 5);
console.log('5' == 5);
console.log(5 == 6);

console.log(' ||');
console.log(' ||');
console.log(' ||');
console.log(' ||');

// strict equality ===;
console.log(5 === 5);
console.log('5' === 5);
console.log(5 === 6);

// + - * /  operator
console.log(5+5);
console.log("5"+5);
console.log("10"-5);
console.log("10"*5);
console.log("10"/5);

let x = 0;
x++;
x += 3;
console.log(x)



// ? ternary operator
let age = 9;
let message = `I'm ${age>=18?"eligible for vote":"not eligible for vote"}`;
console.log(message)

let marks = 66;
let answerPaw = marks >- 0 ? marks >= 10? marks >=100?"Greater than 100":"greater than ten but less than 100":"greater than zero but less than ten":"negative number";
console.log(answerPaw)
console.log("   ")
console.log("   ")



    console.log(
        marks >= 0 && marks < 33 ? "F Grade" :
        marks >= 33 && marks < 40 ? "D Grade" :
        marks >= 40 && marks < 50 ? "C Grade" :
        marks >= 50 && marks < 60 ? "B Grade" :
        marks >= 60 && marks < 70 ? "A- Grade" :
        marks >= 70 && marks < 80 ? "A Grade" :
        marks >= 80 && marks <= 100 ? "A+ Grade" :
        
        "You put invalid number!"
      );
      



let bangla = 80;
let english = 80;
let math = 80;

let condition1 = bangla>32 && english > 32 && math > 32;
let condition2 = bangla > 70 && english > 70 && math > 70;
console.log("   ")
console.log("   ")
let myResult = condition1?condition2?"A+":"B Grade":"Passed!"
console.log(myResult)











   