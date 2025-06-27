const mongoose=require('mongoose');
const DataSchema=mongoose.Schema(
    {
        ProductName:{type:String, required:true, uniqe:false},
        ProductCode:{type:Number,required:true,unique:true},
        Img:{type:String},
        UnitPrice:{type:Number,default:100},
        Qty:{type:Number,required:true},
        TotalPrice:{type:Number,required:true}
    },
    {versionKey:false,timestamps:true}
)

const  ProductsModel=mongoose.model('product',DataSchema);
module.exports=ProductsModel;