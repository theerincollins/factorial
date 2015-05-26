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


$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    var inputNumber = parseInt($("input#inputNumber").val());
    var result = factorial(inputNumber);

    $(".inputNumber").text(inputNumber);
    $(".resultNumber").text(result);
    $("#results").show();
    event.preventDefault();
  });
});
