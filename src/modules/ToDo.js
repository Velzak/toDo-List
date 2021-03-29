//User presses button
//Button activates event listener to add new task item to todo list
//opens DOM modal to submit event form
//correlate submit form with queryselectors to create a new task for the project
//Push the new task to the project object 
//Allow for edits on task through event listeners

//Creates each ToDo Item in list
function createToDo(name, details, dueDate, priority){
    return {
        name,
        details,
        dueDate,
        priority
    }
}

export default createToDo