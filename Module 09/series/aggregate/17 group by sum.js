db.employees.aggregate([
    {$group: {_id: "$name", total:{$sum: '$salary'}}}
])