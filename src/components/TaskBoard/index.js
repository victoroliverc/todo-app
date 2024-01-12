import React from "react";
import { Task } from "../../components/index";
import "./styles.css";

function TaskBoard({ tasks, onCheck: handleCheck, onDelete: handleDelete }) {
  const taskContainers = tasks.map(({ id, description, done }) => {
    return (
      <Task
        key={id}
        id={id}
        description={description}
        done={done}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    );
  });

  return <ul className="task-board">{taskContainers}</ul>;
}

export default TaskBoard;
