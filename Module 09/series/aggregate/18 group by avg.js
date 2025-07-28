db.employees.aggregate([
    {$group: {_id: "$designation", total:{$avg: '$salary'}}}
])
