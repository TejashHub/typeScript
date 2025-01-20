"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (a, b) {
  return a + b;
};
var getUpper = function (a) {
  return a.toLocaleUpperCase();
};
var signUp = function (name, email, isPaid) {
  if (isPaid === void 0) {
    isPaid = false;
  }
  return {
    name: name,
    email: email,
    isPaid: isPaid,
  };
};
var signIn = function (email) {
  return {
    email: email,
  };
};
console.log(add(4, 5));
console.log(getUpper("Hello Worlds"));
console.log(signUp("payal", "pty22112000@gmail.com"));
console.log(signIn("pty22112000@gmail.com"));
