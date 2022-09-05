const productModel=require("../models/productModel.js")
const express=require("express")
const router=express.Router()
router.post("/add",(req,res)=>{
    productModel.create({
        productName:req.body.productName,
        productImage:req.body.productImage,
        productDescription:req.body.productDescription,
        washType:req.body.washType
    }).then((data)=>{
        res.status(200).send(data)
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
router.get("/",(req,res)=>{

    productModel.find().then((data)=>{
        // console.log(data)       
            res.status(200).send({data : data})
    }).catch((err)=>{
        res.status(400).send(err)
    })
})
module.exports=router