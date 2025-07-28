const fs = require('fs');
let fName = "concept.txt"
fs.watch(fName, ()=>console.log("Change Done!"))    

// Async First Version 
// fs.readFile(fName, (err, data)=> {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// });


// Async Second Version 
const errHandaler=err=>console.log(err)
const dataHandaler=data=>console.log(data)
fs.readFile(fName,(err,data)=>{
    if(err)errHandaler()
        dataHandaler(data.toString())
})


// // Sync Version
// const data = fs.readFileSync(fName);
// console.log(data.toString())




console.log("This is Node Program")