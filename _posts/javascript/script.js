const ulElm = document.querySelector("ul");
const docFrag = document.createDocumentFragment();

["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  docFrag.appendChild(li);
});

ulElm.appendChild(docFrag);

console.log(document.body.innerHTML);
// <ul><li>blue</li><li>red</li><li>green</li></ul> 가 출력됨

console.log(docFrag);
