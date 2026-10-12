import { Todo } from "./classes.js";

const allTodos = document.createElement("div");
const todosCategorie = document.createElement("div");
todosCategorie.classList.add("categorie-container");
const title = document.querySelector("h1");
const content = document.querySelector(".content");

title.textContent = "Your Todo List";
allTodos.textContent = "Toutes mes tâches";

for (let i = 0; i < Todo.length; i++) {
  todosCategorie.innerHTML += `<div>
  <p>test</p></div>`;
}

content.appendChild(allTodos);
content.appendChild(todosCategorie);
