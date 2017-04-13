//alert("Assignment 1");

var countOfSums = 0, sumOfNumbers = 0, averageOfNumbers = 0, newNumber = 0, fElement;

function resetNumbers() {
  countOfSums = 0;
  sumOfNumbers = 0;
  averageOfNumbers = 0;
  
  fElement = document.getElementById("countNumber");
  //window.console.log("countNumberEl: " + fElement);
  fElement.innerHTML = "  Count: " + countOfSums;
  
  fElement = document.getElementById("sumNumber");
  //window.console.log("sumNumberEl: " + fElement);
  fElement.innerHTML = "    Sum: " + sumOfNumbers;
  
  fElement = document.getElementById("averageNumber");
  //window.console.log("averageNumberEl: " + fElement);
  fElement.innerHTML = "Average: " + averageOfNumbers;
  
  event.preventDefault();
}

function calcNumbers(){
  //alert("Got to calcNumbers" + "typeof newNumber initially: " + typeof(newNumber));
  
  newNumber = document.getElementById("numberToSum").value;
  // window.console.log("numberToSum: " + newNumber);
  
  //alert("newNumber: " + newNumber + " typeOf: " + typeof(newNumber));
  countOfSums += 1;
  sumOfNumbers += parseInt(newNumber);
  if (sumOfNumbers <= 0){
    averageOfNumbers = 0;
  } else {
    averageOfNumbers = sumOfNumbers/countOfSums;
  }
  
  fElement = document.getElementById("countNumber");
  fElement.innerHTML = "  Count: " + countOfSums;
  
  fElement = document.getElementById("sumNumber");
  fElement.innerHTML = "    Sum: " + sumOfNumbers;
  
  fElement = document.getElementById("averageNumber");
  fElement.innerHTML = "Average: " + averageOfNumbers;
  
  event.preventDefault();
}