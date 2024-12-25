import mongoose from "mongoose";

const TaskScheme = new mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

const task = mongoose.model("Task", TaskScheme);

export default task;
