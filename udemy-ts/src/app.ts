type Validatable<T extends string | number> = (
  T extends string
  ? {
    minLength?: number;
    maxLength?: number;
  }
  : {
    min?: number;
    max?: number;
  }
) & {
  value: T;
  required?: boolean;
}

type StrValidatable = Validatable<string>;
type NumValidatable = Validatable<number>;

function isStringValidatable(validatableInput: StrValidatable | NumValidatable): validatableInput is StrValidatable {
  return typeof validatableInput.value === 'string';
}

interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

interface DragTarget {
  dragOverHandler(event: DragEvent): void;
  dropHandler(event: DragEvent): void;
  dragLeaveHandler(event: DragEvent): void;
}

function validate(validatableInput: StrValidatable | NumValidatable): boolean {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length > 0;
  }
  if (isStringValidatable(validatableInput)) {
    if (validatableInput.minLength != null) {
      isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null) {
      isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
  } else {
    if (validatableInput.min != null) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (validatableInput.max != null) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }
  }

  return isValid;
}

function autoBind(_: any, __: string, descriptor: PropertyDescriptor) {
  const newDescriptor: PropertyDescriptor = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    get() {
      return descriptor.value.bind(this);
    },
  }

  return newDescriptor;
}

enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

type Listener<T> = (items: Array<T>) => void;

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus,
  ) { }
}

abstract class State<T> {
  protected listeners: Array<Listener<T>> = [];

  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}


class ProjectState extends State<Project> {
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

// singleton
const projectState = ProjectState.getInstance();

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string,
  ) {
    this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as U;
    if (newElementId != null) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(insertAtStart ? 'beforebegin' : 'beforeend', this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
  private project: Project;

  get persons(): string {
    if (this.project.people === 1) {
      return '1 person';
    } else {
      return `${this.project.people} persons`;
    }
  }

  constructor(hostId: string, project: Project) {
    super(
      'single-project',
      hostId,
      false,
      project.id,
    );

    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure(): void {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = `${this.persons} assigned`;
    this.element.querySelector('p')!.textContent = this.project.description;
  }

  @autoBind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData('text/plain', this.project.id);
    event.dataTransfer!.effectAllowed = 'move';
  }

  @autoBind
  dragEndHandler(event: DragEvent): void {

  }
}

class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
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

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement!: HTMLInputElement;
  descriptionInputElement!: HTMLInputElement;
  peopleInputElement!: HTMLInputElement;

  constructor() {
    super(
      'project-input',
      'app',
      true,
      'user-input',
    );

    this.configure();
    this.renderContent();
  }

  configure() {
    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {
    this.titleInputElement.value = 'test_title';
    this.descriptionInputElement.value = 'test_description';
    this.peopleInputElement.value = '4';
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;

      // 改变全局单例 projectState 的状态
      projectState.addProject(title, desc, people);
      // this.clearInputs();
    }
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: StrValidatable = {
      value: enteredTitle,
      required: true,
    }
    const descriptionValidatable: StrValidatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    }
    const peopleValidatable: NumValidatable = {
      value: Number(enteredPeople),
      required: true,
      min: 1,
      max: 5,
    }

    if (
      validate(titleValidatable) &&
      validate(descriptionValidatable) &&
      validate(peopleValidatable)
    ) {
      return [enteredTitle, enteredDescription, Number(enteredPeople)];
    } else {
      alert('Invalid input');
      return;
    }
  }

  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList(ProjectStatus.ACTIVE);
const finishedPrjList = new ProjectList(ProjectStatus.FINISHED);
