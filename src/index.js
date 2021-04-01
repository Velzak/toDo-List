import { Project, projectArray, currentProject } from "./modules/Project"
import loadPage from "./modules/initialLoad"
import ToDo from './modules/ToDo'


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



const taskForm = document.querySelector('#submitTasks')

taskForm.addEventListener('click', (e) => {
    e.preventDefault()

    const title = document.querySelector('#nameTask')
    if (title.value === ''){
        alert('The Project must have a name')
        return
    }

    const date = document.querySelector('#dateTask')
    if (date.value === ''){
        alert('The Project must have a name')
        return
    }

    const priority = document.querySelector('#priorityTask')
    if (priority.value === ''){
        alert('The Project must have a name')
        return
    }

    const task = new ToDo(title.value, date.value, priority.value)

    currentProject.tasks.push(task)
    task.render()


})