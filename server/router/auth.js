const express = require("express");
const router = express.Router();

require("../db/conn");
const User = require('../model/userSchema');


router.get("/", (req, res) => {
    res.send("This is a home page for you kunal kishor1 working on router.");
})

router.post('/resister', (req, res) => {

    const { name, email, phone, password, cpassword } = req.body;

    if (!name || !email || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the secton" });
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(401).json({ error: "You are already resister" });
            }

            const user = new User({ name, email, phone, password, cpassword });//we also write this like {name:name} but according to new convention we directly write {name} instant of {name:name}

            user.save().then(() => {
                res.status(201).json({ message: "You are Resister succesfully" });
            }).catch((err) => res.status(500).json({ error: "Failed to resister" }));

        }).catch((error) => { console.log(error) });

    res.json({ message: req.body });
})

module.exports = router;