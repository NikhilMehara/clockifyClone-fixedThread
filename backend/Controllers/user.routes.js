const express = require("express");
const UserModel = require("../Models/user.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const saltRounds = 10;

const userController = express.Router();

userController.post("/register", async (req, res) => {
  const { name, username, email, password } = req.body;
  bcrypt.hash(password, saltRounds, async function (err, hash) {
    if (err) {
      return res.send("Please try again!");
    }
    const data = new UserModel({ name, username, email, password: hash });
    data.save();
    res.send({ message: "Signup successful!", data });
  });
});

userController.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.send("Invalid Credentials");
  }
  const hash = user.password;
  bcrypt.compare(password, hash, async function (err, result) {
    if (result) {
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        process.env.SECRET_KEY
      );
      return res.send({ message: "Login Successful!", token, user });
    } else {
      return res.send("Invalid Credentials!");
    }
  });
});

module.exports = userController;
