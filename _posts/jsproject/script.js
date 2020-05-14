const panels = document.querySelectorAll(".panel");

function toggleOpen(e) {
  console.log(e.target); // event가 발생한 타겟, 즉 클릭한 타겟이 p 이므로 -> p테그를 가르키는 반면
  console.log(this); // div테그를 가리킨다. (클릭한 panel을 가리키네)
  //이벤트에서 즉 e.target과 this는 다른것이다.
  this.classList.toggle("open");
}

function toggleActive(e) {
  // console.log(this);
  // console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
