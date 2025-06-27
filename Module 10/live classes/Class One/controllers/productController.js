const mongoose = require('mongoose');
const ProductsModel = require('../models/products');

exports.CreateProduct = async (req,res)=> {
    try{
        let reqBody = req.body;
        let result = await ProductsModel.create(reqBody)
        res.status(201).json({status:"Success!", data: result})
    }catch(e){
        res.status(500).json({ status: "Failed!", error: e.toString() });
    }

}

exports.ReadProduct = async(req,res)=> {
    try{
        let id = req.params.id;
        let result = await ProductsModel.find({_id:id})
        res.status(201).json({status:"Success!", data: result})
    }catch(e){
        res.status(500).json({ status: "Failed!", error: e.toString() });
    }
}


exports.DeleteProduct = async(req,res)=> {
   try{
    let id = req.params.id;
    let result = await ProductsModel.deleteOne({_id:id});
    res.status(201).json({status:"Success!", data: result})
   }catch(e){
    res.status(500).json({ status: "Failed!", error: e.toString() });
   }
}



exports.UpdateProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let reqBody = req.body;

    let result = await ProductsModel.updateOne({ _id: id }, reqBody);

    res.status(200).json({ status: "Success!", data: result });
  } catch (e) {
    res.status(500).json({ status: "Failed!", error: e.toString() });
  }
};
