let a: string;

// wrong, when strictNullChecks on
// console.log(a);

// ok Non-null Assertion Operator
console.log(a!);

const f = Symbol('')
const s = Symbol('')
if (s === f) {
  console.log(1);
}