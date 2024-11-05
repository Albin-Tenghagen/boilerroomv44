console.log('Javascript file loaded correctly')

let myArray = []; // initialize an empty array

let myObject = {
     description: " ",
     finished: undefined 
    }; 
    // create an object with 3 static keys and 3 dynamic values.

myArray.push(); // add the object to the array

console.log(myArray);

let inputField = document.getElementById("addTask").value;


// function addNewTask(){

function addNewObj(description, finished){ 
    let newObject = Object.create(myObject);
    newObject.description = description;
    newObject.finished = finished;
    myArray.push(newObject);
    return;
    }
    

// }

// function showTaskList() {

    function saveAndDisplayTasks() { 
        // Add a new entry with calculation details to the history
        // myArray.push({ id, description, finished }); // changes the original array rather than creating a new one.
        
        const taskContainer = document.getElementById("taskItems");
        taskContainer.innerHTML = ''; 
        
       // skapade buttons bredvid list item för att enklare kunna Finish och delete Tasks.
        for (let i = 0; i < myArray.length; i++) {
            const newObject = myArray[i];
            const listItem = document.createElement("li");
            const buttonFinish = document.createElement ("button")
            const buttonDelete = document.createElement ("button")
            listItem.textContent = `Task: ${newObject.description} `;
            buttonDelete.textContent = "Delete"
            buttonFinish.textContent = "Finish"
            buttonFinish.setAttribute ("onCLick", `finishTask(${i})`);
            listItem.appendChild(buttonFinish,)
            listItem.appendChild(buttonDelete)
            taskContainer.appendChild(listItem);

            if (newObject.finished === true) {
                listItem.style.textDecoration = 'line-through';
            }

            // return listItem.textContent = `Task: ${newObject.id} ${newObject.description} ${newObject.finished}`;
        }
    }

    
    
// }

// function finishedTask(){

function finishTask(index) {
    // Prompt user to enter a task number starting from 1
    // let index = parseInt(prompt('Enter Task ID')) - 1;
  
    // Check if the calculated index is within the array bounds
    if (index >= 0 && index < myArray.length) {
      myArray[index].finished = true; // Mark the task as finished
  
      console.log("Updated task:", myArray[index]); // Display the updated object
    } else {
      alert("Invalid task number. Please enter a valid task number.");
    }
  
    console.log("All tasks:", myArray); // Display the entire array
    saveAndDisplayTasks();
  }

console.log(myArray);


///////////// TEAM 2.1
// Den behövs inte egentligen, såvid vi inte vill visa det i consol loggen med knappen, ser de live!

// 





