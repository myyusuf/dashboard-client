exports.formatNumber = function(number, decimalPoint){

  var _decimalPoint = 2;
  if(decimalPoint != undefined){
    _decimalPoint = decimalPoint;
  }
  return number.toFixed(_decimalPoint).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
