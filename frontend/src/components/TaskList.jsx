import React from "react";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div className="task-item" key={task._id}>
            <div className="task-info">
              <p>{task.title}</p>
              <small>
                Created On:{format(new Date(task.createdAt), "P")}{" "}
              </small>
            </div>
            <div className="task-actions">
              <button onClick={() => editTask(task)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </button>
              <button onClick={() => deleteTask(task._id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
