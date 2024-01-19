import React from "react";
import { Draggable } from "react-beautiful-dnd";
import crossIcon from "../../assets/icon-cross.svg";
import "./styles.css";

function Task({ task, handleCheck, handleDelete, index }) {
  return (
    <Draggable key={task.id} draggableId={`draggable-${index}`} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            boxShadow: snapshot.isDragging ? "0 4px 5px #00000020" : "",
            borderBottom: snapshot.isDragging ? "none" : "",
            ...provided.draggableProps.style,
            ...provided.dragHandleProps.style,
          }}
          className="task"
        >
          <div>
            <label htmlFor={task.id}>
              <input
                id={task.id}
                type="checkbox"
                onChange={() => handleCheck(task.id)}
                checked={task.done}
              />
              <span className="checkbox"></span>
            </label>
            <p className={`description ${task.done ? "done" : ""}`}>
              {task.description}
            </p>
          </div>
          <button className="btn-delete" onClick={() => handleDelete(task.id)}>
            <img src={crossIcon} alt="cross icon" />
          </button>
        </li>
      )}
    </Draggable>
  );
}

export default Task;
