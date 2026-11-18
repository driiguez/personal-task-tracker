// Find the HTML elements we need

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

console.log("Task Tracker JavaScript is connected!");

// Function to add a new task

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create the list item
  const li = document.createElement("li");

  // Create the task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Mark task as completed when clicked
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-button");

  // Remove task when delete button is clicked
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  // Add elements to the list item
  li.appendChild(span);
  li.appendChild(deleteButton);

  // Add list item to the page
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Listen for button clicks

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
