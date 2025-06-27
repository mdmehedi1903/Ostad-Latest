db.employees.aggregate([
    {$group: {_id: "$salary"}}
])