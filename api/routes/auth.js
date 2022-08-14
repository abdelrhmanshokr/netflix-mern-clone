const router = require("express").Router();
const User = require("../models/User");
const Cryptojs = require("crypto-js");

// REGISTER
router.post("/register", async (req, res) => {
    const hashedPassword = Cryptojs.AES.encrypt(req.body.password, process.env.ENCRYPTION_SECRET_KEY).toString();
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch(error){
        res.status(500).json(error.message);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({email: req.body.email});
        !user && res.status(401).json("Wrong email or password");

        const decPassword = Cryptojs.AES.decrypt(user.password, process.env.ENCRYPTION_SECRET_KEY);
        const originalPasswordText = decPassword.toString(Cryptojs.enc.utf8);

        originalPasswordText === req.body.password && 
        res.status(200).json("User logged in successfully");

        originalPasswordText !== req.body.password && 
        res.status(401).json("Wrong email or password");
    }catch(error){
        res.status(500).json(error.message);
    }
});

module.exports = router;