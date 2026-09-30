const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");


function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        return;
    }
    const li = document.createElement("li");

    li.textContent = taskText;

    li.addEventListener("click", function() {
        li.remove();

    })

    taskList.appendChild(li);

}

addTaskButton.addEventListener("click", addTask);