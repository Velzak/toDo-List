//Creates each ToDo Item in list
import currentProject from "./Project";

function setId() {
  return Math.random().toString().split(".").join("");
}
class ToDo {
  constructor(name, details, date, priority) {
    this.name = name;
    this.details = details;
    this.date = date;
    this.priority = priority;
    this.id = setID();
  }

  render() {
    const section = document.createElement("section");
    section.setAttribute("class", "taskToDo");
    section.setAttribute("id", this.id);

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const h3 = document.createElement("h3");
    h3.textContent = this.name

    const del = document.createElement("i");
    del.setAttribute("class", "fas fa-trash");
    del.addEventListener("click", () => {
      this.delete();
    });
  }

  delete() {
    currentProject.tasks = currentProject.tasks.filter(
      (task) => task.id !== this.id
    );
    currentProject.renderTasks();
  }

  edit() {}
}

export { ToDo };
