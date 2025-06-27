//if else condition with projection
db.employees.aggregate([
    {
        $project: {
            _id:0, 
            salaryMargin:
                {
                    $cond:{if:{$lte:["$salary",30000]}, then:"Low Salry",else:"Standard"}
                }
                ,
            salary:1,
            city:1
        }
    }
])
