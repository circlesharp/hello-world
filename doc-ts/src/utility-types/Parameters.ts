type _Parameters<Type extends (...args: any) => void> = Type extends (
  ...args: infer P
) => void
  ? P
  : never;

type T222 = _Parameters<(a: string, b: number) => string>;
