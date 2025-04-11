const todoContainer = document.querySelector('.scroll');
const todoInput = document.querySelector('#task_input');
const todoButton = document.querySelector('.add_task');
const deleteAllButton = document.querySelector('.delete_all');
const counter = document.querySelector('.counter')
todoButton.addEventListener('click', addTask);
deleteAllButton.addEventListener('click', RemoveTask);
let nTask = 0;
const taskList = [''];
function addTask() {
    const Tasks = document.createElement('li');

    const task = todoInput.value;
    if (task === '') {
        alert('add a valid text');
        return;
    }    
    const btn = document.createElement('button');
        btn.classList.add('removeTask')
        btn.textContent = 'X'
    Tasks.textContent = task;
    Tasks.appendChild(btn);
    todoContainer.appendChild(Tasks);
    todoInput.value = '';
    nTask ++;
    counter.textContent = nTask;
    btn.addEventListener('click',()=>{
        todoContainer.removeChild(Tasks);
        nTask = nTask - 1;
        counter.textContent = nTask
    });
}
function RemoveTask() {
    todoContainer.innerHTML = '';
    todoInput.value = '';
    alert('All tasks have been deleted');
    nTask = 0
    counter.textContent = nTask
}
