const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    timestamp: { type: Date, default: Date.now },
  },
//   { _id: false }
);

module.exports = mongoose.model("todos", todoSchema);
