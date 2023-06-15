const monogoose = require('mongoose');
const express = require("express");
const app = express();

const DB = 'mongodb+srv://kunalwork56:kunalwork@cluster0.2ck7fqj.mongodb.net/mernstack?retryWrites=true&w=majority';

monogoose.connect(DB).then(()=>{
    console.log("connection successfull with anywhere");
}).catch((err) =>{
    console.log("error occur");
});


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

app.listen(3000 , ()=>{
    console.log("server is working....");
})