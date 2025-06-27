//db.employees.find().count('total')

db.employees.aggregate([
    {$count: 'total'}
])


// discusson about row ount