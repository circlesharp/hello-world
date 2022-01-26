export function autoBind(_: any, __: string, descriptor: PropertyDescriptor) {
  const newDescriptor: PropertyDescriptor = {
    configurable: descriptor.configurable,
    enumerable: descriptor.enumerable,
    get() {
      return descriptor.value.bind(this);
    },
  }

  return newDescriptor;
}
