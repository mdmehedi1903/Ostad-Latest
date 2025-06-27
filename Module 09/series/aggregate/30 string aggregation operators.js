db.employees.aggregate([

{$addFields: {"NewField": {$concat:["ABCD"," ","$designation"]}}}

])