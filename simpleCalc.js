var firstNumber = document.getElementById("number-1").value;
var secondNumber = document.getElementById("number-2").value;
var resultDisplay = document.getElementById("result");
var multButton = document.getElementById("mult");
var addButton = document.getElementById("add");
var subButton = document.getElementById("sub");
var divideButton = document.getElementById("divide");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
*/

function multiplyTwoNumbers(factor1, factor2) {
  return factor1 * factor2;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
*/

function addTwoNumbers(addend1, addend2) {
  return addend1 + addend2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
*/

function subtractTwoNumbers(minuend, subtrahend) {
  return minuend - subtrahend;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
*/

function divideTwoNumbers(dividend, divisor) {
  return dividend / divisor;
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them
  Return the value of the operation.
*/

function mainHub(whichFunction) {

  var firstNumber = document.getElementById("number-1").value;
  var secondNumber = document.getElementById("number-2").value;
  
  resultDisplay.value = window[whichFunction](firstNumber, secondNumber);

}


multButton.addEventListener("click", mainHub("multiplyTwoNumbers"));