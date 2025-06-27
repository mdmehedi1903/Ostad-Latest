use("CraftShop")


// db.employees.deleteOne({
//     "_id": ObjectId("683b46d2c1e9476db074e748")
// })

db.employees.deleteMany({
    salary: {$in: [72000,78000]}
})
