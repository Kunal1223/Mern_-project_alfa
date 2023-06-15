const express = require("express");
const app = express();

app.get("/",(req , res)=>{
    res.send("This is a home page for you");
})

app.get("/about" , (req , res)=>{
    res.send("This is about page for you");
})

app.get("/Signin" , (req , res)=>{
    res.send("This is Signin page for you");
})

app.get("/Signup" , (req , res)=>{
    res.send("This is Signup page for you");
})

// console.log("checking its working or not and i am kunal kishor");

app.listen(3000 , ()=>{
    console.log("server is working....");
})