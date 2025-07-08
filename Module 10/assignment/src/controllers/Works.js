const WorkModel = require("../models/Works");

exports.CreateWork = async(req,res)=> {
    try{
        let reqBody = req.body;
            reqBody.email = req.headers['TokenData']['email']

        let result = await WorkModel.create(reqBody);
        res.status(201).json({status: `Works Created!`, result})
    }catch (e) {
        return res.status(500).json({ status: "Failed", error: e.message });
    }
}


exports.UpdateWork = async(req,res)=> {
    try{
        let id = req.params.id;
        let reqBody = req.body;
        let email = req.headers['TokenData']['email'];

        let result = await WorkModel.updateOne({_id:id, email}, {reqBody})
        res.status(201).json({Status: "Success to Update!", result, id, email})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e.message})
    }
}


exports.SelectTodoByDate = async (req,res)=> {
    try{
        let {ToDate, FromDate} = req.body;
        let email = req.headers['TokenData']['email'];
        let DateResult = await WorkModel.find({email, createdAt:{$gte: new Date(FromDate), $lte: new Date(ToDate)}})
        res.status(201).json({status: "Success to Sort Date wise!", DateResult, ToDate, FromDate})
    }
    catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}


exports.TaskByStatus = async(req,res)=> {
        try{
        let email = req.headers['TokenData']['email']
        let {status} = req.body;

        let result = await WorkModel.find({email, status})
        res.status(201).json({Status: "Success to List by Task Status!", result, email, status})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e.message})
    }
}



exports.DeleteTask = async(req,res)=> {
    try{
        let id = req.params.id;
        let email = req.headers['TokenData']['email']
        let result = await WorkModel.deleteOne({_id:id, email})
        res.status(201).json({Status: "Success to Delete!", data: result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}



exports.TaskStatusCount = async(req,res)=> {
    try{
        let email = req.headers['TokenData']['email']
        let result = await WorkModel.aggregate([
            {$match: {email}},
            {$group: {_id: '$status', sum: {$sum:1}}}
        ])
        res.status(201).json({Status: "Success to List by Group Count!", result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e.message})
    }
}