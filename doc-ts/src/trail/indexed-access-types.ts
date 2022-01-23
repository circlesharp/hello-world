type Indexed = {
  age: number;
  name: string;
  alive: boolean
};

// type Str = string
type Str = Indexed['name'];

