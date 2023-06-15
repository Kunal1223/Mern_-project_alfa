const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("connection successfull with anywhere with env");
}).catch((err) =>{
    console.log("error occur");
});
