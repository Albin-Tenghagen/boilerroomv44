console.log('Javascript file loaded correctly')

let myArray = []; // initialize an empty array

let myObject = {
     id: " ",
     description: " ",
     finished: false 
    }; 
    // create an object with 3 static keys and 3 dynamic values.

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
    addNewObj("spela tennis", "klockan 20", false)
    addNewObj("Träffa vänner", "på lördag", )
    // saveAndDisplayTasks()  --- anropas senare i koden, för det är där den ska vara.
    
    
    

// }

// function showTaskList() {

    function saveAndDisplayTasks() { 
        // Add a new entry with calculation details to the history
        // myArray.push({ id, description, finished }); // changes the original array rather than creating a new one.
        
        const taskContainer = document.getElementById("taskItems");
        taskContainer.innerHTML = ''; 
        
       
        for (let i = 0; i < myArray.length; i++) {
            const newObject = myArray[i];
            const listItem = document.createElement("li");
            listItem.textContent = `Task: ${newObject.id} ${newObject.description}  `;
            taskContainer.appendChild(listItem);
            
            if (newObject.finished === true) {
                listItem.style.textDecoration = 'line-through';
            }

            // return listItem.textContent = `Task: ${newObject.id} ${newObject.description} ${newObject.finished}`;
        }
    }

    
    
// }

// function finishedTask(){


//find with filter() of matching id and then we can manipulate it to boolean:true which is finished task.
// if task is finished with boolean true then it should be "genomstrucket" in the web, so it's noticable.




// const filter_myArray = myArray.filter(function(task) {
//     return task.id === "spela tennis";  // Use `===` for strict equality
// });

// console.log(filter_myArray);

objIndex = myArray.findIndex(obj => obj.id == "spela tennis");

console.log(myArray[objIndex]); //before updated object.
myArray[objIndex].finished = true;


console.log(myArray[objIndex]); // after updated object.
console.log(myArray);
saveAndDisplayTasks();



// }

// removeTask(){


// function removeTask(){
//     let userRemoveTask = prompt('Pick a task to take of the list, use a number please')

//     if userRemoveTask == myArray[i] {
//         myArray.splice()
//     }
//     myArray.splice(1, 1,);
//     console.log(myArray); 
// }


//  function removeTask(){
//     let removeByIndex = prompt("Enter the index you wish to remove: ");
//     let index = myArray.indexOf(removeByIndex);
//     if(index > -1){ // HERE!!!
//         myArray.splice(index, 1);

//     }
//     else{
//         alert("id is not in the system");
//     }
// }

// let remove = function() {
//     let removeID = parseInt(prompt("enter index of array to remove"));
//     let index = myArray.indexOf(removeID);
//     if (index > -1){
//         myArray.splice(index, 1);
//         showArray();
//     }
//     else{
//         alert("index not found")
//     }
// }
// remove();


// function removeTaskById() {
//     const taskId = prompt("Enter ID:");
//     if (!taskId) {
//         console.log("No ID entred.");
//         return;
//     }
//     const index = myArray.indexOf(task => task.id === taskId);
//     if (index !== -1) {
//         myArray.splice(index, 1); // 
//         console.log(`id "${taskId}"  removed.`);
//         saveAndDisplayTasks(); 
//     } else {
//         console.log(`id "${taskId}" not found.`);
//     }
// }


function removeTaskById() {
    const indexInput = prompt("Enter index:");
    const index = parseInt(indexInput, 10); 

    myArray.splice(index, 1); // 
    console.log(`Task at index ${index} removed.`);
    saveAndDisplayTasks(); 
}

removeTaskById();
console.log(myArray);


// använd splice för o ta bort.


// }

// closeProgram(){
    
// while not writing "close" the program continues. so a while loop.

// }

// myArray.push(myObject);


// function that creates a new Object with with myObject as the the "template"



// let newObject = Object.assign(myObject, objAdd)
// console.log(newObject);


// // objAdd("uppgift 2", "handla ägg", false)


// console.log(objAdd);
// let userChoice = prompt('Ja vill ha nytt id')


///////////// BOILERROOOM SCANDIC ^ 











