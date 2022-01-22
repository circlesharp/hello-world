interface Bird2 {
  name: string;
  fly: any;
}

interface Dog2 {
  name: string;
  bark: any;
}

type II = Bird2 & Dog2;
type UU = Bird2 | Dog2;

// intersection type
const uu: II = {
  name: '',
  fly: 1,
  bark: 1,
}

// union type
const i1: UU = {
  name: '',
  fly: 1,
}

const i2: UU = {
  name: '',
  bark: 1,
}

const i3: UU = {
  name: '',
  bark: 1,
  fly: 1,
}