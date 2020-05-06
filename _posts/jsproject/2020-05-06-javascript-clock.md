---
title: "5.Javascript로 시계 만들기"
excerpt: "javascript 프로젝트 다섯번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script defer src="clock.js"></script>
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="clock">
      <div class="clock-box">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.clock {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.clock-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background-color: red;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

.hand {
  width: 40%;
  height: 5px;
  position: absolute;
  top: 50%;
  left: 10%;
  background-color: black;
  transform-origin: 100%;
  transition: all 0.5s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}

.hour-hand {
  width: 30%;
  background-color: blue;
  left: 20%;
}
.second-hand {
  width: 15%;
  left: 35%;
  background-color: black;
}
.min-hand {
  background-color: purple;
}
```

```js
"use strict";

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function getDate() {
  const date = new Date();

  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  setDegree(seconds, minutes, hours);
}

function setDegree(seconds, minutes, hours) {
  const secondsDegree = (seconds / 60) * 360 + 90;
  const minutesDegree = (minutes / 60) * 360 + 90;
  const hoursDegree = (hours / 60) * 360 + 90;
  //   90도를 왜 해주는걸까?
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
  minHand.style.transform = `rotate(${minutesDegree}deg)`;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

function init() {
  window.setInterval(() => {
    getDate();
  }, 1000);
}

init();
```

결론 : transform-origin: 돌리는 기준점을 잠아준다. 자세한것은 [trasform-origin](https://www.tabmode.com/homepage/transform-origin.html) , 딱히 이 프로젝트에서 힘든점은 없었던것 같다. 여기서 가져가야할것은 **transform-origin**과 transition-timing-function 정도 , javascript로도 inline형식으로 html에 style을 줄수 있다는것이다. 하지만 inline으로 style을 주는게 과연 좋은 방법일까라는 생각이 든다.
**또한 전문가와 비교할만한 차이도 거의 없음**
