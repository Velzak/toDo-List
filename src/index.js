import { Project, projectArray, currentProject } from "./modules/Project";
import loadPage from "./modules/initialLoad";
import ToDo from "./modules/ToDo";

loadPage();

const projectForm = document.querySelector("#submit");

projectForm.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#inputProject");
  if (input.value === "") {
    alert("The Project must have a name");
    return;
  }

  const project = new Project(input.value);
  projectArray.push(project);
  input.value = "";
  Project.renderProject();
  Project.setCurrentProject(project);
  let projects = document.querySelectorAll(".projects");
  projects[projects.length - 1].classList.add("active");
});

const taskForm = document.querySelector("#submitTasks");

taskForm.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.querySelector("#nameTask");
  if (title.value === "") {
    alert("The To Do must have a name");
    return;
  }

  const date = document.querySelector("#dateTask");
  if (date.value === "") {
    alert("The date must be filled");
    return;
  }

  const priority = document.querySelector("#priorityTask");
  const task = new ToDo(title.value, date.value, priority.value);

  currentProject.tasks.push(task);
  title.value = "";
  date.value = "";
  task.render();
});

Project.renderProject();
