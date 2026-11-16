// Find the HTML elements we need

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

console.log("Task Tracker JavaScript is connected!");

// Function to add a new task

function addTask() {
  const taskText = taskInput.value.trim();

  // Prevent empty tasks

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a new list item

  const li = document.createElement("li");

  li.textContent = taskText;

  // Add the task to the page

  taskList.appendChild(li);

  // Clear the input

  taskInput.value = "";
}
// Listen for button clicks

addTaskButton.addEventListener("click", addTask);
