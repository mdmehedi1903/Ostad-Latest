db.employees.aggregate([
{
    $match: {
      $or:[
        {salary: {$gt:40000}},
        {name: "Ayesha Siddiqui"}
      ]
    }
}

])



db.employees.find(
    {
        $and: [
           { name: "Ayesha Siddiqui"},
           {salary: 70000}
        ]
    }
)


db.employees.find(
    {
        $or: [
           { name: "Ayesha Siddiqui"},
           {salary: 70000}
        ]
    }
)