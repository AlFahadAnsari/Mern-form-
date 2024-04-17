let express = require('express')
let mongoose =require('mongoose')


let EmployedData = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

let worker =mongoose.model('Worker',EmployedData)

module.exports=worker