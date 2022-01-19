// ========== part 1 ==========
// Decorator
function Logger(constructor: Function) {
  console.log('I am a decorator, used in:');
  console.log(constructor);
}

@Logger
class Book {
  constructor(public name: string) {

  }
}

// ========== part 2 ==========
// Decorator Factories
function FactoryLogger(adjective: string) {
  return function(constructor: Function) {
    console.log(`I am a ${adjective} decorator, used in:`);
    console.log(constructor);
  }
}

@FactoryLogger('good')
class Book2 {
  constructor(public name: string) {

  }
}

// ========== part 3 ==========
// Property Decorator
function PropertyLog(_: any, propertyName: string | Symbol) {
  console.log(propertyName);
}
// Accessor Decorator
function AccessorLog(_: any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(descriptor);
}

// Function Decorator
function FunctionLog(_:any, propertyName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(descriptor);
}

// Parameter Decorator
function ParameterLog(_: any, methodName: string | Symbol, parameterIdx: number) {
  console.log(methodName, parameterIdx);
}

class Book3 {
  // 写在 property 的上方就是 property decorator
  @PropertyLog
  public title: string;

  // 写在 access 上方就是 accessor decorator
  @AccessorLog
  get bookTitle() {
    return this.title;
  }
  set bookTitle(newTitle: string) {
    this.title = newTitle;
  }

  constructor(title: string) {
    this.title = title;
  }

  @FunctionLog
  validTitle(@ParameterLog title: string) {
    return this.title === title;
  }
}
