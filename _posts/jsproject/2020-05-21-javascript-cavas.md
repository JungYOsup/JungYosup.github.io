---
title: "10.Cavas 그리기"
excerpt: "javascript 프로젝트 열번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 코드비교

* **Javascrip 비교**

* expert Coding : 딱히 코드면에서 건질건 없는것 같다.

```javascript
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
```

- 사용한 기술

* [lastX, lastY] = [e.offsetX, e.offsetY]; <===> lastX = e.offsetX , lastY =e.offsetY
  (한줄로 나타내기위해 사용한 기술)

- 알게 된 사실

* yosup Coding (1) : 으잉 될것 같은데 안돼지 ?? ->> 이벤트의 동작방식을 이해하지 못햇기 대문에 이런 코드를 짜게된것.. 당연히 순서대로 동작할거라는.. 생각으로 짠 ..

```javascript
const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");

if (canvas) {
  canvas.addEventListener("mousedown", getOffSet);
}
function draw(x, y) {
  if (canvas.getContext) {
    context.beginPath();
    context.moveTo(x, y);
    canvas.addEventListener("mousemove", drawLine);
    context.stroke();
    context.closePath();
  }
}
//어떻게 하면 하나의 draw를 써서 moveT0와 lineTo를 바꿀수 있을까?

function getOffSet(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  draw(x, y);
}

function drawLine(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  context.lineTo(x, y);
}
```

- yosup Coding (2)

```js
"use strict";

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const colors = document.querySelectorAll(".paint");

canvas.width = canvas.offsetWidth;
//canvas의 offsetWidth와 offsetHeight를 지정해줘야한다.
canvas.height = canvas.offsetHeight;
//canvas의 offsetWidth와 offsetHeight를 지정해줘야한다.

let painting = false;

if (canvas) {
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mousemove", drawCavas);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", colorPainting);
}

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function drawCavas(e) {
  const x = e.offsetX;
  const y = e.offsetY;

  if (!painting) {
    context.beginPath();
    context.moveTo(x, y);
  } else {
    context.lineTo(x, y);
    context.stroke();
  }
}

function colorPainting() {
  colors.forEach((color) => {
    color.addEventListener("click", getColor);
  });
}

function getColor(e) {
  console.log(e.target.dataset.color);
  const color = e.target.dataset.color;
  context.strokeStyle = color;
}
```

- 사용한 기술

* HTML data-data명

* canvas를 만들때 사용하는 메서드들

- 알게 된 사실

* HTML data-data명 : html의 data를 가져오는 작업을 할때는 , dataset.data명 으로 가져온다.
