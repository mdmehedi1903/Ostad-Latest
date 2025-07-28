
import { divide, multiply, sub, sum } from "./calc.js"
import {Name as test} from "./test/test.js"
import * as calc from "./calc.js"

import whoMehedi from "./whoiam.js"
import {default as whoIsMe} from "./whoiam.js"
import {default as myName} from "./whoiam.js"

import * as combine from "./combine.js"

 console.log(calc.sub(5,6))
 console.log(calc.sum(5,6))
 console.log(calc.multiply(5,2))
 console.log(calc.divide(8,2))

console.log("Hello word!")
console.log(test)
console.log(whoMehedi)
console.log(whoIsMe)
console.log(myName)
console.log(combine.yourAre)


//dynamic import
let mode = true;
if(mode){
    const {myWelcome, Greet} = await import('./greetings.js')
    myWelcome()
    Greet()
}else{
    console.log("No greeting!")
}