class BeeKeeper {
  hasMask: boolean = true;
}
 
class ZooKeeper {
  nameTag: string = 'Tom';
}
 
class Animal {
  numLegs: number = 4;
}

class Bee extends Animal {
  keeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper = new ZooKeeper();
}

// note: T 被类约束, 构造函数签名的返回值是 T, 这时候构造函数成了实例的类型, 不是构造函数本身了
function createAnimals<T extends Animal>(Con: new () => T): T {
  return new Con();
}