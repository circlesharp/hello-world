function A() {
  console.log(new.target);
}

A();
new A();