var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function fib() {
  myHeading.innerHTML = 'fib:1123581321';    
}

function getString() {
  var myString = prompt('Please enter a string.');
  myHeading.innerHTML = myString;
}

myButton.onclick = function() {
  getString();
}