var factorial = function(inputNumber) {
  var resultFactorial = 1
  if (inputNumber === 0) {
    return 1;
  } else {
  for (var index = inputNumber; index > 0; index -= 1) {
      resultFactorial *= index;
    }
    return resultFactorial;
  }
};
