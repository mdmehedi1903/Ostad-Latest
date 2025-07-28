db.employees.aggregate([
     {
         $facet: {
             "total": [{$count: 'total'}],
             "salary": [{$match: {salary: {$lt: 60000}}}]
         }
     }
])
