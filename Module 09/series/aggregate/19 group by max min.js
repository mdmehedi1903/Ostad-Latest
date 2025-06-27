db.employees.aggregate([
//    {$group: {_id: "$designation", total:{$max: '$salary'}}}
    {$group: {_id: "$designation", total:{$min: '$salary'}}}
])
