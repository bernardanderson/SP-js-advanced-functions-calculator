var firstNumber = document.getElementById("number-1").value;
var secondNumber = document.getElementById("number-2").value;
var classes = document.getElementsByClassName("calc-button");

// Create a function that multiplies two numberspassed in as arguments. Return the product.
function multiplyTwoNumbers(factor1, factor2) {
  return factor1 * factor2;
}

// Create a function that adds two numbers passed in as arguments. Return the sum.
function addTwoNumbers(addend1, addend2) {
  return addend1 + addend2;
}

// Create a function that subtracts two numbers passed in as arguments. Return the difference.
function subtractTwoNumbers(minuend, subtrahend) {
  return minuend - subtrahend;
}

// Create a function that divides two numbers passed in as arguments. Return the quotient.
function divideTwoNumbers(dividend, divisor) {
  return dividend / divisor;
}

// Accepts three arguments based on which button is pressed and calls the right function
function getCalculation(num1, num2, calcFunction) {
  var resultDisplay = document.getElementById("result");
  resultDisplay.value = calcFunction(num1, num2);
}

// Cycles through each button and assigns the content below
for (var i = 0; i < classes.length; i++) {
  classes[i].addEventListener("click", function() {

    var firstNumber = parseInt(document.getElementById("number-1").value);
    var secondNumber = parseInt(document.getElementById("number-2").value);

    if (this.id === "mult") {
      getCalculation(firstNumber, secondNumber, multiplyTwoNumbers);
    } else if (this.id === "add") {
      getCalculation(firstNumber, secondNumber, addTwoNumbers);
    } else if (this.id === "sub") {
      getCalculation(firstNumber, secondNumber, subtractTwoNumbers);
    } else if (this.id === "divide") {
      getCalculation(firstNumber, secondNumber, divideTwoNumbers);
    };
  }, false);
};