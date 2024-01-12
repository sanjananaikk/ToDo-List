let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        tasks.push(taskInput.value.trim());
        updateTaskList(taskList);
        taskInput.value = '';
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    const taskList = document.getElementById('taskList');
    updateTaskList(taskList);
}

function updateTaskList(taskList) {
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteTask(index);

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}