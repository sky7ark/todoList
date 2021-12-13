const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  let todoText = input.value; //input the value and store it in todoText
  if (todo) {
    todoText = todo.text; // if todo exists then store it in todoText
  }

  if (todoText) {
    const todoEl = document.createElement("li"); // create 'li' element
    // if (todo && todo.completed) {
    //   todoEl.classList.add("completed");
    // }
    todoEl.innerText = todoText;
    todoEl.addEventListener("click", () =>
      todoEl.classList.toggle("completed")
    );
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
    });

    todoUL.appendChild(todoEl);
    input.value = "";
  }
}
