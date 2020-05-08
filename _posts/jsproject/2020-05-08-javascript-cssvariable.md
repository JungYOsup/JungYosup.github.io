---
title: "6.자바스크립트를 이용하여 CSS를 조절하는 방법에 관한 프로젝트"
excerpt: "javascript 프로젝트 여섯번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 코드비교

* **HTML 비교**

- Expert Code : data- 는 언제 쓰는게 가장 바람직한거야 , 그냥 이렇게 막(?) 써도 되는걸까??

해답 : data- 속성은 표준이 아닌 속성이나 추가적인 DOM 속성, Node.setUserData()과 같은 다른 조작을 하지 않고도,data-를 쓰는 이유는 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.

보여야 하고 접근 가능해야하는 내용은 데이터 속성에 저장하지 마세요. 접근 보조 기술이 접근할 수 없기 때문입니다.

```html
<body>
  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input**
      type="range"
      name="spacing"
      min="10"
      max="200"
      value="10"
      data-sizing="px"
    />
    <label for="blur">Blur:</label>
    <input
      type="range"
      name="blur"
      min="0"
      max="25"
      value="10"
      data-sizing="px"
    />
    <label for=""></label>
    <input type="color" name="base" value="#ffc600" />
  </div>

  <img src="/assets/images/yosup.jpg" alt="내 사진" />
</body>
```

- Yosup's Code

```html
<body>
  <div class="range_box">
    <label for="space_range">Spacing</label>
    <input
      type="range"
      maxlength="100"
      minlength="0"
      value="50"
      step="1"
      id="space-range"
    />
    <label for="blur_range">blur</label>
    <input
      type="range"
      maxlength="100"
      minlength="0"
      value="50"
      step="1"
      id="blur-range"
    />
    <label for="color_range">Color</label>
    <input type="color" id="color-range" />
  </div>
  <div class="img_box">
    <img src="img/jejaFC.jpg" alt="제자FC 배경화면" class="jeja" />
  </div>
</body>
```

- CSS 비교

- Expert Code : root(<html> 선택자) 를 사용하여서 CSS를 변하게 하기위한 발판을 마련함

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

- javascript 비교

* Expert code : inline style이 아닌 CSS에 직접적으로 영향을 주어 CSS 변경시켰다.

```js
"use strict";

const inputs = document.querySelectorAll(".controls input");

// console.log(input) // NodeList 가 나오며 이것은 배열유사품이지 배열이 아니다.

function handleUpdate() {
  console.log(this.value); //this === event.taget??

  const suffix = this.dataset.sizing || "";
  //html의 data-sizing에 접근하기위해 dataset.sizing을 사용하였고 이게 있을때는 px을 반환하고 없을때는 공백을 반환한다.
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
```

- Yosup Code : 나는 CSS를 javascript로 inline으로밖에 바꿀수 없다고 생각했는데 , 변수를 사용하여서 CSS를 바꾸는 방법도 있다는것을 오늘 전문가의 코딩을 통해 알게 되었다. 또한 나는 일일이 태그가 input밖에 없음에도 하나하나씩 input을 Dom 탐색 했다면 전문가는 querySelectorAll을 사용하였고, forEach를 통해 각각에 영향이 있을경우 조절되게끔 아주 간단한 코딩을 했다.

```js
"use strict";

const spaceRange = document.querySelector("#space-range");
const blurRange = document.querySelector("#blur-range");
const colorRange = document.querySelector("#color-range");
const img = document.querySelector(".jeja");
const imgBox = document.querySelector(".img_box");

function getSpaceValue(event) {
  const value = event.target.value;
  spaceChange(value);
}
// range의 값을 받아오는 함수
function getBlurValue(event) {
  const value = event.target.value;
  blurChange(value);
}

function getColorValue(event) {
  const value = event.target.value;
  colorChange(value);
}

function spaceChange(value) {
  img.style.position = "relative";
  img.style.top = `${value - 50}px`;
  img.style.left = `${value - 50}px`;
}
function blurChange(value) {
  img.style.filter = `blur(${value}px)`;
}

function colorChange(value) {
  imgBox.style.backgroundColor = `${value}`;
}

if (spaceRange) {
  spaceRange.addEventListener("input", getSpaceValue);
}

if (blurRange) {
  blurRange.addEventListener("input", getBlurValue);
}

if (colorRange) {
  colorRange.addEventListener("input", getColorValue);
}
```

**꿀 팁(꼭보자)**

1. 하나의 선택자의 여러개의 이벤트를 줄수 있다는 것.

```js
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
//change로 할경우 range 를 눌렀이동했을때만 나오고 이동중에는 값이 안나온다.

inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
```

2.event로 발생한 함수의 this 는 event.target과 같다는것

```js
function handleUpdate() {
  console.log(this.value); //this === event.taget??
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
```

3. data- 속성은 표준이 아닌 속성이나 추가적인 DOM 속성, Node.setUserData()과 같은 다른 조작을 하지 않고도,data-를 쓰는 이유는 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.

보여야 하고 접근 가능해야하는 내용은 데이터 속성에 저장하지 마세요. 접근 보조 기술이 접근할 수 없기 때문입니다.

4. Javascript로 inline CSS를 조절뿐만아니라, 변수를 통해 CSS에 변화를 줄수 있다는 것이다.
