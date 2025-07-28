db.ostad.aggregate([
     {
         $lookup: {
             from: "employees",
             localField: "emplyId",
             foreignField: "_id",
             as: "result"
         }
     },
     
     {
         $project: {
             _id:0,
             ProductName: "$name",
             Price: {$toString: "$price"},
             EmployeeName: {$first: "$result.name"}
         }
     }
])
