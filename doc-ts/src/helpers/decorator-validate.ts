interface ValidatorConfig {
  [validatableProp: string]: ValidType[];
}

enum ValidType {
  Required,
  Positive,
}

const registeredValidators: WeakMap<Function, ValidatorConfig> = new WeakMap();
function initField(constructor: Function, propName: string, validType: ValidType) { 
  if (!registeredValidators.has(constructor)) {
    registeredValidators.set(constructor, {});
  }
  const validConfig = registeredValidators.get(constructor)!;

  if (!validConfig[propName]) {
    validConfig[propName] = [];
  }

  validConfig[propName].push(validType);
}

function Required(Target: any, propName: string) { 
  initField(Target.constructor, propName, ValidType.Required);
}

function Positive(Target: any, propName: string) {
  initField(Target.constructor, propName, ValidType.Positive);
}

function validate(obj: any): boolean {
  const validConfig = registeredValidators.get(obj.constructor);

  for (const propKey in validConfig) {
    for (const validKey of validConfig[propKey]) {
      switch (validKey) {
        case ValidType.Required:
          if (!obj[propKey]) return false;
          break;
        case ValidType.Positive:
          if(obj[propKey] <= 0) return false;
          break;
        default:
          break;
      }
    }
  }

  return true;
}

class FormData2 {
  @Required name: string;
  @Positive age: number;

  static a = 1;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
}

const fd1 = new FormData2('', 0);
const fd2 = new FormData2('1', 0);
const fd3 = new FormData2('', 1);
const fd4 = new FormData2('1', 1);

console.log(
  validate(fd1),
  validate(fd2),
  validate(fd3),
  validate(fd4),
);
