---
title: "9.Ajax Type Ahead with fetch()를 활용한 프로젝트"
excerpt: "javascript 프로젝트 아홉번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 이 프로젝트에서 핵심은 정규화 표현식을 사용했던것이다..

* 코드비교

- **HTML 비교**

* Expert Code

```html
<body>
  <form class="search-form">
    <input type="text" class="search" placeholder="City or State" />
    <ul class="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
</body>
```

- Yosup Code

```html
<body>
  <div class="box">
    <input type="search" placeholder="City or State" class="searchValue" />
    <div class="list"></div>
  </div>
</body>
```

- **CSS 비교**

- Expert Code

```css
html {
  box-sizing: border-box;
  background: #ffc600;
  font-family: "helvetica neue";
  font-size: 20px;
  font-weight: 200;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

input {
  width: 100%;
  padding: 20px;
}

.search-form {
  max-width: 400px;
  margin: 50px auto;
}

input.search {
  margin: 0;
  text-align: center;
  outline: 0;
  border: 10px solid #f7f7f7;
  width: 120%;
  left: -10%;
  position: relative;
  top: 10px;
  z-index: 2;
  border-radius: 5px;
  font-size: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12), inset 0 0 2px rgba(0, 0, 0, 0.19);
}

.suggestions {
  margin: 0;
  padding: 0;
  position: relative;
  /*perspective: 20px;*/
}

.suggestions li {
  background: white;
  list-style: none;
  border-bottom: 1px solid #d8d8d8;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.14);
  margin: 0;
  padding: 20px;
  transition: background 0.2s;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
}

.suggestions li:nth-child(even) {
  transform: perspective(100px) rotateX(3deg) translateY(2px) scale(1.001);
  background: linear-gradient(to bottom, #ffffff 0%, #efefef 100%);
}

.suggestions li:nth-child(odd) {
  transform: perspective(100px) rotateX(-3deg) translateY(3px);
  background: linear-gradient(to top, #ffffff 0%, #efefef 100%);
}

span.population {
  font-size: 15px;
}

.hl {
  background: #ffc600;
}
```

- Yosup Code : 거의 CSS를 하면서 ::-webkit-input-placeholder 를 처음 써봤던것 같은데, 이런것도 배워도야한다는 사실을 기억하고 기억하자

```css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

body {
  background-color: rgb(206, 139, 38);
}

.box {
  width: 400px;
  margin: 0 auto;
}

input {
  width: 400px;
  height: 50px;
  margin-top: 30px;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #999;
  background-color: aliceblue;
  width: 350px;
  height: 40px;
  margin: 0 auto;
}

li:nth-child(even) {
  transform: skewX(-7deg);
}

li:nth-child(odd) {
  transform: skewX(7deg);
}

::-webkit-input-placeholder {
  color: #999;
  text-align: center;
}

.yellow {
  background-color: yellow;
}
```

- 알게된 사실

  - 1.placeholder를 꾸밀수도 있구나. [브라우저에 따른 placeholder 꾸미는 방법](https://css-tricks.com/almanac/selectors/p/placeholder/)

  * 2.transform: skewX(-7deg); 이런것도 있구나..

* **Javascript 비교**

* Expert Code :

```js
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
```

- 사용한 기술

  - 1. spread

  ```js
  const cities = [];
  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
  ```

  이걸 봤을때 json으로 받아온 데이터를 cities의 배열에 push를 통해 넣고 있다. 만약 push를 하지 않고
  cities = data 라고 할경우 cities는 const이기 때문에 오류가 발생하고, cities.push(data)라고 할경우 배열안에 또 배열이 생기는 문제가 생긴다. 그래서 배열을 개별적으로 풀어주기 위해 ...data 즉 spread를 사용하여 배열안에 있는 값을 개별적으로 풀어주었다.

  - 2. 정규표현식 : **정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴**입니다. 자바스크립트에서, 정규 표현식 또한 객체입니다. 이 패턴들은 RegExp의 exec 메소드와 test 메소드 ,그리고 String의 match메소드 , replace메소드 , search메소드 , split 메소드와 함께 쓰입니다 . 이 장에서는 자바스크립트의 정규식에 대하여 설명합니다.

  * 3. new RegExp() : 패턴을 사용한 텍스트 판별에 사용할 **정규 표현식 객체**를 생성합니다. , 정교표현식중 하나임

  * 4. match() : 정규표현식에 사용되는 메서드, 대응되는 문자열을 찾는 RegExp 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.

  - 5. addeventListener('change') : 사용자가 요소 값 변경을 커밋하면 <input>, <select> 및 <textarea> 요소에 대해 change 이벤트가 시작됩니다. 입력 이벤트와 달리 변경 이벤트는 요소 값이 변경 될 때마다 발생하지 않습니다. 따라서 앤터를 눌러주어야지 바뀐 정보를 얻을수 잇다.(즉 실시간이 아님)

  * 하지만 우리가 원하는것은 실시간으로 바뀌는것 input값을 원함, 따라서 'keyup' 이벤트도 같이 써줌

  - 6. addEventListener('keyup') : 내가 key 즉 타자치는것을 땟을때 발생함

    - 따라서 이 두개를 같이 사용함으로써 input의 이벤트의 역할을 하게됨, 그런데 굳이 이둘을 모두 사용하지말고 input 이벤트를 사용하는게 더 좋지 않았을까?

  * 7. 템플릿 리터럴 방식 : 이 프로젝트에서는 map을 이용하고 , return 으로 템플릿 리터럴방식안에 html 태그를 넣었는데, 이런방법이 있으로 하게 되면 나처럼 createElement를 안하면서 쉽게 HTML을 구성할수 있겠구나라는 생각을 함, 또한 **템플릿 리터럴 안에 함수도 넣을수 있다는것을 알게 됨**

    ```js
    <span class="population">${numberWithCommas(place.population)}</span>
    ```

    - [템플릿 리터럴 mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

  - 8. join 함수

    - [join mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

* 알게된 사실

- 1. **정규표현식**을 사용함으로써 , 조건문 없이도 문자열의 특정 내용을 **찾거나** **대체** 또는 **발췌하는데** 사용할수 있게 되었다.

  - 나의 엄청 긴 코드가 반으로 줄어버렸네..

* 2. **템플릿 리터럴 방식** : 이 프로젝트에서는 map을 이용하고 , return 으로 템플릿 리터럴방식안에 html 태그를 넣었는데, 이런방법이 있으로 하게 되면 나처럼 createElement를 안하면서 쉽게 HTML을 구성할수 있겠구나라는 생각을 함, **또한 map의 역할이 기존 배열을 수정하여 새로운 배열을 만드는것에 주된 목적이 있다는것은 맞는데, 저것처럼 배열이 아니더라도 아예 새로운 형태로 만들수도 있다는 것을 배움**

- Yosup Code

```js
"use strict";

const inputElement = document.querySelector(".searchValue");
const listElement = document.querySelector(".list");
const ul = document.createElement("ul");
const colorli = document.querySelectorAll("li");
let result = "";

listElement.appendChild(ul);

function getData() {
  fetch(
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      filterData(json);
    });
}

function filterData(items) {
  if (inputElement) {
    inputElement.addEventListener("input", function (event) {
      result = getValue(event);
      const array = items.filter((item) => {
        if (item.city.includes(result) || item.state.includes(result)) {
          return item;
        }
      });
      console.log(array);
      printValue(array);
    });
  }
}

function getValue(event) {
  // 백스페이에 input되는 값을 제외시키기기 위해
  if (event.target.value != "") {
    return event.target.value;
  }
}

function removeList() {
  const lists = document.querySelectorAll("li");
  lists.forEach((list) => {
    ul.removeChild(list);
  });
}

function printValue(array) {
  removeList();
  array.forEach((element) => {
    const li = document.createElement("li");
    const index = element.city.indexOf(result);

    const index2 = element.state.indexOf(result);

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");

    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);

    //
    if (element.city.includes(result)) {
      if (element.city.length !== index + 1 || index === 0) {
        p1.innerHTML =
          element.city.substring(0, index) +
          `<span class="yellow">${result}</span>` +
          element.city.substring(index + result.length, element.city.length);
      } else {
        p1.innerHTML =
          element.city.substring(0, index) +
          `<span class="yellow">${result}</span>`;
      }
    } else {
      p1.innerHTML = element.city;
    }

    if (element.state.includes(result)) {
      if (element.state.length !== index2 + 1 || index2 === 0) {
        p2.innerHTML =
          element.state.substring(0, index2) +
          `<span class="yellow">${result}</span>` +
          element.state.substring(index2 + result.length, element.state.length);
        // 문자열이 입력됬을경우 찾기 위해
      } else {
        p2.innerHTML =
          element.state.substring(0, index2) +
          `<span class="yellow">${result}</span>`;
      }
    } else {
      p2.innerHTML = element.state;
    }

    p3.innerHTML = element.population;

    ul.appendChild(li);
  });
}

function init() {
  getData();
}

init();
```

- 사용한 기술

  - ajax : ajax는 비동기식 통신방법

  * fetch() : ajax는 비동기적으로 데이터를 주고 받고 하는거일뿐인데 fetch가 나오기 전까지는 구현하는게 어렵다가 , fetch를 통해서 쉽게 데이터를 주고 받을수 있게 되었다.

    - [fetch mdn](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Fetch%EC%9D%98_%EC%82%AC%EC%9A%A9%EB%B2%95)

  * addEvetListener("input" , 함수) : input 이라는 즉 값을 입력하는 이벤트가 발생했을때 함수가 동작하도록 한다. 특이한점은 input 이벤트는 반드시 사용자가 작동시킬 때마다 발생된다.
    - [input mdn](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/input_event)

  - filter() : 조건이 true인 상태만을 리턴하여 새로운 배열을 만듬

* 알게된 사실

- addEventListener() 에서 addEventListener("input",함수명) 과 addEventListener("input",function()}) 를 사용했을때의 차이점
  [addEventListener("input",함수명) 과 addEventListener("input",function()}) 를 사용했을때의 차이점](https://stackoverflow.com/questions/33501696/how-to-return-value-from-addeventlistener)

- **결론** : 이 개념을 통해 그동안 궁금했다 addEventListnenr("click", foo); 방식과 addEventListener("click" function(){}) 의 차이점을 명확하게 알게 되었다.

* addEventListnenr("click", foo)의 경우는 이벤트핸드러(이벤트가 발생할시 실행되는 함수)를 인자(아규먼트) 없이 그냥 실행시키고 싶을때 사용하는것이고

- addEventListener("click" function(){})의 경우는 인자값이 필요한 경우에 사용하는것이다.
