import React from "react";
import "./styles.css";
import crossIcon from "../../assets/icon-cross.svg";

function Task({ id, description, done, handleCheck, handleDelete }) {
  return (
    <li className="task">
      <div>
        <label htmlFor={id}>
          <input
            id={id}
            type="checkbox"
            onChange={() => handleCheck(id)}
            checked={done}
          />
          <span className="checkbox"></span>
        </label>
        <p className={done ? "done" : ""}>{description}</p>
      </div>
      <button className="btn-delete" onClick={() => handleDelete(id)}>
        <img src={crossIcon} alt="cross icon" />
      </button>
    </li>
  );
}

export default Task;
