const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const JWT = require("jsonwebtoken");

// REGISTER 
router.post("/register", async (req, res) => {
    try{
        const users = await User.find({$or: [{email: req.body.email}, {username: req.body.username}]})
        if (users.length > 0){
            return res.status(500).json("Username or email are already in use please try again with different values");
        }else{
            const newUser = new User({
                username: req.body.username,
                email: req.body.email,
                password: CryptoJs.AES.encrypt(req.body.password, process.env.ENCRYPTION_SECRET_KEY).toString()
            });
            const user = await newUser.save();
            return res.status(201).json(user);
        }
    }catch(err){
        return res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.find({email: req.body.email, username: req.body.username});
        if(!user){
            return res.status(404).json("User not found");
        }else{
            const bytes = CryptoJs.AES.decrypt(user[0].password, process.env.ENCRYPTION_SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJs.enc.Utf8);
            console.log(originalPassword);
            if(originalPassword != req.body.password){
                return res.status(401).json("Try again");
            }else{
                // successful login 
                // creating a login token 
                const jwtToken = JWT.sign({
                    _id: user[0]._id,
                    email: user[0].email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                });
                return res.status(200).json({jwtToken});
            }
        }
    }catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
});

module.exports = router;