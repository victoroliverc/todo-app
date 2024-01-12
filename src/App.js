import React, { useState, useEffect } from "react";
import { Header, Form, TaskBoard, Options } from "./components/index.js";
import Task from "./classes/Task.js";

function Todo() {
  const [isDark, setIsDark] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (!storedTasks) return;

    const nextTasks = storedTasks.map(
      (task) => new Task(task.description, task.done)
    );

    setTasks(nextTasks);
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !task.done;
    } else if (filter === "completed") {
      return task.done;
    }
    return true;
  });

  const counter = tasks.reduce((acc, task) => {
    if (!task.done) acc++;
    return acc;
  }, 0);

  function handleAddTask(event) {
    event.preventDefault();

    const formCheck = document.querySelector("#form-checkbox");
    const done = formCheck.checked ? true : false;
    const input = document.querySelector("#input-task");
    const description = input.value;

    if (!description) return;

    const task = new Task(description, done);
    const nextTasks = [...tasks, task];

    setTasks(nextTasks);
    localStorage.setItem("tasks", JSON.stringify(nextTasks));
    input.value = "";
    formCheck.checked = false;
  }

  function handleCheck(id) {
    const nextTasks = tasks.map((task) => {
      return task.id === id ? task.updateStatus() : task;
    });

    setTasks(nextTasks);
    localStorage.setItem("tasks", JSON.stringify(nextTasks));
  }

  function handleClear() {
    const nextTasks = tasks.filter((task) => !task.done);

    setTasks(nextTasks);
    localStorage.setItem("tasks", JSON.stringify(nextTasks));
  }

  function handleDelete(id) {
    const nextTasks = tasks.filter((task) => task.id !== id);

    setTasks(nextTasks);
    localStorage.setItem("tasks", JSON.stringify(nextTasks));
  }

  function handleChangeTheme() {
    const body = document.querySelector("body");

    body.classList.toggle("light");
    setIsDark(!isDark);
  }

  return (
    <div className="Todo" data-theme={isDark ? "dark" : "light"}>
      <Header onChangeTheme={handleChangeTheme} />
      <Form onAddTask={handleAddTask} />
      <div className="container">
        <TaskBoard
          tasks={filteredTasks}
          onCheck={handleCheck}
          onDelete={handleDelete}
        />
        <Options
          counter={counter}
          setFilter={setFilter}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}

export default Todo;
