class StateBlockClass {
  public pu = 99;
  private p1 = 1;
  #p2 = 2;
  static #p3 = 3;
  static s1 = 4;

  static {
    StateBlockClass.s1 += StateBlockClass.#p3;
  }
}

console.log(StateBlockClass.s1);
