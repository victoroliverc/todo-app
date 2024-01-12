class Task {
  constructor(description, done) {
    this.id = Math.random().toString(16).slice(2);
    this.description = description;
    this.done = done;
  }

  updateStatus() {
    this.done = !this.done;
    return this;
  }
}

export default Task;
