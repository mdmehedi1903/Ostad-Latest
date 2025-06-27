db.employees.aggregate([

//{$addFields: {"NewField": {$split:["$designation", " "]}}},
{$addFields: {"NewField": {$toUpper:["$designation"]}}}

])