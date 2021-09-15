// FizzBuzz Progeck

var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult =document.querySelector('.see');

function FizzBuzz () {
   var userNumber = Number(elInput.value);

   if (userNumber % 3 <= 0 && userNumber % 5 <= 0) {
      elResult.innerHTML = 'FizzBuzz';
   }
   else if (userNumber % 3 <= 0) {
      elResult.innerHTML = 'Fizz';
   }
   else if (userNumber % 5 <= 0) {
      elResult.innerHTML = 'Buzz';
   }
   else {
      elResult.innerHTML = userNumber;
   }
}

elForm.addEventListener('submit', function(evt) {
   evt.preventDefault();

   FizzBuzz();
})