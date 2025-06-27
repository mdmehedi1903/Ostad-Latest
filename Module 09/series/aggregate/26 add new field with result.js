db.employees.aggregate([

{$match: {name: "Mehedi Azad"}},
{$addFields: {"NewField": {$toDouble:["$salary"]}}},
{$addFields: {"NewField2": {$toString:["$salary"]}}}
//{$addFields: {"NewField": "something"}}

])