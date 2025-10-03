
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
        <button  class="delete-todo-button js-delete-todo-button">Delete</button>
      </div>
    `;

    todoListHTML += html;
  });


  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index , 1);
        renderTodoList();
      });
    });
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

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
