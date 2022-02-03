type _Exclude<UnionType, ExcludedMembers> = UnionType extends ExcludedMembers
  ? never
  : UnionType;

type T0 = _Exclude<'a' | 'b' | 'c', 'a' | 'c'>;
