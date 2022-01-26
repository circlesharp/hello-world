import { autoBind } from "../decorators/auto-bind";
import { StrValidatable, NumValidatable } from "../models/validatable";
import { projectState } from "../state/project-state";
import { validate } from "../utils/validation";
import { Component } from "./base-component";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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