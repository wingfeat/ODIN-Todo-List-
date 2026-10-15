import "./styles.css";
import "./template.html";
import * as app from "./app";
import { renderProjects } from "./dom.js";

window.app = app;

renderProjects();
