db.employees.aggregate([
    {$match: {}},
   {$addFields: {"Newfield": {$eq:["$salary", 90000]}}},
   {$addFields: {"Newfield2": {$lte:["$salary", 90000]}}}
])