const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  tag: String,
  billable: { type: Boolean, required: true },
  useremail: { type: String, required: true },
});

const ProjectModel = mongoose.model("project", projectSchema);

module.exports = ProjectModel;
