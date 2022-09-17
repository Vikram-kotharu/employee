
const { Router, response } = require('express');
const express = require('express');
const { findOneAndUpdate, findByIdAndUpdate } = require('../schema/employeeModel');
const Employee = require('../schema/employeeModel');
const router = express.Router()

router.post("/create",async(req,res)=>{
    const {Firstname,Lastname,Email,Mobile,Gender,Designation,ReportingManager,Salary,Employeecode,Location,State,Country,Department,DateOfJoining,DeletedAt} = req.body
    try{
        const employee = await Employee.create({
            Firstname,Lastname,Email,Mobile,Gender,Designation,ReportingManager,Salary,Employeecode,Location,State,Country,Department,DateOfJoining,DeletedAt
        })
        res.json(employee)
        
        console.log(employee)

    }catch(err){
        res.send(err)
    }    
})
router.get("/",async(req,res)=>{
    
    
    try{
        const all = await Employee.find();
        res.json(all)

    }catch(err){
        res.send(err)
    }
})

router.get("/count",async(req,res)=>{
    try{
        const count12 = await Employee.count();
        res.json("Total employee present in the company: "+ count12)
        
    }catch(err){
        res.send(err)
    }
})

router.patch("/update/:id",async(req,res)=>{
    const {id} = req.params
    try{
        const ups = await Employee.findByIdAndUpdate(id,{
            ...req.body
        })
        res.json({msg:"user updated"})

    }catch(err){
        console.log(err)
    }

})

router.patch("/:action/:id",async(req,res)=>{
    const {action,id} = req.params
    try{

        const downs = await Employee.findByIdAndUpdate(id,{
            DeletedAt:action
           //if:action === "activate",then:{DeletedAt:"null"},else:{DeletedAt:"new Date()"}
       })
       
        res.json({msg:"successfully changed"})

    }catch(err){
        console.log(err)
    }
})


module.exports = router
