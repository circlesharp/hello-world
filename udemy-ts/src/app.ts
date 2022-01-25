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

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    const importedNode: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputElement = this.element.querySelector('#title')! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector('#description')! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector('#people')! as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs();
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
