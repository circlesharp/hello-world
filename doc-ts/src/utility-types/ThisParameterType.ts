type _ThisParameterType<Type> = Type extends (this: infer P) => void
  ? P
  : unknown;

function toHex(this: Number) {
  return this.toString(16);
}

function toHex2() {
  return;
}

type ttt11 = _ThisParameterType<typeof toHex>;
type ttt12 = _ThisParameterType<typeof toHex2>;
