//db.employees.aggregate([
//    {$project: {_id:0,name:1}}
//])


db.employees.find({},
    {_id:0,name:1}
)