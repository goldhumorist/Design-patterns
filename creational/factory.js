class Boad {
  constructor(brand, fullTransportName) {
    this.brand = brand;
    this.type = "water";
  }
}
class Car {
  constructor(brand, fullTransportName) {
    this.brand = brand;
    this.type = "earth";
  }
}
class UnknownTypeTransport {
  constructor(brand) {
    this.brand = brand;
    this.type = "unknown";
  }
}

class TransportFactory {
  static list = {
    water: Boad,
    earth: Car,
    unknown: UnknownTypeTransport,
  };

  createTransport(type, brand, fullTransportName) {
    const TransportType =
      TransportFactory.list[type] || TransportFactory.list.unknown;

    const transport = new TransportType(brand);

    // transport.type = type;

    transport.showDetails = function () {
      console.log(
        `This is ${this.type.toUpperCase()} transport, Brand - ${
          this.brand
        }, model - ${fullTransportName}`
      );
    };
    return transport;
  }
}

const factory = new TransportFactory();

const boadAquaComp = factory.createTransport("water", "aquaComp", "boar x144W");
const BMW = factory.createTransport("earth", "BMW", "car bmw x5");
const unknown = factory.createTransport(
  "bla-bla",
  "Brand",
  "full transport name"
);

boadAquaComp.showDetails();
BMW.showDetails();
unknown.showDetails();
