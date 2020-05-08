"use strict";

const inputs = document.querySelectorAll(".controls input");

// console.log(input) // NodeList 가 나오며 이것은 배열유사품이지 배열이 아니다.

function handleUpdate() {
  console.log(this.value); //this === event.taget??

  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
//change로 할경우 range 를 눌렀이동했을때만 나오고 이동중에는 값이 안나온다.

inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

//그래서 이동중에도 값을 나타내기위해 mousemove를 사용했다.actions
//여기서 알아야할점은 하나의 선택자에 2개의 이번트를 줄수 있다는 것이다.
//하지만 input에 마우스만 이동해도 값이 나오므로, 차라리 이벤트로 input을 주는게 나을것 같다.
