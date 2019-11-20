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
