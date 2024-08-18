const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = todoInput.value.trim();
  if (newTodo) {
    todos.push({ text: newTodo, completed: false });
    todoInput.value = '';
    renderTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todo.text;
    span.addEventListener('click', () => {
      todo.completed = !todo.completed;
      renderTodos();
    });
    if (todo.completed) {
      span.classList.add('completed');
    }
    li.appendChild(span);
    todoList.appendChild(li);
  });
}