type _Pick<Type, Keys extends keyof Type> = {
  [Property in Keys]: Type[Property];
};
