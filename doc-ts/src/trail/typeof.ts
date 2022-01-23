// typeof 用在基本类型上
// const str = 'a'; // 用了 const 就是字面量类型
let str = 'a';
type S = typeof str;

let sss: S = '111';

function func() {
  return 1;
}

// typeof 用在复杂类型上
type V2N = typeof func; // () => number
let arr: Array<V2N> = [];

arr.push(func); // ok
arr.push(() => 2); // ok
// arr.push(() => 'a'); // wrong