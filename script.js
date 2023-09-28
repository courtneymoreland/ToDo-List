// Function to add a new task to the to-do list
function newElement() {
  // Get the input value (the task title) from the input field
  var inputValue = document.getElementById("myInput").value;

  // Check if the input is empty or contains only whitespace
  if (inputValue.trim() === '') {
    alert("You must write something!");
  } else {
    // Get the list of tasks (the unordered list)
    var taskList = document.getElementById("myUL");

    // Create a new list item (task) element
    var li = document.createElement("li");
    li.className = "task";

    // Create a span element for the task text
    var taskText = document.createElement("span");
    taskText.className = "task-text";
    taskText.textContent = inputValue;

    // Add a click event listener to the task text to toggle completion
    taskText.addEventListener("click", function () {
      toggleTask(this);
    });

    // Create a span element for the delete button ("❌")
    var deleteButton = document.createElement("span");
    deleteButton.textContent = "❌";

    // Add a click event listener to the delete button to remove the task
    deleteButton.addEventListener("click", function () {
      deleteTask(this);
    });

    // Append the task text and delete button to the task list item
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    // Append the new task to the list of tasks
    taskList.appendChild(li);

    // Clear the input field
    document.getElementById("myInput").value = "";
  }
}

// Function to toggle the completion status of a task
function toggleTask(element) {
  element.classList.toggle("completed");
}

// Function to delete a task from the list
function deleteTask(element) {
  element.parentElement.remove();
}
