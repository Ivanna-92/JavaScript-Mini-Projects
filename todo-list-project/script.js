// Array to store our tasks
const tasks = [];

// Function to add a new task
function addTask() {

    // Get the task from the input field
    const taskInput = document.getElementById("taskInput").value;

    if (taskInput) {

        tasks.push(taskInput);

        displayTasks();

        document.getElementById("taskInput").value = "";

        
    }

}

//Function to remove a task 
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Function to display the tasks
function displayTasks() {

    // Get the task list from the HTML
    const taskList = document.getElementById("taskList");
    
    taskList.innerHTML = "";

    // Loop through the tasks array
    for (let i = 0; i < tasks.length; i++) {
        const listItem = document.createElement("li");
        
        listItem.textContent = tasks[i];
       
        

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";

        removeButton.onclick = () => {
            removeTask(i);
        };

        listItem.appendChild(removeButton);

        taskList.appendChild(listItem);
    

    }

}

document.getElementById("addTaskButton").addEventListener("click", addTask);

document.getElementById("taskInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});