// type _Extract<T, U> = T extends U ? T : never;
type _Extract<T, U> = U extends T ? U : never;

type T111 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;
