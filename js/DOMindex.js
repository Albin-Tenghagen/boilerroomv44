let taskButton = document.getElementById("addTaskBtn")
taskButton.setAttribute("id", "taskButton")

let inputFieldTask = document.getElementById("addTask")
inputFieldTask.setAttribute("id", "inputFieldTask")

let taskArray = [];

let taskObject = {
    id: " ",
    description: " ",
    finished: undefined
};

//----------------------Task list-----------------------------------
//* Creates a main element that acts as a parentNode 
let taskListContainer = document.createElement("main")
taskListContainer.setAttribute("id", "taskListContainer")
document.body.appendChild(taskListContainer)

//* creates the headline for the main Node
let containerHeadLine = document.createElement("h3")
containerHeadLine.innerHTML = "Task list"
containerHeadLine.setAttribute("id", "containerheader")
taskListContainer.appendChild(containerHeadLine)

//*creates the ordered list 
let taskList = document.createElement("ol")
taskList.setAttribute("id", "taskList")
taskListContainer.appendChild(taskList)
//-----------------------------------------------------------------

//-----------------------Finished list-----------------------------
let finishedTaskContainer = document.createElement("aside")
finishedTaskContainer.setAttribute("id", "finishedTaskContainer")
document.body.appendChild(finishedTaskContainer)

//* creates the headline for the main Node
let finishedHeadLine = document.createElement("h3")
finishedHeadLine.innerHTML = "Finished tasks"
finishedHeadLine.setAttribute("id", "finishedheader")
finishedTaskContainer.appendChild(finishedHeadLine)

//*creates the ordered list 
let finishedList = document.createElement("ol")
finishedList.setAttribute("id", "finishedList")
finishedTaskContainer.appendChild(finishedList)


//-----------------------------------------------------------------
taskButton.addEventListener("click", function(){
    let listItem = document.createElement("li")
    listItem.setAttribute("class", "listItem")
    listItem.innerText = inputFieldTask.value;
    taskList.appendChild(listItem)
    
    let finishButton = document.createElement("button")
    finishButton.innerHTML = "Finish"
    finishButton.setAttribute("class", "finishbutton")
    listItem.appendChild(finishButton)
    
    objectCreation()
})

//*Function that creates an object in taskArray basen on taskbutton.Eventlistener function
function objectCreation(){
    let newObject = Object.create(taskObject);
     
    for (let i = 0; i <= taskArray.length; i++){
        newObject.id = i + 1
    }
    newObject.description = inputFieldTask.value;
    newObject.finished = undefined;
    taskArray.push(newObject);
    console.log(newObject)
    return;
}
//*-----------------------------------------------------------

taskList.addEventListener("click", function(event){ 
    if (event.target && event.target.classList.contains("finishbutton")) {    
        newObject.id = true;
    
    }
})

