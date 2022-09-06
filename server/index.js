require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employeeRoutes')
const app = express()
//middleware
app.use(express.json())
app.use("/employee",employeeRoutes)

app.get('/',(req,res)=>{
    console.log("hello im 7500")
    res.send("hello this is employee dashboard")
})
mongoose.connect(process.env.MONGO_URI,()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`running on port ${process.env.PORT}`)
    })

})
