var moment = require("moment");
var myDate = new Date();
var myCoolDate = moment(myDate).format("LL");

console.log(myDate);
console.log(myCoolDate);