import "./styles.css";
import "./template.html";
import { Todo } from "./todo";
import { Project } from "./project";

const newTodo = new Todo("Titre", "description", "due date", "high");
const newProject = new Project("Sport");

newProject.addTodo(newTodo);
console.log(newProject.getTodo(newTodo.id));
console.log(newTodo.toggleComplete());
console.log(newTodo.completed);
console.log(newProject.removeTodo(1));
console.log(newProject.todos);
