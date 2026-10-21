const projetsKey = "todo-list-projects";

export function saveProjects(projects) {
  localStorage.setItem(projetsKey, JSON.stringify(projects));
}

export function loadProjects() {
  const text = localStorage.getItem(projetsKey);

  if (!text) return;

  return JSON.parse(text);
}
