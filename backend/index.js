const express = require("express");
const connection = require("./Config/db");
const userController = require("./Controllers/user.routes");
// const cors = require("cors");
const authentication = require("./Middleware/authentication");
require("dotenv").config();

const app = express();
app.use(express.json());
// app.use(cors());

app.get("/",(req,res)=>{
  res.send("Home page");
})

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


// client-Id=813549467096-oktv579panfaccmfgq8ro13glb32p4c5.apps.googleusercontent.com;

// client-secret=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