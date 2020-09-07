'use strict';

function sum_num() {
  while (true) {
    alert('Введите поочереди числа');
    let sum = 0;
    
    while (true) {
      var tot = prompt('Введите число');
      if (tot === null){
        alert('Сумма: ' + sum)
        break;
      }

      else if (!+tot){
        tot = 0;
      }
      else {
        sum += +tot;
      }
    }

    var answer = confirm("Хотите вычислить другую сумму?");
    if (!answer) {
      break;
    }
  }
}