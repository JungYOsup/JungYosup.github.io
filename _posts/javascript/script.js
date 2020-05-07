"use strict";

const user = { name: "ellie", age: "20" };
const user4 = {};
Object.assign(user4, user);

user4.name = "yosup";

console.log(user4);
console.log(user);
