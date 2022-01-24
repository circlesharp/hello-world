// =================== example 1 ===================
class AA {
  c() {
    this.a(); // ok
  }

  protected a(){};
}

class BB extends AA {
  b() {
    this.a(); // ok
  }
}

// new AA().a(); // wrong
// new BB().a(); // wrong
new BB().b(); // ok


// =================== example 2 ===================

class Ungulate {
  protected eat() {};
}

class Zebra extends Ungulate {
  protected eat() {};
}

class Giraffe extends Ungulate {
  static feedThem() {
    const g1: Giraffe = new Giraffe();
    //  it’s illegal to access a protected member through a base class reference
    const g2: Ungulate = new Giraffe();
    const u1: Ungulate = new Ungulate();
    const z1: Ungulate = new Zebra();
    g1.eat(); // ok
    // g2.eat(); // wrong
    // u1.eat(); // wrong
    // z1.eat(); // wrong
  }
  test() {
    this.eat();
  }
}

const g1: Giraffe = new Giraffe();
// g1.eat(); // wrong