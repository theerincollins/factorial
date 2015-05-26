var factorial = function(inputNumber) {

  if (inputNumber === 0) {
    return 1;
  }

  return inputNumber * factorial(inputNumber - 1));


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

// for (var index = inputNumber; index > 0; index -= 1) {
//     resultFactorial *= index;
//   }
//   return resultFactorial;
