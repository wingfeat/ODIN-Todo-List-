export class Project {
  constructor(name) {
    this.name = name;
    this.todos = [];
    this.id = crypto.randomUUID();
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
  removeTodo(id) {
    const position = this.todos.findIndex((todo) => todo.id === id);
    if (position !== -1) {
      this.todos.splice(position, 1);
    }
  }
  getTodo(id) {
    return this.todos.find((todo) => todo.id === id);
  }
}
