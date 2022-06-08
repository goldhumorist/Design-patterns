class Iterator {
  constructor(elements) {
    this.index = 0;
    this.elements = elements;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const items = new Iterator(["Iphone", "Samsung", "Nokia", "Xiaomi"]);

while (items.hasNext()) {
  console.log(items.next());
}
