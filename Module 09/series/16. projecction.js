use("CraftShop")


// db.employees.find()
db.employees.find(
    {},

    {_id:1, city:0, designation:0, salary:0}

)