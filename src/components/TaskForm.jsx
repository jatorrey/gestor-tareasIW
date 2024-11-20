import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
