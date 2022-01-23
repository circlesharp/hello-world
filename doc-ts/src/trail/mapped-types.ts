// ============= example 1 =============
type OptionsFlags<T> = {
  [P in keyof T]: boolean;
}

const people = {
  name: 'tom',
  age: 2,
}

/**
 * 结合了 mapped type 和 typeof 关键词
 */
type OptionsFlagOfPeople = OptionsFlags<typeof people>;


// ============= example 2 =============
type CreateMutableAndOptional<T> = {
  -readonly [P in keyof T]+?: T[P];
}

interface ImmutablePeople {
  readonly id: string;
  readonly age: number;
}

/**
 * 通过 +, - 来修改 modifier readonly, ?
 */
type MutableAndOptionalPeople = CreateMutableAndOptional<ImmutablePeople>;


// ============= example 3 =============
type Getters<T> = {
  -readonly [P in keyof T as `get${Capitalize<P & string>}`]: () => T[P];
}

type PeopleGetter = Getters<typeof people>;


// ============= example 3 =============
type RemoveStringProp<T> = {
  [P in keyof T as T[P] extends string ? never : P]: T[P];
}

/**
 * 去掉属性值类型为 string 的属性
 */
type PeopleWithoutStringProp = RemoveStringProp<typeof people>;


// ============= example 4 =============
type EventConfig<Events extends {kind: string}> = {
  [E in Events as Events["kind"]]: (event: E) => void;
}

type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>


// ============= example 5 =============
type ExtractStr<T> = {
  [P in keyof T]: T[P] extends string ? true : false;
}

type PeopleExtractStr = ExtractStr<typeof people>;