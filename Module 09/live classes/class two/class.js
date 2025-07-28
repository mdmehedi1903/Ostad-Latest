use("CraftShop")

//// find by matching
// db.ostad.aggregate([
//     {$match: {
//         // brand: "LogiTech"
//     }},
// ])

//// count
// db.ostad.aggregate([
//     {$count: 'total'}
// ])

// // sorting
// db.ostad.aggregate([
//     {$match: {}},
//     {$sort: {price: -1}},
//     {$limit: 2},
//     {$project: {
//         _id:0,brand:1
//     }}

// ])

// // group
// db.ostad.aggregate([
//   { $match: {} },
//   {
//     $group: {
//       _id: '',              
//       sum: { $sum: "$price" },
//       avg: { $avg: "$price" },
//       max: { $max: "$price" },
//       min: { $min: "$price" }
//     }
//   }
// ])


// lookup
db.employees.aggregate([
{$match:{}},
  {
    $lookup: {
      from: "ostad",
      localField: "_id",
      foreignField: "emplyId",     
      as: "employeeData"
    }
  },
  {$project: {
    'employeeData._id':0
  }}
])
