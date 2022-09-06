const mongoose = require('mongoose');

const {Schema} = mongoose

const employeeSchema = new Schema({
    Firstname:{
        type:String,
        required:true
    },
    Lastname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Mobile:{
        type:Number,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    ReportingManager:{
        type:String,
        required:true
    },
    Salary:{
        type:Number,
        required:true
    },
    Employeecode:{
        type:Number,
        required:true,
        unique:true
    },
    Location:{
        type:String,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    Country:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true
    },
    DateOfJoining:{
        type:String,
        required:true
    },
    DeletedAt:{
        type:String,
        required:true
    }    
},{
    timestamps:true
})

module.exports = mongoose.model("Employee",employeeSchema)