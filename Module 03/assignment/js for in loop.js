function printObjectProperties(obj){
    if(Object.keys(obj).length === 0){
        console.log("There is nothing!")
    }else{
    for (let oneofItem in obj){
        console.log(`${oneofItem}======> ${obj[oneofItem]}`)
    }
    }
}




printObjectProperties({name:'mehedi',ssc:'2016',hsc:'2018',isStudent:true});