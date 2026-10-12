export class Todo {
  constructor(title, description, categorie, dueDate, priority) {
    this.id = randomUUID();
    this.title = title;
    this.description = description;
    this.categorie = categorie;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }
}
