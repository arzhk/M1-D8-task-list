/* EXERCISE 5: 
Add a new task to the list.
Suggestion:
- Use document.getElementById to get the UL item and the input text
- Use the document.createElement to create the new List Item
- Append the child to the UL
*/

function addNewTask() {
  const taskList = document.querySelector("#myTaskList"); //Find the reference point for the list
  let newLi = document.createElement("li"); // Create a new li element
  let newLiContent = document.querySelector("#newTask").value; // Pulling the value from the input box into a variable

  newLi.innerText = newLiContent; // Set the new li content to the value in the input box
  taskList.appendChild(newLi); // Push the new element into the tasklist
  document.querySelector("#newTask").value = ""; // Clear out the value in the input box
}

/* EXERCISE 6: 
Create a method "removeLast" which removes the last item from the task list
*/

function removeLast() {
  let liArray = document.querySelectorAll("li"); // Create array of all the li

  if (liArray.length === 0) {
    // IF statement checking the length of the array, if there are 0 element in the array ->
    alert("There are no entries to remove.");
  } else {
    // If there is more than 1 element, find the last index and remove it
    liArray[liArray.length - 1].remove();
  }
}

/* EXERCISE 7: 
Create a method "removeFirst" which removes the first item from the task list
*/
function removeFirst() {
  let liArray = document.querySelectorAll("li");

  if (liArray.length === 0) {
    alert("There are no entries to remove.");
  } else {
    liArray[0].remove();
  }
}

/* EXERCISE 8: 
Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
*/
function getTasksAsArray() {
  let liArray = document.querySelectorAll("li");
  let newArray = [];

  for (let i = 0; i < liArray.length; i++) {
    newArray.push(liArray[i].innerText);
  }
  newArray = newArray.join(" ");
  console.log(newArray);
}

/* EXERCISE 9:
Create a method "changeTaskBackgroundColor" which takes the color from the color picker with an 
onchange event listener ad applies it as background to every list item
*/

let colourValue;

let colourGrab = function () {
  let colourValueHold = document.querySelector("#colorPicker").value;
  colourValue = colourValueHold;
};

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#colorPicker").addEventListener("change", colourGrab);
});

function changeTaskBackgroundColor() {
  let liE = document.querySelectorAll("li");
  for (let i = 0; i < liE.length; i++) {
    liE[i].style.backgroundColor = colourValue;
  }
}

/* EXTRA */

/* EXERCISE 10: 
Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm
            
Use your spare time to beautify your task list with CSS.
Suggestion:
- Break the code into many function for semplicity 
- Reuse the functions previously created
*/
