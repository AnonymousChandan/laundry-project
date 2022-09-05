const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
        
    },
    password:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
        
    },
    district:{
        type:String,
        required:true,
        
    },
    address:{
        type:String,
        required:true,
        
    },
    pincode:{
        type:String,
        required:true,
        
    },
})
const userModel=mongoose.model("users",userSchema)
module.exports=userModel