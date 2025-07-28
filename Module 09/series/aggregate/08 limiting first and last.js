db.employees.aggregate([
{$match: {}},
{$sort: {salary:-1}},
{$limit:3}
])



db.employees.find().sort({salary:-1}).limit(1)