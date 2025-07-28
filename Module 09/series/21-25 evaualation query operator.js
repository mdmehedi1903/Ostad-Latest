// introduction

use("CraftShop")

////Expression by lt gt
// db.monthlyBudget.find(
//     {
//         $expr: 
//             {
//                 // $lt: ["$budget", "$spent"]
//                 // $gt: ["$budget", "$spent"]
//             }
//     }
// )

// //Mod
// db.monthlyBudget.find({
//        budget: {$mod: [3,0]}
// })

// // //Regular Expression
// db.employees.find({
//        name: {$regex: "Ra"}
// })



// //Where
db.monthlyBudget.find({
    //    $where : "this.spent>this.budget"
       $where : "this.spent==this.budget"
})
