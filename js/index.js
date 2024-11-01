console.log('Javascript file loaded correctly')

let myArray = []; // initialize an empty array

let myObject = { id: " ", description: " ", finished: false }; // create an object with 3 static keys and 3 dynamic values.

myArray.push(); // add the object to the array

console.log(myArray);

// function addNewTask(){

function addNewObj(id, description, finished){ 
    let newObject = Object.create(myObject);
    newObject.id = id;
    newObject.description = description;
    newObject.finished = finished;
    myArray.push(newObject);
    
    return;
    }
    
    addNewObj("ny köplista", "handla mjölk1", false)
    addNewObj("test", "testdesc..", false)
    addNewObj("spela fotboll", "klockan 15", false)
    addNewObj("spela tennis", "klockan 17", false)
    addNewObj("spela tennis", "klockan 17", false)
    saveAndDisplayTasks()
    
    
    

// }

// function showTaskList() {
    function saveAndDisplayTasks() { 
        // Add a new entry with calculation details to the history
        // myArray.push({ id, description, finished }); // changes the original array rather than creating a new one.
        
        const taskContainer = document.getElementById("taskItems");
        // taskContainer.innerHTML = ''; 
        
       
        for (let i = 0; i < myArray.length; i++) {
            const newObject = myArray[i];
            const listItem = document.createElement("li");
            listItem.textContent = `Task: ${newObject.id} ${newObject.description} ${newObject.finished}`;
            taskContainer.appendChild(listItem);
            // return listItem.textContent = `Task: ${newObject.id} ${newObject.description} ${newObject.finished}`;
        }
    }

    
    
// }

// function finishedTask(){

// }

// removeTask(){

// }

// closeProgram(){
    
// }

// myArray.push(myObject);


// function that creates a new Object with with myObject as the the "template"



// let newObject = Object.assign(myObject, objAdd)
// console.log(newObject);


// // objAdd("uppgift 2", "handla ägg", false)


// console.log(objAdd);
// let userChoice = prompt('Ja vill ha nytt id')


///////////// BOILERROOOM SCANDIC ^ 











