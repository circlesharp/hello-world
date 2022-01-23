// 编写构造函数的 interface
interface ConFn<T> {
  new (...args: Array<any>): T;
}
function create<T> (Con: ConFn<T>, ...args: Array<any>): T {
  return new Con(...args);
}

create<Date>(Date);
