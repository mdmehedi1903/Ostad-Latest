//db.employees.find({}).limit(2)
db.employees.aggregate([
{$match: {}},
{$limit:3}
])