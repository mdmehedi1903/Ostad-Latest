db.ostad.aggregate([
     {
         $lookup: {
             from: "employees",
             localField: "emplyId",
             foreignField: "_id",
             as: "result"
         }
     }
])
