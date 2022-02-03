// type _Omit<Type, Keys extends keyof any> = {
//   [Property in _Exclude<keyof Type, Keys>]: Type[Property];
// };

type _Omit<Type, Keys extends keyof any> = _Pick<
  Type,
  _Exclude<keyof Type, Keys>
>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = _Omit<Todo, 'description'>;
