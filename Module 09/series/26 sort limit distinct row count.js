use("CraftShop")


db.employees.distinct('name')

// db.employees.find().sort({_id: 1}).limit(2)

// db.employees.find().count('total')

// db.employees.find().sort(
//     {salary:+1}  //+1 acending order
// )