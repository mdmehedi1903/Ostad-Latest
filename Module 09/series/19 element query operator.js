use("CraftShop")


db.employees.find(
{   
    // role: {$exists: true},
    role: {$exists: false}
}

)
