db.employees.aggregate([
    {$sort: {salary:1}}
])


db.employees.find({}).sort({salary:1})