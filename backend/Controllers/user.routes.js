const express = require ("express");
let jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const UserModel = require("../models/user.model");
const userController = express.Router();

userController.post("/signup",(req,res)=>{
    const {email,password}=req.body;
    bcrypt.genSalt(8, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            // Store hash in your password DB.
            if(err){
                res.status(400).send("Try again");
            }
            const user = new UserModel({
                email,
                password:hash,
            })
            await user.save();
            res.status(201).send("Sign up is Successfull");
        });
    });
})

userController.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user = await UserModel.findOne({email});
    if(! user){
        return res.send("Invalid Credentials");
    }
    const hash= user.password;
    const userId=user._id;
    bcrypt.compare(password, hash, function(err, result) {
        // res === true
        if(result){
            let token = jwt.sign({email,userId}, process.env.SECRET);
            return res.status(201).send({"message":"Login Succesfull", "token":token, "email":email})
        }
        else{
            return res.status(401).send("Invalid credentials");
        }
    });
})

module.exports = userController;
