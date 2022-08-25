const express = require("express");
const connection = require("./Config/db");
let jwt = require('jsonwebtoken');
const userController = require("./Controllers/user.routes");
// const UserModel = require("./Models/user.model");
// const cors = require("cors");
const authentication = require("./Middleware/authentication");
require("dotenv").config();
const passport = require("./Config/google_auth")

const app = express();
app.use(express.json());
// app.use(cors());

app.get("/",(req,res)=>{
  res.send("Home page");
})
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  async function(req, res) {
    // const {email,password}=req.user;
    // const user = await UserModel.findOne({email});
    // const userId=user._id;
    console.log(res);
    //  let token = jwt.sign({email,userId}, process.env.SECRET);
    //  console.log({"message":"Login Succesfull", "token":token, "email":email})
    //  res.status(201).send({"message":"Login Succesfull", "token":token, "email":email})
    res.redirect('/');
  });

app.use("/", userController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening at ${process.env.PORT}`);
});

