import "./styles.css";
import "./template.html";
import * as app from "./app";
import {
  renderProjects,
  setupProjectForm,
  setupTodoForm,
  renderProjectOptions,
} from "./dom.js";

window.app = app;

renderProjects();
setupProjectForm();
renderProjectOptions();
setupTodoForm();
