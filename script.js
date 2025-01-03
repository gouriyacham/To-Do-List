document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
  
    // Function to create a new task item
    const createTaskItem = (taskText) => {
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
  
      const taskContent = document.createElement("span");
      taskContent.textContent = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");
  
      // Delete task functionality
      deleteBtn.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(deleteBtn);
      return taskItem;
    };
  
    // Add task functionality
    addTaskBtn.addEventListener("click", () => {
      const taskText = taskInput.value.trim();
      if (taskText) {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = "";
      } else {
        alert("Please enter a task.");
      }
    });
  
    // Add task on Enter key press
    taskInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        addTaskBtn.click();
      }
    });
  });