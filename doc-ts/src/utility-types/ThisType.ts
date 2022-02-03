// interface _ThisType<Type> {}
interface _ThisType<T> {}

type NumLog = _ThisType<{ a: number }>;
// type NumLog = ThisType<{ a: number }>;

const numLog: NumLog = {
  log() {
    this.a = 1;
  },
};
