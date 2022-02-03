// type _NonNullable<Type> = Type extends null | undefined ? never : Type;

type _NonNullable<Type> = _Exclude<Type, undefined | null>;

type T01 = NonNullable<string | number | undefined>;
type T1 = NonNullable<string[] | null | undefined>;
