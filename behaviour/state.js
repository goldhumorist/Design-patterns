class PlayerStatus {
  constructor(nameOfStatus, nextStatus) {
    this.nameOfStatus = nameOfStatus;
    this.nextStatus = nextStatus;
  }

  changeStatus() {
    return new this.nextStatus();
  }
}

class WaitingState extends PlayerStatus {
  constructor() {
    super("Waiting for game...", ReadyState);
  }
}

class ReadyState extends PlayerStatus {
  constructor() {
    super("Running start...", PlayingState);
  }
}
class PlayingState extends PlayerStatus {
  constructor() {
    super("Player is playing...", ChillState);
  }
}
class ChillState extends PlayerStatus {
  constructor() {
    super("Player is chilling...", WaitingState);
  }
}

class Player {
  constructor() {
    this.state = new WaitingState();
  }
  changeStatus() {
    this.state = this.state.changeStatus();
  }
}

const player = new Player();

console.log(player.state.nameOfStatus);

player.changeStatus();
console.log(player.state.nameOfStatus);

player.changeStatus();
console.log(player.state.nameOfStatus);

player.changeStatus();
console.log(player.state.nameOfStatus);

player.changeStatus();
console.log(player.state.nameOfStatus);
