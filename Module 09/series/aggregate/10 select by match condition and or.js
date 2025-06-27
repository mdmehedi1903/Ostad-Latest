db.employees.aggregate([
{$match: {salary: {$lt: 200000}, name: "Ayesha Siddiqui"}},
//{$match: {name: "Ayesha Siddiqui"}}

])




db.employees.aggregate([
{$match: {$or:[
        {salary: {$gt:40000}},
        {name: "Ayesha Siddiqui"}
    ]}}

])