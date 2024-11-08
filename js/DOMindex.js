let taskButton = document.getElementById("addTaskBtn")
taskButton.setAttribute("id", "taskButton")
let inputFieldTask = document.getElementById("addTask")
inputFieldTask.setAttribute("id", "inputFieldTask")

let taskArray = []
let taskObject = {
    description: " ",
    finished: undefined
};

//
let taskListContainer = document.createElement("main")
taskListContainer.setAttribute("id", "taskListContainer")
document.body.appendChild(taskListContainer)

let containerHeadLine = document.createElement("h3")
containerHeadLine.innerHTML = "Task list"
containerHeadLine.setAttribute("id", "containerheader")
taskListContainer.appendChild(containerHeadLine)

let taskList = document.createElement("ol")
taskList.setAttribute("id", "taskList")
taskListContainer.appendChild(taskList)

taskButton.addEventListener("click", function(){
    let listItem = document.createElement("li")
    listItem.setAttribute("class", "listItem")
    listItem.innerText = inputFieldTask.value;
    taskList.appendChild(listItem)
    
    let finishButton = document.createElement("button")
    finishButton.innerHTML = "Finish Task"
    finishButton.setAttribute("id", "finishbutton")
    listItem.appendChild(finishButton)
    
    objectCreation()
})

//*Function that creates an object in taskArray basen on taskbutton.Eventlistener function
function objectCreation(){
    let newObject = Object.create(taskObject);
    newObject.description = inputFieldTask.value;
    newObject.finished = undefined;
    taskArray.push(newObject);
    console.log(taskArray)
    return;
}
//*-----------------------------------------------------------