interface Nameable {
  name: string;
}

// 可构造, 且返回 T 类型的实例
export interface Constructable<T> {
  new(...args: Array<any>): T;
}

function Component(selector: string) {
  return function<T extends Constructable<Nameable>>(Target: T) {
    // 装饰器返回了一个新的类, 并且改写了它的构造函数
    return class extends Target {
      constructor(...args: Array<any>) {
        super(...args);
        this.name = '12';
        console.log(`You are init a component, selector: ${selector}, name: ${this.name}.`);
      }

      sayHi() {
        console.log('Greeting from decorator.');
      }
    }
  }
}

function Emit() {
  return function(_: any, name: string, descriptor: PropertyDescriptor) {
    const originValue = descriptor.value;
    descriptor.value = function() {
      originValue();
      console.log('modified onEvent (no return).');
    }
  }
  // return function(_: any, name: string, descriptor: PropertyDescriptor): PropertyDescriptor {
  //   return {
  //     ...descriptor,
  //     value() {
  //       descriptor.value();
  //       console.log('modified onEvent (has return).');
  //     },
  //   }
  // }
}

@Component('my-slider')
class Slider {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @Emit()
  public onEvent() {
    console.log('original onEvent.');
  }
}

const slider = new Slider('mySlider');
(slider as any).sayHi();
slider.onEvent();