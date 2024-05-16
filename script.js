document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addBtn.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task !== '') {
            addTask(task);
            todoInput.value = '';
            todoInput.focus();
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            todoList.removeChild(li);
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);
        todoList.appendChild(li);
    }
});
