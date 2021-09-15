var elForm = document.querySelector('.form');
var elInputNumber =document.querySelector('.input');
var elResault = document.querySelector('.see')

var fizzNumber = 3;
var buzzNumber = 5;
var resault = ''

function fizzbuzz(inputNumber) {
   if (inputNumber % (fizzNumber * buzzNumber) === 0){
   resault = 'fizzbuzz';
} 
else if (inputNumber % buzzNumber === 0) {
   resault = 'buzz';
}
else if (inputNumber % fizzNumber === 0) {
   resault= 'fizz';
}
else {
   resault = 'understand';
}

return resault;
}


elForm = addEventListener('submit', function(evt){
   evt.preventDefault();

   var userNumber = Number(elInputNumber.value.trim());
   elResault.innerHTML = fizzbuzz(userNumber);

})