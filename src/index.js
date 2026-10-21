import "./styles.css";
import "./template.html";
import {
  setupProjectForm,
  setupTodoForm,
  renderProjectOptions,
  render,
  setupTodoDetails,
} from "./dom.js";

setupProjectForm();
renderProjectOptions();
setupTodoForm();
setupTodoDetails();
render();
