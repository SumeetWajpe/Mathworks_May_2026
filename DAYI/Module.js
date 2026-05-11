var MathModule = (function () {
  function Add(x, y) {
    return x + y;
  }

  function Subtract() {}

  function Multiply() {
    Subtract();
    Divide();
  }

  function Divide() {}

  return {
    Add: Add,
    Multiply: Multiply,
  };
})();
