// ========== template literal type: example 1 ==========

type ObjectWithOn<T> = {
  on<K extends string & keyof T>(event: `${K}Changed`, callback: (val: T[K]) => void): void;
} & T;

declare function makeWatchedObject<T>(baseObject: T): ObjectWithOn<T>;

const person = {
  name: 'tom',
  age: 12,
}

const personWithOn = makeWatchedObject(person);

personWithOn.on('ageChanged', val => {
  // val is number
  val.toFixed(2);
});

personWithOn.on('nameChanged', val => {
  // val is str
  val.toLowerCase();
});


// ========== template literal type: Intrinsic String Manipulation Types ==========

type _HttpMethod = 'get' | 'post';
type HttpMethod = Uppercase<_HttpMethod> | Lowercase<_HttpMethod> | Capitalize<_HttpMethod>;

let httpMethod: HttpMethod = 'GET';