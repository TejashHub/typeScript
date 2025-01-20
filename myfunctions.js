"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var add = function (a, b) { return a + b; };
var addTwo = function (a) { return a + 2; };
var getUpper = function (a) { return a.toLocaleUpperCase(); };
var getValue = function (myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 ok";
};
var signUp = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
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
var getHello = function (message) {
    return message;
};
var heros = ["Superman", "Batman", "Wonder Woman"];
heros.map(function (item) {
    return "hero name is ".concat(item);
});
var myvalues = addTwo(3);
console.log(heros);
console.log(getHello("Good Morninig Dears"));
console.log(myvalues);
console.log(getValue(4));
console.log(add(4, 5));
console.log(getUpper("Hello Worlds"));
console.log(signUp("payal", "pty22112000@gmail.com"));
console.log(signIn("pty22112000@gmail.com"));
