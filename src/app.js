import { Project } from "./project";
import { Todo } from "./todo";
import { loadProjects, saveProjects } from "./storage.js";

let baseProject;
const projects = [];
const savedProjects = loadProjects();

if (savedProjects) {
  for (const data of savedProjects) {
    const project = restoreProject(data);
    projects.push(project);
  }
  baseProject = projects[0];
} else {
  baseProject = new Project("All my tasks");
  projects.push(baseProject);
}

function restoreProject(data) {
  const project = new Project(data.name);
  project.id = data.id;

  for (const todoData of data.todos) {
    const todo = new Todo(
      todoData.title,
      todoData.description,
      todoData.dueDate,
      todoData.priority,
    );
    todo.id = todoData.id;
    todo.completed = todoData.completed;
    project.addTodo(todo);
  }

  return project;
}
// getProjects() → récuperer la liste des projets → retourne un tableau de projets
export function getProjects() {
  return [...projects];
}
// getProject(id) → récupère un projet dans le tableau de projet → le retourne
export function getProject(id) {
  return projects.find((project) => project.id === id);
}
// addProject(name) → le place dans le tableau → le projet créé
export function addProject(name) {
  if (!name || !name.trim()) return;

  const newProject = new Project(name.trim());
  projects.push(newProject);
  saveProjects(projects);
  return newProject;
}
// addTodo(projectId, title, description, dueDate, priority) → ajoute une Todo et le place dans un projet → todo créé
export function addTodo(projectId, title, description, dueDate, priority) {
  const project = getProject(projectId);
  if (!project) return;

  const newTodo = new Todo(title, description, dueDate, priority);

  project.addTodo(newTodo);
  saveProjects(projects);
  return newTodo;
}
// deleteProject(id) → récupère un projet dans projects et le supprime (ne pas pas apparaitre sur baseProject) → rien
export function deleteProject(projectId) {
  if (projectId === baseProject.id) return;

  const position = projects.findIndex((project) => project.id === projectId);
  if (position !== -1) {
    projects.splice(position, 1);
    saveProjects(projects);
  }
}
// deleteTodo(projetId, todoId) → supprime une todo dans un projet → rien
export function deleteTodo(projectId, todoId) {
  const project = getProject(projectId);
  if (!project) return;

  project.removeTodo(todoId);
  saveProjects(projects);
}
// toggleTodo(projetId, todoId) → inverse la valeur completed d'un todo selectionné dans un projet → renvoi todo
export function toggleTodo(projectId, todoId) {
  const project = getProject(projectId);
  if (!project) return;

  const todo = project.getTodo(todoId);
  if (!todo) return;

  todo.toggleComplete();
  saveProjects(projects);
  return todo;
}
// editTodo(projetId,todoId, title, description, dueDate, priority) → edit todo → renvoie todo
export function editTodo(
  projectId,
  todoId,
  title,
  description,
  dueDate,
  priority,
) {
  const project = getProject(projectId);
  if (!project) return;

  const todo = project.getTodo(todoId);
  if (!todo) return;

  if (title) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (dueDate !== undefined) todo.dueDate = dueDate;
  if (priority) todo.priority = priority;
  saveProjects(projects);
  return todo;
}
