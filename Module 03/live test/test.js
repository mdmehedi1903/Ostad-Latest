function createPerson(name, age, occupation) {
    return { gender:"Purush", name, age, occupation };
  }
  
  let myResult = createPerson("Mehedi", 22, "Developer");
  console.log(myResult);
  








  
  const getEvenNumbers = numbers => numbers.filter(number => number % 2 === 0);

const numbers = [1, 2, 3, 4, 5, 55, 7, 8, 55, 4, 3, 2];
console.log(getEvenNumbers(numbers));










function getFirstAndLast(numbers) {
    const [first, ...rest] = numbers;
    const last = rest[rest.length - 1];
    return { first, last };
  }
  
  const numbers6 = [1, 2, 3, 4, 5];
  const { first, last } = getFirstAndLast(numbers6);
  
  console.log(first); 
  console.log(last); 









  class Rectangle {
    constructor(width, height) {
      // this.width = width;
      // this.height = height;
      console.log(width*height)
    }
  
    // getArea() {
    //   return this.width * this.height;
    // }
  }
  
  const rectangle1 = new Rectangle(5, 8);
  // console.log(rectangle1.getArea()); 
  