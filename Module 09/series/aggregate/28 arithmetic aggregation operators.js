db.employees.aggregate([

{$addFields: {"NewField": {$add:[2,3,4,5,6]}}},
{$addFields: {"NewField2": {$divide:[10,2]}}},
{$addFields: {"NewField3": {$pow:[10,2]}}},
{$addFields: {"NewField4": {$mod:[10,2]}}},
{$addFields: {"NewField5": {$multiply:[10,2]}}},

])