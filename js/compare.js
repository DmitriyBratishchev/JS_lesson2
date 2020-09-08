"use strict";

function twoNumbers() {
  let result = confirm("Я могу сравнить 2 числа. Продолжим?");

  while (result) {
    var num1 = getNum ('первое');  
    var num2 = getNum ('второе'); 
    
    if (num1 > num2) {
      alert("Первое число больше второго.");
    } else if (num1 < num2) {
      alert("Второе число больше первого");
    } else {
      alert("Числа равны");
    }

    result = confirm("Повторим?");
    console.log(result);
  }
}

//Запрашивает, обрабатывает, возвращает только число или повторяет запрос. serialNumber - порядковый номер числа
function getNum (serialNumber){
  while (true) {
    var num =  prompt("Введите " + serialNumber + " число:");
    console.log(num);
    console.log(num === "");
    console.log(num == "");
    if (num === "") {
      alert("Вы ничего не ввели");
    } else if (isNaN (Number (num))) {
      alert("числа вводим цифрами )");
    } else {
      break;
    }
  }
  return +num;
}
