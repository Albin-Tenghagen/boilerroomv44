console.log('Javascript file loaded correctly')

let myArray = []; // initialize an empty array

let myObject = { id: " ", description: " ", finished: false }; // create an object with 3 static keys and 3 dynamic values.

myArray.push(myObject); // add the object to the array

console.log(myArray);

// function addNewTask(){

// }

// function showTaskList() {
    
// }

// function finishedTask(){

// }

// removeTask(){

// }

// closeProgram(){
    
// }

// myArray.push(myObject);

function objAdd(id, description, finished){

    myObject.id = id;
    myObject.description = description;
    myObject.finished = finished;
    return
}
// function that creates a new Object with with myObject as the the "template"
function addNewObj(id, description, finished){ 
let newObject = Object.create(myObject);
newObject.id = id;
newObject.description = description;
newObject.finished = finished;
// console.log(newObject);
myArray.push(newObject);

return;
}

addNewObj("ny köplista", "handla mjölk1", false)
addNewObj("test", "testdesc..", false)
addNewObj("spela fotboll", "klockan 15", false)



// let newObject = Object.assign(myObject, objAdd)
// console.log(newObject);


// // objAdd("uppgift 2", "handla ägg", false)


// console.log(objAdd);
// let userChoice = prompt('Ja vill ha nytt id')