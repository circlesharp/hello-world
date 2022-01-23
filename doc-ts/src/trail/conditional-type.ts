class IdLabel {
  id: number = 1; /* some fields */;
}
class NameLabel {
  name: string = '1'; /* other fields */;
}

type IdOrName<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

// 糟糕, ts 好像没法 infer
function createLabel<T extends number | string>(idOrName: T): IdOrName<T> {
  if (typeof idOrName === 'number') {
    return new IdLabel() as IdOrName<T>;
  }

  return new NameLabel() as IdOrName<T>;
}

// ok: IdLabel
createLabel(11);

// ok: NameLabel
createLabel('11');
