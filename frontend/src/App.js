import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import axios from "./components/axios";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/tasks");
      setTasks(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await axios.post("/tasks", task);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

 
  const updateTask = async (task) => {
    try {
      const response = await axios.put(`/tasks/${task._id}`, task);
      setTasks(tasks.map((t) => (t._id === task._id ? response.data : t)));
      setEditingTask(null); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

 
  const deleteTask = async (id) => {
    try {
      await axios.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };


  const editTask = (task) => {
    setEditingTask(task); 
  };

  useEffect(() => {
    fetchTasks(); 
  }, []);

  return (
    <div className="app">
      <h1 className="app-heading">Task Management</h1>
      <TaskForm
        addTask={addTask}
        updateTask={updateTask}
        editingTask={editingTask}
      />
      {loading ? (
        <p style={{color:"white"}}>Loading tasks...</p>
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      )}
    </div>
  );
};

export default App;
