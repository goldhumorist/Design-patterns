class ApplicationBuilder {
  createApp() {
    this.readDoc();
    this.chooseTechnologies();
    this.writeCode();
    this.deploy();
  }
}

class WebApplication extends ApplicationBuilder {
  readDoc() {
    console.log("This is a documentation fo web application");
  }
  chooseTechnologies() {
    console.log("Chosen technologies - React.Js + Next.JS");
  }
  writeCode() {
    console.log("Code for web app...");
  }
  deploy() {
    console.log("Deploying web app. \n");
  }
}

class Game extends ApplicationBuilder {
  readDoc() {
    console.log("This is a documentation for game");
  }
  chooseTechnologies() {
    console.log("Chosen technologies - C# + Unity");
  }
  writeCode() {
    console.log("Code for game...");
  }
  deploy() {
    console.log("Add game to google store \n");
  }
}

const webApp = new WebApplication();
const game = new Game();

webApp.createApp();
game.createApp();
