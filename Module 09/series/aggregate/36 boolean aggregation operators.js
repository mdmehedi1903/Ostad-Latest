db.employees.aggregate([
    {$match: {}},
   {$addFields: {"NewField": {
             $or: [ //
           {$eq:["$salary", 70000]},
           {$eq:["$city", "India"]}
       ]
   }}}
])




db.employees.aggregate([
    {$match: {}},
   {$addFields: {"NewField": {
             $not: [
           {$eq:["$city", "India"]}
       ]
   }}}
])