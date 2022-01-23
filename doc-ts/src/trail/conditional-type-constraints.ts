// Conditional Type Constraints: 就是条件带了 extends
type MessageOf<T> = T extends {message: unknown}
  ? T['message']
  : never;

// Conditional Type Constraints: example 2
type Flatten<T> = T extends Array<unknown>
  ? T[number] // 数组的元素的类型
  : T;

// Inferring Within Conditional Types: 多使用了一个泛型, 但不是作为类型参数
type Flatten2<T> = T extends Array<infer U>
  ? U
  : T;

// Inferring Within Conditional Types: example 2
type GetReturnType<F> = F extends () => infer R
  ? R
  : never;

// Distributive Conditional Types
type StrOrNumArr = Array<string | number>; // (string | number)[]

type ToArr<T> = T extends any ? Array<T> : never;
type StrOrNumToArr = ToArr<string | number>; // Array<string> | Array<number>

type ToArr2<T> = [T] extends [any] ? Array<T> : never;
type StrOrNumToArr2 = ToArr2<string | number>; // (string | number)[]