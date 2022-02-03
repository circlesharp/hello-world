// abstract 的作用是允许抽象类作为类型参数
type _ConstructorParameters<Type extends abstract new (...args: any) => any> =
  Type extends abstract new (...args: infer P) => any ? P : never;

class AAA {
  constructor() {}
}

abstract class AAB {
  constructor() {}
}

type AAAConArg = _ConstructorParameters<ErrorConstructor>;
type AAbConArg = _ConstructorParameters<typeof AAB>;
// type AAAConArg = ConstructorParameters<typeof AAA>;
