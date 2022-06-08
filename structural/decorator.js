class Notifier {
  notifyMessangers = ["Gmail"];

  constructor(nameOfReciver, message) {
    (this.nameOfReciver = nameOfReciver), (this.message = message);
  }

  getInfo() {
    return `Message ${this.message}; to ${
      this.nameOfReciver
    }, by ${this.notifyMessangers.join()}`;
  }
}

class FacebookNotifierDecorator {
  constructor(notifier) {
    notifier.notifyMessangers.push("Facebook");
    return notifier;
  }
}
class SlackNotifierDecorator {
  constructor(notifier) {
    notifier.notifyMessangers.push("Slack");
    return notifier;
  }
}

const notifier = new Notifier("sasha", "test message");
console.log(notifier.getInfo());

const facebookNotifier = new FacebookNotifierDecorator(notifier);
console.log(facebookNotifier.getInfo());

const slackNotifier = new SlackNotifierDecorator(facebookNotifier);
console.log(slackNotifier.getInfo());

const justFacebookNotifier = new FacebookNotifierDecorator(
  new Notifier("John", "Hello, John")
);

console.log(justFacebookNotifier.getInfo());
