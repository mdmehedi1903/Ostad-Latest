// rest paramerter 

function something(a,...b){
    b.push(a)
    return b;
}

console.log(something(1,2,3))