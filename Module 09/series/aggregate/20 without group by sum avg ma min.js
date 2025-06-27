db.employees.aggregate([
//    {$group: {_id: "", min:{$min: '$salary'}, max:{$max:'$salary'}, avg:{$avg:'$salary'}, min:{$min:'$salary'}}}
        {$group: {_id: "$designation", sum:{$sum: '$salary'}, max:{$max:'$salary'}, avg:{$avg:'$salary'}, min:{$min:'$salary'}}}
])
