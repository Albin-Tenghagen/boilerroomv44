let taskButton = document.getElementById("addTaskBtn")
let inputFieldTask = document.getElementById("addTask")

//
let taskListContainer = document.createElement("main")
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
    listItem.innerText = inputFieldTask.value;
    taskList.appendChild(listItem)
    console.log(listItem)
})