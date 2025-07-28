use("CraftShop")


db.employees.find(
    {   
        salary: {$type: 2}
    }

)
