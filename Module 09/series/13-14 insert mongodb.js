use("CraftShop")



// db.employees.insertOne(
//     {
//         name: "Mehedi Azad",
//         designation: "Engineer",
//         salary: 2000,
//         city: "Luddakhali"
//     }
// )
db.employees.insertMany(
[
        {
        name: "Mehedi Azad",
        designation: "Engineer",
        salary: 2000,
        city: "Luddakhali"
    }
]
)