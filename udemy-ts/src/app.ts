import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
import { ProjectStatus } from "./models/project.js";

new ProjectInput();
new ProjectList(ProjectStatus.ACTIVE);
new ProjectList(ProjectStatus.FINISHED);
