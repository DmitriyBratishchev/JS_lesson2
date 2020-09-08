'use strict';

function sum_num() {
  while (true) {
    alert('Введите поочереди числа');
    let sum = 0;
    
    while (true) {
      var term = prompt('Введите число');
      if (term === null){
        alert('Сумма: ' + sum)
        break;
      }

      else if (!+term){
        term = 0;
      }
      else {
        sum += +term;
      }
    }

    var answer = confirm("Хотите вычислить другую сумму?");
    if (!answer) {
      break;
    }
  }
}