class ClientServise {
  login(email) {
    console.log(`${email} - You have successfully logged in`);
  }
}

class ProxyAuthentificator {
  constructor(clientServise) {
    this.clientServise = clientServise;
  }

  login(email, password) {
    if (this.#checkAuth(email, password)) this.clientServise.login(email);
    else console.log(`Invalid data for ${email}`);
  }

  #checkAuth(email, password) {
    return email === "email" && password === "password";
  }
}

const client = new ProxyAuthentificator(new ClientServise());
const client2 = new ProxyAuthentificator(new ClientServise());

client.login("email", "password");
client2.login("email2", "password2");
