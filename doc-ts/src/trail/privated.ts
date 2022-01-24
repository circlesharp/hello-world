class Base {
  private x = 0;
}
class Derived extends Base {
  // private x = 1; // wrong 重写也不行
  // x = 1; // wrong 不允许 increase its visibility
}

class PrivateDog {
  #barkAmount = 0;
  personality = "happy";
  constructor() {
    // ok JavaScript private field
    console.log(this.#barkAmount);
  }
}

const pd = new PrivateDog();
// wrong
// pd.#barkAmount;