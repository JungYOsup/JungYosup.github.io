var a = 20;

function abc() {
  console.log(a);
  var b = 30;
}

{
  var c = 40;
}

abc(); // 20
console.log(c); // 40
console.log(b); // b is not defined
