const a = document.querySelectorAll("li");
const b = document.getElementsByTagName("li");
const c = document.getElementsByClassName("liClass");
console.log(a);
console.log(b);
console.log(c);

const li = document.createElement("li");
const ul = document.querySelector("ul");

li.setAttribute("class", "hoho");
ul.appendChild(li);
