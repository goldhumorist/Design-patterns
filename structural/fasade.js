class Kitchen {
  getWater() {
    console.log("Water is here!");
  }
  getVegetables() {
    console.log("Vegetables are here!");
  }
  getMeat() {
    console.log("Meat is here!");
  }

  cutVegetables() {
    console.log("Vegetables was cut!");
  }

  giveDish() {
    console.log("Dish is on the plate!");
  }
}

class KitchenFasade {
  constructor(kitchen) {
    this.kitchen = kitchen;
  }

  makeSalad() {
    this.kitchen.getVegetables();
    this.kitchen.cutVegetables();
    this.kitchen.giveDish();
    console.log("Salad maked!");
  }
}

const kitchenFasade = new KitchenFasade(new Kitchen());

kitchenFasade.makeSalad();
