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

  const tasks = section('tasks')
  contentArea.appendChild(tasks)
}

export default loadPage()
