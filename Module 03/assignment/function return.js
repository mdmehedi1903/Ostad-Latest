function printResult(recievedArray){
    if(recievedArray.length===0){
        return null;
    }else{
        let result = Math.max(...recievedArray);
        return result;
    }
}


let numbers = [1,2,3,4,4,33,3,3,2]

console.log(printResult(numbers))