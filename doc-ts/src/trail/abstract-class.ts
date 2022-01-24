abstract class AC {
  abstract a0: number;
  abstract a1(): number;
  a2() {
    return 1;
  }
}

class ACImplement extends AC {
  a0 = 1;
  a1() {
    return 1;
  }
}

function createAC(Ctor: new () => AC): AC {
  return new Ctor();
}

createAC(ACImplement); // ok
// createAC(AC); // wrong