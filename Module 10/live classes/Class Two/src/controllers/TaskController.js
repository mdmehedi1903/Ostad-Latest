const TaskModel = require("../models/TasksModel");

exports.CreateTask = async (req,res)=> {
    try{
        let {email} = req.headers['TokenData']
        let reqBody = req.body;
        reqBody['email'] = email;
        let result = await TaskModel.create(reqBody);
        res.status(201).json({Status: "Success to Create!", data: result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}


exports.DeleteTask = async(req,res)=> {
    try{
        let id = req.params.id;
        let result = await TaskModel.deleteOne({_id:id})
        res.status(201).json({Status: "Success to Delete!", data: result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}


exports.UpdateTask = async(req,res)=> {
    try{
        let {id, status} = req.body;

        let result = await TaskModel.updateOne({_id:id}, {status})
        res.status(201).json({Status: "Success to Update!", result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}


exports.TaskByStatus = async(req,res)=> {
        try{
        let {email} = req.headers['TokenData']
        let {status} = req.body;

        let result = await TaskModel.find({email, status})
        res.status(201).json({Status: "Success to List by Task Status!", result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}

exports.TaskStatusCount = async(req,res)=> {
    try{
        let {email} = req.headers['TokenData']
        let result = await TaskModel.aggregate([
            {$match: {email}},
            {$group: {_id: '$status', sum: {$count: {}}}}
        ])
        res.status(201).json({Status: "Success to List by Group Count!", result})
    }catch(e){
        res.status(401).json({Status: "Failed", error: e})
    }
}