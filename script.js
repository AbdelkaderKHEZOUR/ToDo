const todoContainer = document.querySelector('.scroll');
const todoInput = document.querySelector('#task_input');
const todoButton = document.querySelector('.add_task');
const deleteAllButton = document.querySelector('.delete_all');
const Tasks = document.createElement('li');

todoButton.addEventListener('click', addTask);
deleteAllButton.addEventListener('click', RemoveTask);

function addTask() {
    const task = todoInput.value;
    if (task === '') {
        alert('a5dam 3la ro7ek');
        return;
    }
    Tasks.innerText = task;
    todoContainer.appendChild(Tasks);
    todoInput.value = '';
}
function RemoveTask() {
    todoContainer.innerHTML = '';
    todoInput.value = '';
    alert('man5dmoch ba5alna');
}
