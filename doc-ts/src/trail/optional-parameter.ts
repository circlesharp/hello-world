function opt1(s?: string) {
  return s;
}

function opt2(s: string | undefined) {
  return s;
}

opt1();

// wrong: 即使 ? 意味该参数为 undefined, 但 undefined 不代表不传
// opt2();
