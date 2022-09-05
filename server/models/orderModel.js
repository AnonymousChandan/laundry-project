const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
   userEmail : {
    type: String,
    required: true
   },
   orderId : {
    type: String,
    required: true
   },
   orderTime : {
    type: String,
    required: true
   },
   storeLocation : {
    type: String,
    required: true
   },
   storeAddress : {
    type: String,
    required: true
   },
   storePhoneNumber : {
    type: Number,
    required: true
   },
   status : {
    type: String,
    required: true
   },
   orderDetails : {
    type: Array,
    required: true
   },
   subTotal : {
    type: Number,
    required: true
   },
   pickupCharges : {
    type: Number,
    required: true
   },
   TotalAmount : {
    type: Number,
    required: true
   },
    userAddress: {
    type: String,
    required: true
   }
})
const orderModel = mongoose.model("orders",orderSchema)
module.exports = orderModel