function Utilities() {}

Utilities.prototype.getTime = function() {
  var currentDate = new Date(),
    year = this.dateDigitToString(currentDate.getFullYear()),
    month = this.dateDigitToString(currentDate.getMonth() + 1),
    date = this.dateDigitToString(currentDate.getDate()),
    hour = this.dateDigitToString(currentDate.getHours()),
    minute = this.dateDigitToString(currentDate.getMinutes()),
    second = this.dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  return formattedDateString;
};

Utilities.prototype.dateDigitToString = function(num) {
  return num < 10 ? '0' + num : num;
};
Utilities.prototype.formatPrice = function(price) {
  return price.toFixed(2);
};
module.exports = Utilities;
