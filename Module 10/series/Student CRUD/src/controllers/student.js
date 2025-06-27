const StudentModel = require("../models/studentModel")


// exports.create = async (req,res)=> {
//     let reqBody = req.body;
//     let result = await StudentModel.create(reqBody)
//     console.log(reqBody)

//     res.status(200).json({status:"Sucess", data: result})

// }




exports.create = async (req, res) => {
  const reqBody = req.body;

  try {
    const data = await StudentModel.create(reqBody);
    res.status(201).json({ status: "Success", data });
  } catch (err) {
    res.status(400).json({ status: "Failed", data: err });
  }
};

exports.read = async (req, res) => {
  let query = {}
  const projection = "Name Roll"


  try {
    const data = await StudentModel.find(query, projection);
    res.status(201).json({ status: "Success", data });
  } catch (err) {
    res.status(400).json({ status: "Failed", data: err });
  }
};

exports.update = async (req, res) => {
  let id = req.params.id;
  let query = {_id:id}
  let reqBody = req.body;

  try {
    const data = await StudentModel.updateOne(query, reqBody);
    res.status(201).json({ status: "Success", data });
  } catch (err) {
    res.status(400).json({ status: "Failed", data: err });
  }
};


exports.remove = async (req, res) => {
  let id = req.params.id;
  let query = {_id:id}

  try {
    const data = await StudentModel.deleteOne(query);
    res.status(201).json({ status: "Success", data });
  } catch (err) {
    res.status(400).json({ status: "Failed", data: err });
  }
};

