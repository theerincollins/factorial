var factorial = function(inputNumber) {
  var resultFactorial = 1
  for (var index = inputNumber; index > 0; index -= 1){
      resultFactorial *= index;
    }
    return resultFactorial;
};
