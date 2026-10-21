import { Project } from "./project";
import { Todo } from "./todo";

const projects = [];
const baseProject = new Project("All my tasks");
projects.push(baseProject);

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
  return newProject;
}
// addTodo(projectId, title, description, dueDate, priority) → ajoute une Todo et le place dans un projet → todo créé
export function addTodo(projectId, title, description, dueDate, priority) {
  const project = getProject(projectId);
  if (!project) return;

  const newTodo = new Todo(title, description, dueDate, priority);

  project.addTodo(newTodo);

  return newTodo;
}
// deleteProject(id) → récupère un projet dans projects et le supprime (ne pas pas apparaitre sur baseProject) → rien
export function deleteProject(projectId) {
  if (projectId === baseProject.id) return;

  const position = projects.findIndex((project) => project.id === projectId);
  if (position !== -1) {
    projects.splice(position, 1);
  }
}
// deleteTodo(projetId, todoId) → supprime une todo dans un projet → rien
export function deleteTodo(projectId, todoId) {
  const project = getProject(projectId);
  if (!project) return;

  project.removeTodo(todoId);
}
// toggleTodo(projetId, todoId) → inverse la valeur completed d'un todo selectionné dans un projet → renvoi todo
export function toggleTodo(projectId, todoId) {
  const project = getProject(projectId);
  if (!project) return;

  const todo = project.getTodo(todoId);
  if (!todo) return;

  todo.toggleComplete();

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

  return todo;
}
