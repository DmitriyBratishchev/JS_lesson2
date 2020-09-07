"use strict";

function twoNumbers() {
  let result = confirm("Я могу сравнить 2 числа. Продолжим?");

  while (result) {
    while (true) {
      var num1 = Number (prompt("Введите первое число:"));
      if (num1 == "") {
        alert("Вы ничего не ввели");
      } else if (isNaN (num1)) {
        alert("числа вводим цифрами )");
      } else {
        break;
      }
    }

    while (true) {
      var num2 = Number (prompt("Введите второе число:"));
      if (num2 == "") {
        alert("Вы ничего не ввели");
      } else if (isNaN (num2)) {
        alert("числа вводим цифрами )");
      } else {
        break;
      }
    }
      console.log(num1);
      console.log(Number (num1));
      console.log(isNaN (num1));
    if (+num1 > +num2) {
      alert("Первое число больше второго.");
    } else if (+num1 < +num2) {
      alert("Второе число больше первого");
    } else {
      alert("Числа равны");
    }

    result = confirm("Повторим?");
    console.log(result);

    // var result = confirm("Повторим?");
  }
}
