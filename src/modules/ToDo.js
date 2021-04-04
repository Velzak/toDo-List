//Creates each ToDo Item in list
import { currentProject } from "./Project";

function setId() {
  return Math.random().toString().split(".").join("");
}
export default class ToDo {
  constructor(name, date, priority) {
    this.name = name;
    this.date = date;
    this.priority = priority;
    this.id = setId();
  }

  render() {
    const section = document.createElement("section");
    section.setAttribute("class", "taskToDo");
    section.setAttribute("id", this.id);

    const taskName = document.createElement("section");
    taskName.setAttribute("class", "taskName");
    section.appendChild(taskName);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    taskName.appendChild(checkbox);

    const h3 = document.createElement("h3");
    h3.textContent = this.name;
    taskName.appendChild(h3);

    const taskDetails = document.createElement("section");
    taskDetails.setAttribute("class", "taskDetails");
    section.appendChild(taskDetails);

    const h4 = document.createElement("h4");
    h4.textContent = this.date;
    taskDetails.appendChild(h4);

    const priority = document.createElement("p");
    priority.textContent = this.priority;
    taskDetails.appendChild(priority);

    const deleteBtn = document.createElement("i");
    deleteBtn.setAttribute("class", "fas fa-backspace");
    taskDetails.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
      this.delete();
    });

    document.querySelector("#taskArea").appendChild(section);
  }

  delete() {
    currentProject.tasks = currentProject.tasks.filter(
      (task) => task.id !== this.id
    );
    currentProject.renderTasks();
  }

  edit() {
    //Add Later
  }
}
