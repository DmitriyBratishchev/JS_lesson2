'use strict';

function sum_num() {
  while (true) {
    alert('Введите поочереди числа');
    let sum = 0;
    
    while (true) {
      var numFromUser = prompt('Введите число');
      if (numFromUser === null){
        alert('Сумма: ' + sum)
        break;
      }

      else if (!+numFromUser){
        numFromUser = 0;
      }
      else {
        sum += +numFromUser;
      }
    }

    var answer = confirm("Хотите вычислить другую сумму?");
    if (!answer) {
      break;
    }
  }
}