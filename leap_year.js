'use strict';

function leap_year() {
  var i = 1900;
  while (i <= 2016) {
    if (i % 4 == 0){
    console.log(i);
  }
  i++
  }
}