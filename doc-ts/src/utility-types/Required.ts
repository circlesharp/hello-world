type _Required<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

// test
interface Alpha2 {
  a?: string;
  b?: number;
  c?: () => void;
}

type RequiredAlpha = _Required<Alpha>;

const requiredAlpha: RequiredAlpha = {
  a: '',
  b: 1,
  c: () => 1,
};
