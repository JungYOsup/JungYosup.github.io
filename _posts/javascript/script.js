const ellie = { name: "ellie", age: 4 };

for (const prop in ellie) {
  console.log===);
  console.log(ellie[prop]);
  console.log(ellie.prop); // undefined가 된다. 그 이유는 앞에서 설명햿듯이 dot(.)을 쓰는경우는 정확하게 key에 해당하는 값을 받아오고 싶을때 사용하는데, 객체의 프로퍼티에는 순서가 없기 때문에 우리가 확실하게 원하는것을 얻기가 어렵기 때문이다.
}
