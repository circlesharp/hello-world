type _Partial<Type> = {
  [property in keyof Type]?: Type[property];
};

// test
interface Alpha {
  a: string;
  b: number;
  c: () => void;
}

type PartialAlpha = Partial<Alpha>;
type _PartialAlpha = _Partial<Alpha>;
