import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../index";
import "./styles.css";

function Board({ tasks, onCheck: handleCheck, onDelete: handleDelete }) {
  const taskContainers = tasks.map((task, index) => {
    return (
      <Task
        key={index}
        index={index}
        task={task}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    );
  });

  return (
    <Droppable droppableId="droppable-1">
      {(provided) => (
        <ul
          className="task-board"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {taskContainers}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}

export default Board;
