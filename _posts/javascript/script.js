let a = 20;

function abc() {
  console.log(a);
  let b = 30;
}

{
  let c = 40;
}

abc(); //20
console.log(b); // b is not defined
console.log(c); // c is not defined
