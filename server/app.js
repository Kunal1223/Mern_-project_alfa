const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require("express");
const app = express();

dotenv.config({path:"./config.env"});
require('./db/conn');

const PORT = process.env.PORT;

const middlware = (req , res , next) =>{
     console.log("middlware is working here...");
     next();
}

app.get("/",  (req , res)=>{
    res.send("This is a home page for you kunal kishor1.");
})

app.get("/about" , middlware , (req , res)=>{
    res.send("This is about page for you");
})

app.get("/Signin" , (req , res)=>{
    res.send("This is Signin page for you");
})

app.get("/Signup" , (req , res)=>{
    res.send("This is Signup page for you");
})

// console.log("checking its working or not and i am kunal kishor");

app.listen(PORT , ()=>{
    console.log("server is working....");
})