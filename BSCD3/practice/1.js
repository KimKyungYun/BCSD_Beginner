const phone_check = new RegExp('\^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})');

console.log(phone_check.test("01072123822"));
console.log(phone_check.test("010-7212-3822"));