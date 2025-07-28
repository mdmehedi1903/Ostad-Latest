use('names');


db.brands.find()
db.brands.find(
    {},
    {
        _id: 0,
        name: 1
    }
)