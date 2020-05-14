---
title: "8.Flexbox + Javascript Image Gallery 프로젝트"
excerpt: "javascript 프로젝트 여덟번째"
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

- Expert Code : 내것과 딱히 차이점은 없음

```html
<body>
  <div class="panels">
    <div class="panel panel1">
      <p>Hey</p>
      <p>Let's</p>
      <p>Dance</p>
    </div>
    <div class="panel panel2">
      <p>Give</p>
      <p>Take</p>
      <p>Receive</p>
    </div>
    <div class="panel panel3">
      <p>Experience</p>
      <p>It</p>
      <p>Today</p>
    </div>
    <div class="panel panel4">
      <p>Give</p>
      <p>All</p>
      <p>You Can</p>
    </div>
    <div class="panel panel5">
      <p>Life</p>
      <p>In</p>
      <p>Motion</p>
    </div>
  </div>
</body>
```

- Yosup Code : 딱히 차이점이 없음

```html
<body>
  <div class="box">
    <div class="item img_one">
      <p>Hey</p>
      <p>Let's</p>
      <p>Dance</p>
    </div>
    <div class="item img_two">
      <p>Give</p>
      <p>Take</p>
      <p>Receive</p>
    </div>
    <div class="item img_three">
      <p>Experience</p>
      <p>It</p>
      <p>Today</p>
    </div>
    <div class="item img_four">
      <p>Give</p>
      <p>All</p>
      <p>You Can</p>
    </div>
    <div class="item img_five">
      <p>Life</p>
      <p>In</p>
      <p>Motion</p>
    </div>
  </div>
</body>
```

- **CSS 비교**

- Expert Code : 이 코드를 보고 transition이 어떻게 동작하는지 알게 되었고 (transition은 CSS의 변화가 있어야지 동작을 하는것이다.)

```css
html {
  box-sizing: border-box;
  background-color: #ffc600;
  font-size: 20px;
  font-weight: 200;
}

body {
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

.panels {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}

.panel {
  background: #6b0f9c;
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: font-size 0.7s cubic-bezier(0.6, -0.28, 0.735, 0.045), flex 0.7s
      cubic-bezier(0.68, -0.55, 0.265, 1.55), background 0.2s;

  font-size: 20px;
  background-size: cover;
  background-position: center;
  flex: 1;
  /* flex 1, 1, 0
  flex grow 1
  flex shrink 1
  flex basis auto*/
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.panel1 {
  background-image: url(/assets/images/javascript_img/jeju01.jpg);
}
.panel2 {
  background-image: url(/assets/images/javascript_img/jeju02.jpg);
}
.panel3 {
  background-image: url(/assets/images/javascript_img/jeju03.jpg);
}
.panel4 {
  background-image: url(/assets/images/javascript_img/jeju04.jpg);
}
.panel5 {
  background-image: url(/assets/images/javascript_img/jeju05.jpg);
}

.panel > * {
  margin: 0;
  width: 100%;
  transition: transform 0.5;
  /* transition : transform 이 의미하는건? */
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}
.panel.open-active > *:last-child {
  transform: translateY(0);
}
.panel p {
  text-transform: uppercase;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
  font-size: 2em;
}

.panel p:nth-child(2) {
  font-size: 4em;
}

.panel.open {
  flex: 5;
  /* flexgrow: 5; flexshrink:1; flex-basis: auto; */
  font-size: 40px;
}

.cta {
  color: white;
  text-decoration: none;
}
```

- Yosup Code : **CSS의 우선순위가 얼마나 중요한지 다시금 깨닫게 되는 CSS였다.** 추가적으로 아직 transtion이랑 animation 부분에서 내가 원하는대로 구현하지 못한다는 생각이 들어서 개인적으로 연습 해봐야겠다.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body,
html {
  width: 100%;
  height: 100%;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  transition: all 1s;
}

.clicked {
  transition-timing-function: cubic-bezier(0.44, -0.86, 0.82, 1);
  width: 50%;
}
.box .item p {
  font-family: "Indie Flower", cursive;
  color: #f8f8ff;
  font-size: 30px;
}
p:nth-child(odd) {
  position: relative;
  visibility: hidden;
}
.clicked p {
  animation-name: move-p;
  animation-duration: 1000ms;
  visibility: visible;
}

/* animation */

@keyframes move-p {
  from {
    top: -50px;
  }
  to {
    top: 0;
  }
}

/* utility */

.img_one {
  background-image: url(img/jeju01.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img_two {
  background-image: url(img/jeju02.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img_three {
  background-image: url(img/jeju03.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img_four {
  background-image: url(img/jeju04.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.img_five {
  background-image: url(img/jeju05.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* phone */
@media screen and (max-width: 1000px) {
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  p:nth-child(odd) {
    position: relative;
    visibility: visible;
  }
  .box .item p:nth-child(even) {
    font-size: 100px;
  }
  .item {
    width: 100%;
    transition: none;
  }
}
```

- **Javascript 비교**

- Expert Code : this를 사용했는데, this가 의미하는게 무엇일까?? 일반 e.target과 this는 다른것이다. e.target은 이벤트가 발생한 target을 나타내는것이고 여기서 this는 panel을 가르키고 있는것같다. 그렇다면 왜 여기서 this가 panel을 가리키는것일까??

```js
const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log(e.target); // event가 발생한 타겟, 즉 클릭한 타겟이 p 이므로 -> p테그를 가르키는 반면
  console.log(this); // div테그를 가리킨다. (클릭한 panel을 가리키네)
  //이벤트에서 즉 e.target과 this는 다른것이다.
  this.classList.toggle("open");
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));

panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);
```

- Yosup Code : javscript에서는 한가지 의문이 들었던게 이렇게 했을때 p 테그에 클릭했을때 영향을 받는다는것이다. 그 이유는 뭘까?? 왜 div테그만 이벤트를 줬는데 그 하위요소들가지 영향을 받는거지?

그 이유는 e.target으로 했기때문이다. e.target은 내가 클릭한것을 target으로 가지기 때문이다. 그렇기에 내가 p테그를 클릭하면 p테그를 타겟으로 가져오기 때문이다.

```js
"use strict";

const items = document.querySelectorAll(".item");

const chageTransform = (e) => {
  items.forEach((item) => {
    if (item != e.target) {
      item.classList.remove("clicked");
    }
  });
  e.target.classList.toggle("clicked");
};

if (items) {
  items.forEach((item) => {
    item.addEventListener("click", chageTransform);
  });
}
```
