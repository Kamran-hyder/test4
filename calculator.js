// Simple Calculator
class Calculator {
  // Addition
  add(a, b) {
    return a + b;
  }

  // Subtraction
  subtract(a, b) {
    return a - b;
  }

  // Multiplication
  multiply(a, b) {
    return a * b;
  }

  // Division
  divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }

  // Modulo (Remainder)
  modulo(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a % b;
  }

  // Power
  power(a, b) {
    return Math.pow(a, b);
  }

  // Square Root
  squareRoot(a) {
    if (a < 0) {
      return "Error: Cannot calculate square root of negative number";
    }
    return Math.sqrt(a);
  }
}

// Export for use in other modules (Node.js)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculator;
}

// Example usage:
/*
const calc = new Calculator();
console.log(calc.add(10, 5));        // 15
console.log(calc.subtract(10, 5));   // 5
console.log(calc.multiply(10, 5));   // 50
console.log(calc.divide(10, 5));     // 2
console.log(calc.modulo(10, 3));     // 1
console.log(calc.power(2, 8));       // 256
console.log(calc.squareRoot(16));    // 4
*/
