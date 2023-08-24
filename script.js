const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value;
  if (taskText.trim() !== "") {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button>Delete</button>
    `;
    
    const deleteButton = taskItem.querySelector("button");
    deleteButton.addEventListener("click", function() {
      taskItem.remove();
    });

    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}
