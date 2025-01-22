"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
score = true;
var tejash = { name: "tejash", id: 456 };
tejash = { username: "tejash", id: 789 };
function getDBId(id) {
  if (typeof id === "string") {
    return id.toLowerCase();
  } else {
    return id;
  }
}
getDBId(5);
getDBId("565");
