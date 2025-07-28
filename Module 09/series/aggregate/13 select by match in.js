db.employees.aggregate([
    
    {
        $match: {
            name: {$in: ["Mehedi Azad", "Ayesha Siddiqui"]}
        }
    }
    
    

])



db.employees.find({
    name: {$in: ["Mehedi Azad", "Ayesha Siddiqui"]}
})