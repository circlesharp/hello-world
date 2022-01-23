type K1 = {
  [n: number]: any;
}

type K2 = {
  [n: string]: any;
}

type K3 = {
  a: number;
  [n: number]: Function; // 这个值是什么类型不重要了
}

// KK1 = number
type KK1 = keyof K1;

// KK2 = string | number
type KK2 = keyof K2;

// KK3 = 'a' | number
type KK3 = keyof K3;

let k31: KK3 = 'a'; // ok
let k32: KK3 = 1234; // ok
// let k33: KK3 = 'ab'; // wrong