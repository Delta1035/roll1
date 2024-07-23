'use strict';

class RefImpl {
  value = 0;

  get value() {
    return this.value;
  }

  set value(value) {
    this.value = value;
  }
}

console.log("hello");

const a = new RefImpl();

console.log(a.value);
