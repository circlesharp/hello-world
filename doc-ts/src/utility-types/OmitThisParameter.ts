type _OmitThisParameter<Type> = unknown extends ThisParameterType<Type>
  ? T
  : Type extends (...args: infer P) => infer R
  ? (...args: P) => R
  : T;

function toHex233(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex233> = toHex.bind(5);
