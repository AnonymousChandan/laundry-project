const express = require('express')
const mongoose=require("mongoose")
const productController=require("./routes/productRoute")
const orderController = require('./routes/orderRoutes')
const userController=require("./routes/userRoute")
const cors = require('cors');

const app = express()
require('dotenv').config();
app.listen(process.env.PORT, (err) => {
    if (!err) {
        console.log("server is running")
    } else {
        console.log(err)
    }
})


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())


app.use("/product",productController)

app.use('/order', orderController)

app.use("/user",userController)

mongoose.connect(process.env.MONGODB_URL,(err)=>{
    if(!err){
        console.log("Connected to database");
    }else{
        console.log(err);
    }
})