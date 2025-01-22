"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
  _id: "001",
  name: "Tejash",
  email: "TejashYadav@info.com",
  phone: "9909110659",
  isActive: true,
  isAdmin: false,
  startTrail: function () {
    return "Trail Started!!!!";
  },
};
console.log(User.email);
User.email = "nitash@info.com";
