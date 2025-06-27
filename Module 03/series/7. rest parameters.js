let sum = 0;
function myFun(a,b,...restofAll){

    for(let i of restofAll){
        sum = sum + i;
    }
    return sum+a+b;

}

console.log(myFun(1,2,20,50))