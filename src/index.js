import { Project, projectArray, currentProject } from "./modules/Project"
import loadPage from "./modules/initialLoad"

loadPage();

const projectForm = document.querySelector('#submit')

projectForm.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.querySelector('#inputProject')
    if (input.value === ''){
        alert('The Project must have a name')
        return
    }
    const project = new Project(input.value)
    projectArray.push(project)
    input.value = ''
    Project.renderProject()
})