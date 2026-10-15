import { getProjects, addProject } from "./app";

let currentProjectId = null;
const content = document.querySelector(".content");
const title = document.querySelector(".title");
const h1 = document.createElement("h1");
h1.textContent = "Your Todo List!";
title.appendChild(h1);

export function renderProjects() {
  content.replaceChildren();

  content.appendChild(title);

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
  }
}

export function setupProjectForm() {
  const form = document.getElementById("addProject");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dialog = document.getElementById("my-dialog");
    const projectInput = document.getElementById("projectInput");

    addProject(projectInput.value);
    renderProjects();

    form.reset();
    dialog.close();
  });
}
