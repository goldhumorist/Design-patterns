class Store {
  constructor() {
    this.subscribers = [];
  }

  subscribe(observer) {
    if (!this.subscribers.includes(observer)) this.subscribers.push(observer);
    else console.log("Observer has been subscribed already");
  }
  unSubscribe(observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  notify(action) {
    this.subscribers.forEach((subscriber) => subscriber.update(action));
  }
}

class Subscriber {
  constructor(state) {
    this.state = state;
    this.initialState = state;
  }

  update(action) {
    switch (action.type) {
      case "INCREMENT":
        this.state = ++this.state;
        break;
      case "DECREMENT":
        this.state = --this.state;
        break;
      default:
        this.state = this.initialState;
    }
  }
}

const steam = new Store();

const subscriber1 = new Subscriber(1);
const subscriber2 = new Subscriber(42);

steam.subscribe(subscriber1);
steam.subscribe(subscriber2);

console.log("subscriber1.state", subscriber1.state); // 1
console.log("subscriber2.state", subscriber2.state); // 42

steam.notify({ type: "INCREMENT" });

console.log("subscriber1.state", subscriber1.state); // 2
console.log("subscriber2.state", subscriber2.state); // 43
