var litres = function (gallons) {
  //i gallon == 4.55 Litres
  return gallons * 4.55;
}

var gallons = parseInt(prompt("enter gallons"));
var result = litres(gallons);
alert(result);
