db.users.aggregate([
    {$match: {}},
   {$addFields: {"Date": {$dayOfYear:"$createdAt"}}},
   {$addFields: {"Date1": {$dayOfMonth:"$createdAt"}}},
   {$addFields: {"Date2": {$dayOfWeek:"$createdAt"}}},
   {$addFields: {"Date3": {$year:"$createdAt"}}},
   {$addFields: {"Date4": {$month:"$createdAt"}}},
   {$addFields: {"Date5": {$hour:"$createdAt"}}},
   {$addFields: {"Date6": {$minute:"$createdAt"}}},
])