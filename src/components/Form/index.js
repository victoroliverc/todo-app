import React from "react";
import "./styles.css";

function Form({ onAddTask: handleAddTask }) {
  return (
    <form>
      <label className="form-check">
        <input id="form-checkbox" type="checkbox" />
        <span className="checkbox"></span>
      </label>
      <input id="input-task" type="text" placeholder="Create a new todo..." />
      <button onClick={handleAddTask}>+</button>
    </form>
  );
}

export default Form;
