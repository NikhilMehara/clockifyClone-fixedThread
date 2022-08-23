const express = require("express");
const connection = require("./Config/db");
const userController = require("./Controllers/user.routes");
const authentication = require("./Middleware/authentication");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/", userController);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
  }
  console.log("Server Listening!");
});
