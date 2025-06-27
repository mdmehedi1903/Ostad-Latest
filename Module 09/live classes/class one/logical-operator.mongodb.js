use('names');

// db.brands.find(
//     {"salary": {"$lte": 5000}}
// )


use('names');

db.brands.find(
    {
        $and: [
            {salary:{$eq:43000}},
            {name: {$eq:"rohim"}}
        ]
    }
)