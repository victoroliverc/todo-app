const input = document.querySelector('#input');
const checkmark = document.querySelector('.checkmark');
const btnClear = document.querySelector('#btn-clear');
const todoList = document.querySelector('.tasks');
const filterActive = document.querySelector('#filter-active');
const filterCompleted = document.querySelector('#filter-completed');
const filterAll = document.querySelector('#filter-all');
let tasks = [];

btnClear.addEventListener('click', clearCompletedTasks);
filterAll.addEventListener('change', renderTasks);
filterActive.addEventListener('change', renderTasks);
filterCompleted.addEventListener('change', renderTasks);
input.addEventListener('keyup', event => {
    // Execute the event by pressing Enter key
    if (event.keyCode === 13) {
        addTask(event);
        renderTasks();        
        event.target.value = '';
    }
})

onload = () => {
    if (localStorage.getItem('tasks')) {7
        console.log(localStorage.getItem('tasks'));
        tasks = JSON.parse(localStorage.getItem('tasks'));
        renderTasks();
    }
    countTask();
}

function addTask(event) {
    const task = event.target.value;
    const checkmark = document.querySelector('#checkmark');
    let taskState = ((checkmark.checked) ? 1 : 0);

    if (!task) {
        return;
    }
    tasks.push({
        description: task,
        completed: taskState,
        id: generateId()
    });
    storeTasks();
    countTask();
    checkmark.checked = false;
    console.log(tasks);
}

function storeTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    let filteredTasks = filterTasks();
    
    todoList.innerHTML = '';
    if (!tasks) return
    for (let task of filteredTasks) {
        createBoxTemplate(task);
    }
    filteredTasks.forEach(task => {
        if (task.completed === 1) {
            const checkmark = document.querySelector(`#${task.id}`);
            checkmark.checked = true;
        }
    })
    loadCheckmarks();
    loadRemoveButtons();
}

function filterTasks() {
    let filteredTasks = [];

    if (filterAll.checked) {
        filteredTasks = [ ...tasks ];
    } else if (filterActive.checked) {
        filteredTasks = tasks.filter(task => task.completed === 0);
    } else if (filterCompleted.checked) {
        filteredTasks = tasks.filter(task => task.completed === 1);
    }

    return filteredTasks;
}

function createBoxTemplate(task) {
    const todoList = document.querySelector('.tasks');
    const box = document.createElement('div');
    const input = document.createElement('input');
    const description = document.createElement('p');
    const button = document.createElement('button');
    const img = document.createElement('img');

    box.classList.add('box');
    description.classList.add(task.id);
    input.classList.add('checkmark');
    button.classList.add('cross');

    input.setAttribute('id', task.id);
    input.setAttribute('type', 'checkbox');
    input.setAttribute('name', 'checkbox');
    img.setAttribute('src', './images/icon-cross.svg');

    description.innerText = task.description;
    if (task.completed === 1) {
        description.classList.add('completed-task');
    }
    todoList.appendChild(box);
    box.appendChild(input);
    box.appendChild(description);
    box.appendChild(button);
    button.appendChild(img);
}

function countTask() {
    const counterDisplay = document.querySelector('#task-count'); 
    const counter = tasks.reduce((acc, task) => {
        if (task.completed === 0) {
            acc++;
        }
        return acc;
    }, 0)
    counterDisplay.innerHTML = `${counter} items left`;
}

function generateId() {
    let id = '';

    do {
        id = Math.random().toString(36).substring(2, 9);
    } while (parseInt(id[0]) || parseInt(id[0]) === 0);

    return id;
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => task.completed === 0);
    storeTasks();
    renderTasks();
}

function markTaskAsCompleted(event) {
    const checkmarkId = event.target.id;
    const description = document.querySelector(`.${checkmarkId}`);

    if (event.target.checked) {
        for (let i in tasks) {
            if (tasks[i].id === checkmarkId) {
                tasks[i].completed = 1;
            }
        }
        description.classList.add('completed-task');
    } else {
        for (let i in tasks) {
            if (tasks[i].id === checkmarkId) {
                tasks[i].completed = 0;
            }
        }
        description.classList.remove('completed-task');
    }
    storeTasks();
    renderTasks();
    countTask();
}

function removeTask(event) {
    const box = event.target.parentElement.parentElement;
    const taskId = box.querySelector('input').id;

    tasks = tasks.filter(task => task.id != taskId);
    storeTasks();
    renderTasks();
    countTask();
}

function loadRemoveButtons() {
    if (document.querySelectorAll('.cross')) {
        let btnRemove = document.querySelectorAll('.cross')

        btnRemove.forEach(button => {
            button.addEventListener('click', e => {
                removeTask(e);
            })
        })
    }
}

function loadCheckmarks() {
    if (document.querySelectorAll('.checkmark')) {
        let checkmarks = document.querySelectorAll('.checkmark');

        checkmarks.forEach(checkmark => 
            checkmark.addEventListener('change', event => {
                markTaskAsCompleted(event);
            }))
    }
}


