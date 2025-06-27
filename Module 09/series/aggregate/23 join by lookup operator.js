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
         $lookup: {
             from: "security",
             localField: "securityId",
             foreignField: "_id",
             as: "result"
         }
     }
])
