class Calculator {
  // work only with integers
  add(num1, num2) {
    return num1 + num2 || new Error("incorrect type of params");
  }
}

class CalculatorUI {
  add(num1, num2) {
    return new CalculatorUIAdapter(num1, num2).add();
  }
}

class CalculatorUIAdapter {
  // convert doubles numbers to Integers
  add(num1, num2) {
    return new Calculator().add(
      this.convertToInt(num1),
      this.convertToInt(num2)
    );
  }

  convertToInt(num) {
    return Math.floor(num);
  }
}

const clientCalculator = new CalculatorUIAdapter();
console.log(clientCalculator.add(41.3, 1.2));
