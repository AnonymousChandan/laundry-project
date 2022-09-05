const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    productName:String,
    productImage:String,
    productDescription:String,
    washType:{
        type:Array
    }
})
const productModel=mongoose.model("products",productSchema)
module.exports=productModel