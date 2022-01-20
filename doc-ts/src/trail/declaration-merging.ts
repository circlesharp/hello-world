interface I {
  a: string;
}

interface I {
  b: string;
}

let i: I = {
  a: '',
  b: '', 
}

type T = {
  a: string;
}

// wrong
// type T = {
//   b: string;
// }