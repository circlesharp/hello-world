import { Project, ProjectStatus } from "../models/project";

abstract class State<T> {
  protected listeners: Array<Listener<T>> = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

export type Listener<T> = (items: Array<T>) => void;

export class ProjectState extends State<Project> {
  private projects: Array<Project> = [];
  private static instance: ProjectState;

  // singleton
  private constructor() {
    super();
  }

  static getInstance() {
    if (!ProjectState.instance) {
      ProjectState.instance = new ProjectState();
    }

    return ProjectState.instance;
  }

  addProject(title: string, description: string, numOfPeople: number) {
    this.projects.push(new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.ACTIVE,
    ));

    this.updateListers();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find(prj => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
    }

    this.updateListers();
  }

  private updateListers() {
    for (const listenerFn of this.listeners) {
      listenerFn([...this.projects]);
    }
  }
}

export const projectState = ProjectState.getInstance();
