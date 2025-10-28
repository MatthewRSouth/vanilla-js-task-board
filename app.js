'use strict';

const newTaskForm = document.querySelector('#new-task-form');
const newTaskInput = document.querySelector('#new-task-input');
const newTaskBtn = document.querySelector('#new-task-btn');
newTaskBtn.style.backgroundColor;

//Initial State object
const initialState = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Configure webpack' },
        'task-2': { id: 'task-2', content: 'Set up project structure' },
        'task-3': { id: 'task-3', content: 'Build UI components' },
        'task-4': { id: 'task-4', content: 'Connect to API' },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            taskIds: ['task-1', 'task-2'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-3'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: ['task-4'],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
};

function render() {
    //variables
    const appContainer = document.querySelector('#app');
    // const toDoColumnTitle = initialState.columns['column-1'].title;

    const toDoTaskIds = initialState.columns['column-1'].taskIds;
    appContainer.innerHTML = '';
    for (let columnId of initialState.columnOrder) {
        //Create Div and Title elements
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        const column = initialState.columns[columnId];
        const columnTitle = column.title;
        const titleEl = document.createElement('h2');
        titleEl.classList.add('title-element');
        //create title element and put it in the div
        titleEl.textContent = columnTitle;
        columnDiv.appendChild(titleEl);
        //Getting the tasks and creating the cards
        const columnTaskIDs = column.taskIds;
        //TODO
        let counter = -1;
        const spanColors = ['blue', 'purple', 'green'];
        for (const taskId of columnTaskIDs) {
            const task = initialState.tasks[taskId];
            const cardEl = document.createElement('div');
            cardEl.classList.add('card');
            cardEl.textContent = task.content;
            columnDiv.appendChild(cardEl);
        }
        appContainer.appendChild(columnDiv);
    }
}
//2. event listener on submit button for newtask
let currentTaskCount = Object.keys(initialState.tasks).length;
newTaskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskValue = newTaskInput.value;

    if (taskValue.trim() !== '') {
        currentTaskCount += 1;
        const newTaskId = `task-${currentTaskCount}`;

        initialState.tasks[newTaskId] = {
            id: newTaskId,
            content: taskValue,
        };
        initialState.columns['column-1'].taskIds.push(newTaskId);
    }

    render();
    newTaskInput.value = '';
});

render();
