use("CraftShop")


db.employees.find(
    // {salary: {$eq:75000}} //soman soman hole
    // {salary: {$gt:35000}} // bodo hole
    // {salary: {$gte:35000}} // bodo or soman hole
    // {salary: {$lt:35000}} // bodo or soman hole
    // {salary: {$lte:2000}} // bodo or soman hole
    // {salary: {$ne:2000}} // bodo or soman hole
    // {salary: {$in:[2000,70000]}} // bodo or soman hole
    {salary: {$nin:[2000,70000]}} // bodo or soman hole
)