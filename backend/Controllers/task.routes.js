const express = require("express");
const TaskModel = require("../Models/task.model");

const taskController = express.Router();

taskController.get("/", async (req, res) => {
  const { project } = req.query;
  const task = await TaskModel.find({ project });
  try {
    res.status(200).send(task);
  } catch (err) {
    res.status(500).send("Internal Server Error!");
  }
});

taskController.post("/new", async (req, res) => {
  const newTask = new TaskModel(req.body);
  try {
    await newTask.save();
    res.status(201).send({ message: "New task added!", newTask });
  } catch (err) {
    res.status(500).send("Internal server error!");
  }
});

taskController.patch("/update/:taskId", async (req, res) => {
  const { taskId } = req.params;
  const update = await TaskModel.findByIdAndUpdate({ _id: taskId }, req.body, {
    new: true,
  });
  res.status(200).send({ message: "Task updated!", update });
});

taskController.delete("/delete/:taskId", async (req, res) => {
  const { taskId } = req.params;
  await TaskModel.findByIdAndDelete({ _id: taskId });
  res.status(200).send({ message: "Task Deleted!" });
});

module.exports = taskController;
