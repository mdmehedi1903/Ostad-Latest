db.employees.aggregate([
    
    {
        $match: {name: /ad/}
    }
    
    

])