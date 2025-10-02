
const todoList = [];

//
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-grid">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${index}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
      </div>
    `;

    todoListHTML += html;
  });
  

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

if (name !== '' && dueDate !== '') {
  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}

}
