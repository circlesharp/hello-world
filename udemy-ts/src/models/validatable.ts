export type Validatable<T extends string | number> = (
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

export type StrValidatable = Validatable<string>;
export type NumValidatable = Validatable<number>;

export function isStringValidatable(validatableInput: StrValidatable | NumValidatable): validatableInput is StrValidatable {
  return typeof validatableInput.value === 'string';
}