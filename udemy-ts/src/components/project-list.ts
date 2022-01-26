import { autoBind } from "../decorators/auto-bind.js";
import { DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { projectState } from "../state/project-state.js";
import { Component } from "./base-component.js";
import { ProjectItem } from "./project-item.js";

export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
  assignedProjects: Array<Project> = [];

  constructor(
    private type: ProjectStatus,
  ) {
    super(
      'project-list',
      'app',
      false,
      (`${type}-projects`).toLowerCase(),
    );

    this.configure();
    this.renderContent();
  }

  configure() {
    // 注册事件, 每当这个全局单例 projectState 有变化, 自动调用
    projectState.addListener((projects: Array<Project>) => {
      const relevantProjects = projects.filter(prj => prj.status === this.type)
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('drop', this.dropHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
  }

  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`;
  }

  @autoBind
  dragOverHandler(event: DragEvent): void {
    // 验证是否合法 (ps. 其实可以更加精准)
    if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault(); // 这么理解: js 的 default 就是禁止 drop
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
    }
  }

  @autoBind
  dropHandler(event: DragEvent): void {
    const prjId = event.dataTransfer!.getData('text/plain');
    projectState.moveProject(prjId, this.type);
  }

  @autoBind
  dragLeaveHandler(event: DragEvent): void {
    const listEl = this.element.querySelector('ul')!;
    listEl.classList.remove('droppable');
  }

  private renderProjects() {
    const listId = `${this.type}-projects-list`;
    const listEl = document.getElementById(listId)! as HTMLUListElement;
    listEl.innerHTML = '';
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(listId, prjItem);
    }
  }
}