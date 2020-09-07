"use strict";

function leap_year_user() {
  while (true) {
    while (true) {
      var yearStart = prompt("Введите год начала периода:");
      var yearFinish = prompt("Введите год окончания:");
      if (yearStart > yearFinish) {
        alert("Период указан не верно.");
      } else {
        break;
      }
    }
    
    for (let i = yearStart; i <= yearFinish; i++) {
      if (i % 4 == 0) {
        console.log(i);
      }
    }

    var answer = confirm("Хотите проверить другой период?");
    if (!answer) {
      break;
    }
  }
}
