'use strict';

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
//1. Make render function
function render() {
    //variables
    const appContainer = document.querySelector('#app');
    const toDoColumnTitle = initialState.columns['column-1'].title;
    //clear any duplicaets/other html
    appContainer.innerHTML = '';

    //3. render title to screen
    const titleElement = document.createElement('h2');
    titleElement.textContent = toDoColumnTitle;
    appContainer.appendChild(titleElement);
}

render();
