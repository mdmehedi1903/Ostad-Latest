//db.employees.aggregate([
//    {$skip: 0},
//    {$limit:2}
//])

db.employees.find().skip(1).limit(4).sort({salary:-1})