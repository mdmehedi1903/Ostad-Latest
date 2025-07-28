use("CraftShop")


db.employees.find(
 {   
    // $and: [
    //     {salary: {$eq:2000}},
    //     {name: {$eq:"Mehedi Aza"}}
    // ]
    $or: [
        {salary: {$eq:2000}},
        {name: {$eq:"Mehedi Aza"}}
    ]
}
)