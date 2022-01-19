import { Constructable } from "./decorator-return";

// 失败的例子
function _AutoBind<T extends Constructable<any>>(Target: T) {
  return class extends Target {
    constructor(...args: Array<any>) {
      super(...args);
      // ! NOTE: ES6 的 prototype 的元素不可枚举
      // 不要尝试通过遍历去改变 this
    }
  }
}

function AutoBind(_:any, __: string | Symbol, descriptor: PropertyDescriptor): PropertyDescriptor {
  return {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    get() {
      // who call get(), who is this
      return descriptor.value.bind(this);
    },
  }
}

@_AutoBind
class Printer {
  message = 'This message.';

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

setTimeout(new Printer().showMessage, 0);