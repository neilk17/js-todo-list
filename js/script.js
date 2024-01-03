const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const todoList = document.querySelector('.todo');

function addTask() {
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        todoList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert("Please enter a task!");
    }
}

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

addTaskButton.addEventListener('click', addTask);