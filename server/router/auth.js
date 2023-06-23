const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require('../model/userSchema');


router.get("/", (req, res) => {
    res.send("This is a home page for you kunal kishor1 working on router hello.");
})

//using promises
// router.post('/resister', (req, res) => {

//     const { name, email, phone, password, cpassword } = req.body;

//     if (!name || !email || !phone || !password || !cpassword) {
//         return res.status(422).json({ error: "Please fill all the secton" });
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "You are already resister" });
//             }

//             const user = new User({ name, email, phone, password, cpassword });//we also write this like {name:name} but according to new convention we directly write {name} instant of {name:name}

//             user.save().then(() => {
//                 res.status(201).json({ message: "You are Resister succesfully" });
//             }).catch((err) => res.status(500).json({ error: "Failed to here resister" }));

//         }).catch((error) => { console.log(error) });

//     res.json({ message: req.body });
// })


//by unsing async and await
router.post('/register', async (req, res) => {

    const { name, email, phone, work , password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill all the secton" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "You are already resister" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password are not matching" });
        } else {
            const user = new User({ name, email, phone, work , password, cpassword });//we also write this like {name:name} but according to new convention we directly write {name} instant of {name:name}

            const userResister = await user.save();
            if (userResister) {
                res.status(201).json({ message: "You are Resister succesfully" });
            }
        }

        //upgrade version of above code
        //  await user.save();
        //  res.status(201).json({ message: "You are Resister succesfully" });
    } catch (err) {
        console.log(err)
    }
    res.json({ message: req.body });
})


////for login part
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Enter incorrect email" });
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();//declare a token fun()
            // console.log(token);
            if (!isMatch) {
                res.status(400).json({ error: "authentication errorP" });
            }
            else {
                res.status(200).json({ message: "You are login succesfully" });
            }
        }
        else {
            res.status(400).json({ error: "authentication error1" });
        }

        // if (!userLogin) {
        //     res.status(404).json({ error: "user error" });
        // }
        // else {
        //     res.status(200).json({ error: "user login successfully" });
        // }

    } catch (err) {
        console.log(err)
    }
});

module.exports = router;