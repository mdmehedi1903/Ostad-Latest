db.employees.aggregate([
        {$group: 
            {_id:
                {designation:"$designation", city:"$city"}, 
                sum:{$sum:'$salary'},
                avg:{$avg:'$salary'},
                max:{$max:'$salary'},
                min:{$min:'$salary'},
            }
       }
])
