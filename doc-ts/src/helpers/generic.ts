// ========== part 1 ==========
// generic demo, constrains
function merge<T extends object, U extends object> (a: T, b: U): T & U {
  return Object.assign({}, a, b);
}

const merged = merge(
  {name: 'Tom'},
  {id: 123}
);

// merge({}, 1) // wrong
merged.id = 1 // great

// ========== part 2 ==========
// lengthy
interface Lengthy {
  length: number;
}

function printLength<T extends Lengthy>(obj: T) {
  console.log(obj.length);
}

// ========== part 3 ==========
// keyof
function getProp<T extends object, U extends keyof T> (obj: T, key: U): unknown {
  return obj[key];
}

getProp({name: 1}, 'name'); // ok
// getProp({name: 1}, 'hi') // wrong

// ========== part 4 ==========
// generic class , init and extends
class DataStorage<T> {
  data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }

  getData(idx: number): T {
    return this.data[idx];
  }
}

const numStorage = new DataStorage<number> ();
class StrStorage extends DataStorage<string> {}