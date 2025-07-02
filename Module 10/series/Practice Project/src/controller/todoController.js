const TodoModel = require("../models/todoModel");

exports.CreateTodo = async (req,res)=> {
    try{
        let {UserName} = req.headers['TokenData']
        let reqBody = req.body;
        reqBody['UserName'] = UserName;
        reqBody['TodoUpdateDate'] = Date.now();
        reqBody['TodoCreateDate'] = Date.now();
        reqBody.TodoStatus = "New";

        let ToDo = await TodoModel.create(reqBody);
        res.status(201).json({status: "Todo cessfully Created!", ToDo})
    }catch(err){
        res.status(401).json({status: "Failed!", data: err})
    }
}




exports.ReadTodo = async (req,res)=> {
    try{
        let {UserName} = req.headers['TokenData']
        let Projection = "TodoSubject TodoDescription TodoStatus UserName";
        let ToDo = await TodoModel.find({UserName: UserName}, Projection)
            if(ToDo.length==0){
                res.status(401).json({status: "No ToDo Found!"}) 
            }else{
                
                res.status(201).json({status: "Success to Read Todo!", ToDo})
            }
    }catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}



exports.UpdateTodo = async (req,res)=> {
    try{

        let {UserName} = req.headers['TokenData']
        let reqBody = req.body;
        let {_id} = reqBody;
        reqBody['TodoUpdateDate'] = Date.now();
        reqBody['TodoStatus'] = "New";

        let UpdatedToDo = await TodoModel.updateOne({_id, UserName}, {$set: reqBody});
            res.status(201).json({status: "Success to Update Todo!", UpdatedToDo})
    }
    catch(err){
       res.status(401).json({status: "Failed!", data: err}) 
    }
}



exports.UpdateTodoStatus = async (req,res)=> {
    try{
        let {UserName} = req.headers['TokenData']
        let TodoStatus = req.body['TodoStatus'];
        let _id = req.body['_id'];
        let TodoUpdateDate = Date.now();

        let reqBody = {
            TodoStatus,
            TodoUpdateDate
        }
        
        let UpdatedToDo = await TodoModel.updateOne({_id, UserName}, {$set: reqBody});
        res.status(201).json({status: "Success to Update Todo Status!", UpdatedToDo})

    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }

}


exports.RemoveTodo = async (req,res)=> {
    try{
        let _id = req.body['_id'];
        let {UserName} = req.headers['TokenData']
        let Removed = await TodoModel.deleteOne({_id, UserName});
        res.status(201).json({status: "Success to Remvoed!", Removed})
    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}


exports.SelectTodoStatus = async (req,res)=> {
    try{
        let {UserName} = req.headers['TokenData']
        let TodoStatus = req.body['TodoStatus']
        let StatusResult = await TodoModel.find({UserName, TodoStatus})
        res.status(201).json({status: "Success to Change Status!", StatusResult})
    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}


exports.SelectTodoByDate = async (req,res)=> {
    let {ToDate, FromDate} = req.body;
    try{
        let {UserName} = req.headers['TokenData']
        let DateResult = await TodoModel.find({UserName, TodoCreateDate:{$gte: new Date(FromDate), $lte: new Date(ToDate)}})
        res.status(201).json({status: "Success to Sort Date wise!", DateResult, ToDate, FromDate})
    }catch(err){
        res.status(401).json({status: "Failed!", data: err}) 
    }
}