
const todoList = [
  {
    name: '',
    dueDate: ''
  },
  {
    name: '',
    dueDate: ''
  }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];

    const html = `
      <div class="todo-grid">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
      </div>
    `;

    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  if (name !== '') {
    todoList.push({
      name,
      dueDate
    });

    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
  }
}
