const orderModel = require('../models/orderModel');
const userModel = require("../models/userModel.js")
const express = require('express')
const router = express.Router() 
const jwt = require('jsonwebtoken')

router.get('/', (req, res) => {

    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    userModel.find({ email : user}).then((data) => {
        if (data.length) {
            orderModel.find({ userEmail : user}).then((data) => {
                res.status(200).send({ orders : data})
            }).catch((err) => {
                 res.status(400).send(err)
            })
        } 
    }).catch((err) => {
        res.status(400).send(err)
    })
    
})


router.post('/add', (req, res) => {
    console.log(req.body)
    var today = new Date()
    var options = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    var option1={
        hour:"numeric",minute:"numeric",hour12: false
    }
    var sDay = today.toLocaleDateString("en-US", options)
    var time = today.toLocaleTimeString("en-US", option1)
    const finalDate = sDay + " " + time

    const user = jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
    userModel.find({ email : user}).then((data) => {
        if (data.length) {
            orderModel.create({
                userEmail : req.body.userEmail,  
                orderId :req.body.orderId, 
                orderTime : finalDate,
                storeLocation : req.body.storeLocation,
                storeAddress : req.body.storeAddress,
                storePhoneNumber :req.body.storePhoneNumber,
                status : req.body.status,
                orderDetails :req.body.orderDetails,
                subTotal : req.body.subTotal,
                pickupCharges :req.body.pickupCharges,
                TotalAmount :req.body.TotalAmount,
                userAddress:req.body.userAddress
            }).then((data) => {
                res.status(200).send("data added succesfully")
            }).catch((err) => {
                res.status(400).send(err)
            })
        }
       
    }).catch((err) => {
        res.status(400).send(err)
    })
    
})

router.delete('/cancel/:id', (req, res) => {

    orderModel.find({ orderId : req.params.id}).then((data) => {
        if (data.length) {
            orderModel.deleteOne({ orderId : req.params.id}).then(() => {
                res.status(200).send("order deleted successfully")
            }).catch((err) => {
                res.status(400).send(err)
            })
        } else {
            res.status(400).send("No orders")
        }
      
    }).catch((err) => {
        res.status(400).send(err)
    })
})

router.get('/view/:id', (req, res) => {
    orderModel.find({ orderId : req.params.id}).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        res.status(400).send(err)
    })
})



module.exports = router

