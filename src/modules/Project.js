//Create a project object to store each task in, allow for creation of more projects

const sidebar = document.querySelector('#projectArea #sideBar')

function setId(){
  return Math.random().toString().split('.').join('')
}

class Project {
  constructor(name) {
    this.name = name;
    this.id = setId()
    this.tasks = []
  }

  render() {
    //create each individual project
    const div = document.createElement('div')
    div.setAttribute('class', 'projects')

    const p = document.createElement('p')
    p.textContent = this.name

    const del = document.createElement('i')
    del.setAttribute('class', 'fas fa-trash')
    del.addEventListener('click', () => {
      this.delete()
    })

    div.appendChild(p)
    div.appendChild(del)
    sidebar.appendChild(div)

   //Clicking on each project will make the project active
    div.addEventListener('click', () => {
      currentProject = this
      currentProject.active = false
      let projectClass = document.querySelectorAll('.projects')
      projectClass.forEach((f) => f.classList.value = 'projects')
    })
  }

  delete(){
    //Deletes the clicked project based on the ID
    projectArray = projectArray.filter((project) => project.id !== this.id)
    Project.renderProject()
  }

  static renderProject(){
    //renders the projects array
    projectArray.forEach((project) => project.render())
  }

  static setCurrentFolder(project){
    currentProject = project
  }
  
}

let projectArray = [new Project('Test')]
let currentProject = projectArray[0]

export { Project, projectArray, currentProject }
