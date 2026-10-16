import { getProjects, addProject, addTodo, getProject } from "./app";

let currentProjectId = null;
const content = document.querySelector(".content");
const titleContainer = document.querySelector(".title");

export function renderProjects() {
  content.replaceChildren();
  titleContainer.replaceChildren();
  const h1 = document.createElement("h1");
  h1.textContent = "Your Todo List!";
  titleContainer.appendChild(h1);

  content.appendChild(titleContainer);

  const projects = getProjects();

  for (const project of projects) {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");
    projectCard.dataset.id = project.id;
    projectCard.textContent = project.name;

    const taskNumber = document.createElement("span");
    taskNumber.classList.add("tasksNumber");
    taskNumber.textContent = project.todos.length;

    projectCard.prepend(taskNumber);
    content.appendChild(projectCard);

    projectCard.addEventListener("click", () => {
      currentProjectId = projectCard.dataset.id;
      render();
    });
  }
}

export function setupProjectForm() {
  const form = document.getElementById("addProject");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dialog = document.getElementById("my-dialog");
    const projectInput = document.getElementById("projectInput");

    addProject(projectInput.value);
    renderProjectOptions();
    renderProjects();

    form.reset();
    dialog.close();
  });
}

export function renderProjectOptions() {
  const select = document.getElementById("todoProject");

  select.replaceChildren();
  const projects = getProjects();

  for (const project of projects) {
    const option = document.createElement("option");

    option.textContent = project.name;
    option.value = project.id;

    select.appendChild(option);
  }
}

export function setupTodoForm() {
  const form = document.getElementById("todoForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("todoTitle").value;
    const description = document.getElementById("todoDescription").value;
    const dueDate = document.getElementById("todoDueDate").value;
    const priority = document.getElementById("todoPriority").value;
    const dialog = document.getElementById("todo-dialog");

    const projectId = document.getElementById("todoProject").value;

    addTodo(projectId, title, description, dueDate, priority);

    renderProjects();

    form.reset();
    dialog.close();
  });
}

export function renderTodos(projectId) {
  content.replaceChildren();
  titleContainer.replaceChildren();
  console.log(currentProjectId);

  const project = getProject(currentProjectId);
  console.log(project.todos);

  const titleTodos = document.createElement("button");
  titleTodos.classList.add("btnTitle");
  titleTodos.textContent = "← " + project.name;
  titleContainer.appendChild(titleTodos);
  content.appendChild(titleContainer);

  titleTodos.addEventListener("click", () => {
    currentProjectId = null;
    render();
  });

  const taskCard = document.createElement("div");
  taskCard.classList.add("taskCard");

  if (project.todos.length === 0) {
    taskCard.textContent = "Nothing here!";
    content.appendChild(taskCard);
    return;
  }

  for (const todo of project.todos) {
    const taskCard = document.createElement("div");
    taskCard.classList.add("taskCard");
    taskCard.textContent = todo.title;
    taskCard.dataset.id = todo.id;
    content.appendChild(taskCard);
  }
}

export function render() {
  if (currentProjectId) {
    renderTodos(currentProjectId);
  } else {
    renderProjects();
  }
}
