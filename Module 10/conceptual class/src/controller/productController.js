const mongoose = require('mongoose');
const ProductModel = require('../models/productModel')


// Create Product
exports.CreateProduct = async(req,res)=> {
    try{
        let reqBody = req.body;
        let data = await ProductModel.create(reqBody)
        res.status(201).json({status:"Success", data})
    }catch(e){
        res.status(201).json({status:"Error", error: e.toString()})
    }
}

exports.ReadProduct = async(req,res)=> {
    try{
        let _id = new mongoose.Types.ObjectId(req.params.id);
        let result = await ProductModel.find({_id})
        res.status(200).json({status:"Success!", result})
    }catch(e){
        res.status(201).json({status:"Error", error: e.toString()})
    }
}



// const mongoose = require('mongoose');
// const productModel = require("../models/productModel");

// // Create Product
// exports.createProduct = async (req, res) => {
//     try {
//         let reqBody = req.body;
//         let data = await productModel.create(reqBody);
//         res.status(200).json({ status: "Success", data: data });
//     } catch (e) {
//         res.status(400).json({ status: "Failed", error: e.toString() });
//     }
// };


// // Single Product
// exports.singleProduct = async (req,res)=>{
//     let id = new mongoose.Types.ObjectId(req.params.id);
//     // let id= req.params.id;
//     try{
//         let data = await productModel.aggregate([
//             {$match: {_id: id}}
//         ])
//         res.status(200).json({ status: "Success", data: data });
//     }catch(e){
//         res.status(400).json({ status: "Failed", error: e.toString() });
//     }
// }


// // All Product
// exports.allProduct = async (req,res)=>{
//     try{
//         let data = await productModel.aggregate([
//             {$project: {
//                 title: 1,
//                 short_des: 1,
//                 price: 1,
//                 discount: 1,
//                 image: 1
//             }}
//         ])
//         res.status(200).json({ status: "Success", data: data });
//     }catch(e){
//         res.status(400).json({ status: "Failed", error: e.toString() });
//     }
// }

// // Delete Product
// exports.deleteProduct = async (req,res)=>{
//     let id = new mongoose.Types.ObjectId(req.params.id);
//     let query = {_id:id};
//     try{
//         let data = await productModel.deleteOne(query)
//         res.status(200).json({ status: "Success", data: data });
//     }catch(e){
//         res.status(400).json({ status: "Failed", error: e.toString() });
//     }
// }


// // Update Product
// exports.updateProduct = async (req, res) => {
//     let id = new mongoose.Types.ObjectId(req.params.id);
//     let reqBody = req.body;
//     let query = {_id:id};
//     try {
//         let data = await productModel.updateOne(query, reqBody);
//         res.status(200).json({ status: "Success", data: data });
//     } catch (e) {
//         res.status(400).json({ status: "Failed", error: e.toString() });
//     }
// };
