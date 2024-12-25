import React, { useState, useEffect } from "react";
import "../index.css";

const TaskForm = ({ addTask, updateTask, editingTask }) => {
  const [title, setTitle] = useState("");

  // Effect to set the title when editing a task
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      updateTask({ ...editingTask, title }); // Call updateTask for editing
    } else {
      addTask({ title }); // Call addTask for adding new task
    }

    setTitle(""); // Clear input after submission
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
