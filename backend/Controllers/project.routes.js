const express = require("express");
const ProjectModel = require("../Models/project.model");
const UserModel = require("../Models/user.model");

const projectController = express.Router();

projectController.get("/", async (req, res) => {
  const { useremail } = req.query;
  const user = await UserModel.findOne({ email: useremail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }

  const projects = await ProjectModel.find({ useremail: useremail });

  try {
    res.status(200).send(projects);
  } catch (err) {
    res.status(500).send("Please try again");
  }
});

projectController.post("/new", async (req, res) => {
  const { name, tag, billable, useremail } = req.body;
  const user = await UserModel.findOne({ email: useremail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }

  try {
    const newProject = new ProjectModel({ name, tag, billable, useremail });
    newProject.save();
    res
      .status(201)
      .send({ message: "Project added successfully!", newProject });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

projectController.patch("/update/:projectId", async (req, res) => {
  const { projectId } = req.params;
  console.log(projectId);
  const { mail } = req.query;
  const user = await UserModel.find({ email: mail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }
  const { name, tag, billable, useremail } = req.body;

  try {
    const data = await ProjectModel.findByIdAndUpdate(
      { _id: projectId },
      req.body,
      { new: true }
    );
    res.status(200).send({ message: "Project updated!", data });
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

projectController.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  const { mail } = req.query;
  const user = await UserModel.find({ email: mail });
  if (!user) {
    return res.status(401).send("Unauthenticated User!");
  }
  try {
    await ProjectModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Project Deleted" });
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

module.exports = projectController;
