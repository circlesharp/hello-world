require('reflect-metadata');
const { Min, Max, Length, validate } = require('class-validator');
const { plainToClass } = require('class-transformer');

class Product {
  @Length(1, 5)
  name: string;

  @Min(0)
  @Max(10)
  price: number;

  constructor(n: string, p: number) {
    this.name = n;
    this.price = p;
  }

  yield() {
    console.log(this.name, this.price);
  }
}

const fetchedProducts = [
  {name: 'a', price: 1},
  {name: 'b testMoreThan5', price: 1},
  {name: 'c', price: 11},
  {name: 'd testMoreThan5', price: 21},
];

const products: Array<Product> = fetchedProducts.map(prod => plainToClass(Product, prod));

for (const prod of products) {
  validate(prod).then((errors: Array<any>) => {
    if (errors.length === 0) {
      prod.yield();
    } else {
      console.log(prod.name, errors.map(e => e.constraints));
    }
  });
}
