type _InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

class C {
  x = 0;
  y = 0;
}

type T0a = _InstanceType<typeof C>;

type T1a = _InstanceType<any>;

type T2a = _InstanceType<never>;
