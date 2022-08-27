const express = require("express");
const connection = require("./Config/db");
let jwt = require("jsonwebtoken");
const userController = require("./Controllers/user.routes");
// const UserModel = require("./Models/user.model");
const cors = require("cors");
const authentication = require("./Middleware/authentication");
require("dotenv").config();
const passport = require("./Config/google_auth");
const projectController = require("./Controllers/project.routes");
const taskController = require("./Controllers/task.routes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  async function (req, res) {
    const email=req.user.email;
    const userId=req.user._id;
    let token = jwt.sign({email,userId}, process.env.SECRET);
    // console.log(token);
    // res.redirect("/");
    res.send({"message":"login Success","email":email,"token":token})
    // res.redirect('/');
  }
);

app.use("/", userController);
app.use("/", authentication);
app.use("/project", projectController);
app.use("/tasks", taskController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
  console.log(`Listening at http://localhost:${process.env.PORT}`);
});
