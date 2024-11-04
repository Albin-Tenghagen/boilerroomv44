

function manipulateTaskList(button){
 let userChoice = Number(button.value);
 console.log(`Manipulation choosen ${userChoice}`)

 switch (userChoice) {
     case 1:
         addNewObj(prompt('Add task name'))
         saveAndDisplayTasks();
         console.log(myArray);
         
         break;
    case 2: 
        console.log("Mark a task as finished");
        finishTask();
        saveAndDisplayTasks();
        break;
    case 3:
        const indexInput = prompt("Enter ID of task:");
        const index = parseInt(indexInput, 10) -1; 

        if(!isNaN(index)) {
            //troubleshootet isNaN function so the syntax is correct
        myArray.splice(index, 1); // 
        console.log("Remove a task");
        saveAndDisplayTasks();
        } else {
            alert('could not remove task, try again');
        }
        break;
    case 4:
        console.log("Show all tasks");
        saveAndDisplayTasks();
        break;
    case 5:
        myArray.length = 0;
        console.log("Clear all tasks");
        saveAndDisplayTasks();
        break;

    default:
            
        console.log("Invalid choice, choose between 1-5");
        break;
        
    }
}







