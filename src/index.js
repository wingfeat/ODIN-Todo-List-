import "./styles.css";
import "./template.html";
import * as app from "./app";
import {
  setupProjectForm,
  setupTodoForm,
  renderProjectOptions,
  render,
} from "./dom.js";

window.app = app;

setupProjectForm();
renderProjectOptions();
setupTodoForm();
render();
