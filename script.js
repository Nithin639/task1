document.addEventListener('DOMContentLoaded', function () {
    let tasks = [];

    function addTask() {
        const taskInput = document.getElementById('task-input');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const task = {
                id: Date.now(),
                text: taskText,
                completed: false
            };

            tasks.push(task);

            displayTasks();

            // Clear the input field
            taskInput.value = '';
        }
    }

    function displayTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${task.text}</span>
                <button onclick="completeTask(${task.id})">Complete</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            `;

            if (task.completed) {
                li.classList.add('completed');
            }

            taskList.appendChild(li);
        });
    }

    window.completeTask = function (taskId) {
        const taskIndex = tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            tasks[taskIndex].completed = true;
            displayTasks();
        }
    };

    window.deleteTask = function (taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        displayTasks();
    };

    // Add event listener to the "Add Task" button
    const addButton = document.getElementById('add-button');
    if (addButton) {
        addButton.addEventListener('click', addTask);
    }
});
