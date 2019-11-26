---
title: "2. Javascript로 Chrome 만들기"
excerpt: "javascript 프로젝트 첫번째"
categories:
  - javascript
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## javscript 로 Chrome 만들기

Nomad Coders를 기반으로 하고 있다.

[Nomad코드](https://academy.nomadcoders.co/);

### 0. Introduction

### 1. Theory

#### 1.1 Why Js

##### 1.1에서의 핵심

> 1.Javascript를 사용하는 이유는 반응형 웹을 만들기 위해서이다.

#### 1.3 ES5 , ES6 ESWTF?

##### 1.3에서의 핵심

> 1.ECMAScript 는 javascript의 specification(명세서,사양)이다. 즉 자바스크립트의 확장판(?)이라고 생각하면 됨

#### 1.4 VanillaJS

##### 1.4에서의 핵심

> 1.VanilliaJS는 꾸며지지 않은 javascript라고 생각하면 된다, 즉 자바스크립트의 오리지날(?)이라고 생각하면 됨
>
> 2.오리지널을 확실하게 쓸줄 알아야지 나머지 ES5, ES6 그리고 library나 framework(React, Vue.js) 를 사용하기 쉽다.
>
> 3.javscript는 처리속도가 빠르다.

#### 1.7 let, const , var

##### 1.7에서의 핵심

> 1.es2015에서는 let, const(상수)가 추가 되었다.
>
> 2.var의 문제점 : 재선언이 가능하여서 코드가 복잡해질때, var를 선언한 변수는 문제가 될수 있다.
> ex) var a = 5 , var a = 10 이라고 할때 기존에 이미 a를 선언했는데 나중에도 오류없이 선언이 가능함
>
> 3.let과 const의 공통점 : 재선언이 불가능하다.
>
> 4.let과 const의 차이점 : let은 재선언도 불가능하지만 , 재 할당은 가능하다. const는 재선언이 불가능하고 재 할당도 불가능하다.
> const를 사용한 변수는 상수라고 생각하면 된다.

#### 1.8 Data Types on JS

##### 1.8에서의 핵심

> 1.변수 타입은 첫 사용은 "const" 진짜 필요할 때만 "let"을 사용하자.
>
> 2.값에 따라 데이터타입이 정해진다.
> ex) const a = "정요섭"; -> a는 String 타입
> const b = 1; -> b는 number 타입

#### 1.9 Organizing Data with Arrays

##### 1.9에서의 핵심

> 1.변수명은 Camel-case여야한다.Camel 이 낙타인데 낙타의 등처럼 언제나 소문자로 시작하고 나중에는 대문자로 쓴다.
> const dayofweek 같은경우 오류는 아니지만 나중에 협력자가 볼때 옳은 변수명은 아니다.
> 따라서 다음과 같은 조건으로 써줘야한다
> 언제나 소문자로 시작하고 띄어쓰는 부분은 대문자로 써준다.
> ex) const day of week 의 의미를 담고있는 변수는 const dayOfWeek 라고 선언해준다.
>
> 2.배열선언은 const a =[]; 로 선언해주면 된다.

#### 1.10 Organizing Data with Object

##### 1.10에서의 핵심

> 1.object 선언 방법은 const a = {}; 로 선언해준다.
>
> 2.객체안의 property값(데이터)의 접근 방법은 object명.key로 선언한다.
>
> 3.Array 안에 Object를 넣을수도 있고 Object 안에 Array을 선언해줄수도 있다.
>
> 4.property 값이 함수일 경우, 우리는 그것을 일반함수와 구분하기 위해 메서드라고 부른다.
>
> 5.이와같이 객체는 데이터를 의미하는 property 와 메서드로 구성된 집합이다.

#### 2.1.1 More Function Fun

##### 2.1.1에서의 핵심

> 1.javascript에서는 문자열을 표현할때 "" 와 '' 를 사용한다.
>
> 2.하지만 지금은 백틱(`)을 사용한다.
>
> 3.백틱을 쓸경우 띄어씌기 Enter까지 다 반영한다.
>
> 4.javascript에서 return의 중요성
> (1). return을 하게 되면 그 값을 받을 변수가 필요하다.
> (2). return문을 실행하면 다음 실행문들을 수행하지 않고 함수를 마친다.

#### 2.3 Modifying the DOM with JS

##### 2.3에서의 핵심

> 1.Dom 탐색시 getElementById를 통해 id를 찾곤 했는데, 요즘에는 document.querySelector("#id명");로 id를 찾거나
> document.querySelector(".class명")로 class를 찾는방법이 더 효율적이다.

#### 2.4 Events and event handlers

##### 2.4에서의 핵심

> 1.javascript는 HTML과 CSS를 바꾸고 싶어서 javascript를 사용하는것일까? NO
> javascript는 반응형웹을 만들기 위해 사용하는것이다. 즉 이벤트를 사용하기 위해 javascript를 사용하는것이다.
>
> 2.addEventListener("resize",handleResize) 와 addEventListener("resize",handleResize())의 차이점
> 전자는 resize가 발생해야지 handleResize 함수가 동작하고 , 후자는 resize가 발생하기전에 handleResze함수가 동작한다.

#### 2.5 if, else, and, or

##### 2.5에서의 핵심

> 1."===" 와 "=="의 차이점은 ===는 타입까지 완전 같아야 true를 반환한다.
>
> 2.ex) "7" === 7 (false) , "7" == 7 (true)

#### 2.6 DOM - If else - Function practice

##### 2.6에서의 핵심

> 1. [자바스크립트의 이벤트 확인, javscript MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript)

#### 2.7 DOM - If else - Function practice part Two

##### 2.7에서의 핵심

> 1.CSS는 CSS파일에서만 작업하는게 좋고, HTML은 HTML로만 작업하는게 좋다.
>
> 2.Javascript를 이용해서 CSS랑 HTML을 건드는 것은 별로 좋지 않은 방법
>
> 3.Javascript는 Javascript의 역할만 한다.(반응형)
>
> 4.classList를 활용한 방법
>
> 5.toggle()을 활용한 방법

javscript를 이용해서 CSS를 건드는 좋지 않은 방법의 코딩

```javascript
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#a52a2a";

function handleClick() {
  const currentColor = title.style.color; // rgh로 받는다.

  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR; //rgb 형태가 아닌
}
title.addEventListener("click", handleClick);

init();

//주의
//BASE_COLOR를 핵스형태인 #34495e로 할경우
//init()함수에서 title에 color를 넣을때 나는 헥스형태로 넣었어도 rgh형태로 html에 표시되기 때문에
//const currentColor = title.style.color 을 할때 rgh 형태로 받아온다.
//따라서 BASE_COLOR를 핵스 형트로 하면 rgh와 핵스를 비교하는것이므로 비교가 안됨
```

```css
없음
```

javascript 와 CSS를 따로 분리시킨 코딩(포인트 뿐만아니라 색깔변화도 됨)

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);

  if (!hasClass) {
    title.classList.add(CLICKED_CLASS);
  } else {
    title.classList.remove(CLICKED_CLASS);
  }
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
```

```css
.btn {
  cursor: pointer;
}

.clicked {
  color: blue;
}
```

윗 코딩의 역할을 대신해주는 toggle()을 사용했을때

```javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}
function init() {
  title.addEventListener("click", handleClick);
}

init();
```

```css
.btn {
  cursor: pointer;
}

.clicked {
  color: blue;
}
```

#### 3.1 Making a JS Clock part One

##### 3.1에서의 핵심

> 1.[querySelector vs getElementByClass or Id 비교](https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid)
>
> 2.class 명은 아무렇게나 하지 않고 , CSS , javascript에서도 동일하게 쓸수 있게 적어주는게 좋다.

#### 3.2 Making a JS Clock part Two

##### 3.2에서의 핵심

> 1.setInterval(getTime(), 1000) vs setInterval(getTime,1000) 의 차이점
> 앞에서도 설명했듯이 전자의 경우 함수 먼저 시작해버린다, 후자의 경우 1초후에 함수를 실행한다.
>
> 2.조건문을 쓰지 않고 삼항연산자를 써서 시간,분,초가 10 이하일때 0을 붙이는 방법을 사용해봤다.
> 조건문을 썼을때는 초기화 했던 값이 변화기 때문에 let으로 바꿔줘서 햇는데, 삼항연산자를 쓰니 초기화 햇던 값이 변하는것은
> 아니므로 const를 써도 무방했다.
>
> 3.조건문보다 삼항연산자를 썻을때 더 깔끔한 코드의 형태를 볼수 있었다.

(1). 조건문을 씀

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  let min = date.getMinutes();
  let hour = date.getHours();
  let seconds = date.getSeconds();

  if (hour < 10) {
  }

  if (min < 10) {
    min = `0${min}`;
  }

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  clockTitle.innerHTML = `${hour}:${min}:${seconds}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
```

(2). 삼항연산자를 씀

```javascript
const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const min = date.getMinutes();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${seconds > 9 ? seconds : `0${seconds}`}`;
}

function init() {
  setInterval(getTime, 1000);
}

init();
```

### 3.3 Saving the User Name part One

#### 3.3에서의 핵심

> 1.greeting.js 에서 볼수 있듯이 String값도 객체로 받아서 사용한것을 볼수 있다
> 예를들어 "currentUser"나 "showing" 같은..? 그 이유가 뭘까?
>
> 2.localStorage는 나의 웹에 지역저장소로 key와 value값으로 값을 넣을수 있는 곳이다.
>
> 3.index.html을 보면 클래스명을 2개 지정해놨는데 하나는 자바스크립트에서 사용하기 위해 js-form 또 다른 하나는 CSS를 사용하기위해
> form을 지정해놓은것을 볼수 잇다. CSS에서 js-form을 가져와도 되지만 굳이 클래스명을 따로 2개를 지정해 놓은 이유가 있을거라고
> 생각된다.

```javascript
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const User_LS = "currentUser",
  SHOWING_ON = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_ON);
  greeting.classList.add(SHOWING_ON);
  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(User_LS);

  if (currentUser === null) {
  } else {
    paintGreeting(currentUser);
  }
}

function init() {}

init();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <link rel="stylesheet" href="index.css" />
  </head>

  <body>
    <div class="js-clock">
      <!-- class 명은 아무렇게나 하지 않고 , CSS , javascript에서도 동일하게 쓸수 있게 적어주는게 좋다. -->
      <h1 class="js-title">00:00</h1>
    </div>
    <form class="js-form form">
      <!-- class명은 Css,Javascript에서도 동일하게 쓸수 있도록 적어주는게 좋다고 햇는데
      여기서 보면 js-form 클래느는 js에서 사용하려고 지정해놓은걸 볼수 있고 form은 css에서 사용하려고 지정했다 -->
      <input type="text" name="" id="" placeholder="what is your name?" />
    </form>
    <h4 class="js-greetings greeting"></h4>
    <script src="clock.js"></script>
    <script src="greeting.js"></script>
  </body>
</html>
```

### 3.4 Saving the User Name part Two

#### 3.4에서의 핵심

> 1.locastorage가 어떻게 활용되고 있는지 확인해보자
>
> 2.기능에 맞춰서 함수를 여러개로 선언하는 모습을 유심히 보자
>
> 3.event.preventDefault(); 발생한 event의 기능을 없애버린다.
