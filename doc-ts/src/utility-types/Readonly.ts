type _Readonly<Type> = {
  readonly [Property in keyof Type]: Type[Property];
};

interface Alpha3 {
  a?: string;
  b: number;
  c?: () => void;
}

type _ReadonlyAlpha = _Readonly<Alpha>;
type ReadonlyAlpha = Readonly<Alpha>;
