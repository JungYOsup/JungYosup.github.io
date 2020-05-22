"use strict";

const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const colors = document.querySelectorAll(".paint");

canvas.width = canvas.offsetWidth;
//canvas의 offsetWidth와 offsetHeight를 지정해줘야한다.
canvas.height = canvas.offsetHeight;
//canvas의 offsetWidth와 offsetHeight를 지정해줘야한다.

console.log(canvas.width);

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
