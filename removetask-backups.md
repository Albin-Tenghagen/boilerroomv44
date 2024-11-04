
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