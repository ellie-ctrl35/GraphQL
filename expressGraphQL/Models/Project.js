const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  descrription: String,
  phone: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Project", ProjectSchema);