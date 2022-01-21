function overLoad(s: string): string
function overLoad(s: number): number
function overLoad(s: number | string) {
  return s;
}

// wrong 因为两个 overload signature 都不支持 number | string 这个 union type
// overLoad(Math.random() > 0.5 ? '' : 1)

// ok
Math.random() > 0.5
  ? overLoad('')
  : overLoad(1)
