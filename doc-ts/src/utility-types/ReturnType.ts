type _ReturnType<Type extends (...args: any) => any> = Type extends (
  ...args: any
) => infer R
  ? R
  : any;

type T333 = ReturnType<(s: string) => number | string>;
