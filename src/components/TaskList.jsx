import React from "react";
import { AiFillDelete } from "react-icons/ai"; // Ícono de eliminación

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center" }}>
          <span style={{ flex: 1 }}>{task}</span>
          <AiFillDelete
            onClick={() => deleteTask(index)}
            style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
