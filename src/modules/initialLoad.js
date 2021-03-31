function createHeader(id) {
  const header = document.createElement("header");
  header.setAttribute("id", id);
  return header;
}

function createHeaderElements(id, text) {
  const div = document.createElement("div");
  div.setAttribute("id", id);

  const home = document.createElement("i");
  home.setAttribute("class", "fa fa-home");
  div.appendChild(home);

  const h1 = document.createElement("h1");
  h1.textContent = text;
  div.appendChild(h1);

  return div;
}

function section(id) {
  const section = document.createElement("section");
  section.setAttribute("id", id);

  return section;
}

function inputForm(id, id2, id3){
  const section = document.createElement('section')
  section.setAttribute('id', id2)

  const input = document.createElement('input')
  input.setAttribute('id', id)

  const btn = document.createElement('button')
  btn.setAttribute('id', id3)
  btn.textContent = '>'

  section.appendChild(input)
  section.appendChild(btn)

  return section
}

//Create input for for the task area, include name, date, details, priorty

function taskForm(id, id2, id4){

  const initialSection = document.createElement('section')
  initialSection.setAttribute('id', 'task-section')

  const section = document.createElement('section')
  section.setAttribute('id', 'task-container')
  initialSection.appendChild(section)

  const name = document.createElement('input')
  name.setAttribute('id', id)
  name.type = 'text'
  section.appendChild(name)

  const date = document.createElement('input')
  date.setAttribute('id', id2)
  date.type = 'date'
  section.appendChild(date)

  // const details = document.createElement('input')
  // details.setAttribute('id', id3)
  // details.type = 'text'
  // section.appendChild(details)

  const priority = document.createElement('select')
  priority.setAttribute('id', id4)
  section.appendChild(priority)
  
  const option1 = document.createElement('option')
  option1.value = 'low'
  option1.textContent = 'Low'

  const option2 = document.createElement('option')
  option2.value = 'high'
  option2.textContent = 'High'

  priority.appendChild(option1)
  priority.appendChild(option2)

  const btn = document.createElement('button')
  btn.setAttribute('id', 'submitTasks')
  btn.textContent = 'Add'
  section.appendChild(btn)

  return initialSection
}

function loadPage() {
  const content = document.querySelector("#content");

  const header = createHeader("header");
  content.appendChild(header);

  const headerElements = createHeaderElements("headerElement", "ToDo List");
  header.appendChild(headerElements);

  const contentArea = section('contentArea')
  content.appendChild(contentArea)

  const side = section("sideBar");
  contentArea.appendChild(side);

  const input = inputForm('inputProject', 'submitForm', 'submit')
  side.appendChild(input)

  const projects = section('projectArea')
  projects.setAttribute('class', 'card')

  side.appendChild(projects)

  const tasks = section('tasks')
  contentArea.appendChild(tasks)

  const tasksForm = taskForm('nameTask', 'dateTask', 'priorityTask')
  tasks.appendChild(tasksForm)

  const taskArea = section('taskArea')
  tasks.appendChild(taskArea)
}

export default loadPage
