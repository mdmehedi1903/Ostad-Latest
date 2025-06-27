//db.employees.find({salary: {$eq: 70000}})
db.employees.aggregate([
{$match: {salary: {$eq: 2000}}}

])