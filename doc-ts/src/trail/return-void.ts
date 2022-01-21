(function(): void {
  // ok
  return undefined;
})

// (function(): undefined {
//   // wrong!
//   // 因为没有显式返回 undefined
// })

type voidFunc = () => void;

const vo: voidFunc = function() {
  return true;
}

const voRst = vo();
