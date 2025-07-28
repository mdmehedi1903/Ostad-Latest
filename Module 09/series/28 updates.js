use("CraftShop")


// db.employees.updateOne(
//     {name: "Ali Khan"},
//     {$set: {name: "Ali Khan Hannan"}}
// )

db.employees.updateMany(
    {},
    {$set: {city: "Bangladesh"}}
)
