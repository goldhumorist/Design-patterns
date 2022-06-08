class Singleton {
  static #instance; //  static private field for more safety Singeltone instance
  constructor() {
    if (Singleton.#instance) return Singleton.#instance;

    Singleton.#instance = this;
  }

  static getInstance() {
    return new Singleton();
  }
}

console.log("Singeltone is working: ", new Singleton() === new Singleton());
console.log(
  "Singeltone getInstance is working: ",
  Singleton.getInstance() === Singleton.getInstance()
);
