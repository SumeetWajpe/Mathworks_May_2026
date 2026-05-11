var MathModule = (function () {
  function Add(x, y) {
    return x + y;
  }

  function Subtract() {}

  function Multiply(x, y) {
    return x * y;
    // Subtract();
    // Divide();
  }

  function Divide() {}

  return {
    Addition: Add,
    Product: Multiply,
  };
})();
