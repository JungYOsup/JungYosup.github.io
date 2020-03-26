---
title: "1.HTML과CSS를 이용한 연습 첫번째"
excerpt: " '공연 일정 사이트' 전문가와 코린이의 코딩 비교"
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 공연 일정 사이트

![](/assets/images/practice/tour/practice1.PNG)

- Yosup's Coding

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Word Tour</title>
  </head>
  <body>
    <header>
      <div class="upperbg">
        <h1 class="upperlogo">WORLD TOUR</h1>
      </div>
    </header>

    <main>
      <h1 class="rd-only">Tour Schedule</h1>
      <div class="box">
        <div class="boxitem">
          <img src="/assets/images/practice/tour/cover01.png" alt="" />
          <div class="schedule">
            <h1>2011</h1>
            <h2>TOUR ONE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium non facere dolorem eveniet recusandae possimus
              commodi, quia quo, cupiditate sed excepturi nesciunt quaerat, quam
              dolore voluptate ipsum minus tempore?
            </p>
          </div>
        </div>
        <div class="boxitem">
          <img src="/assets/images/practice/tour/cover02.png" alt="" />
          <div class="schedule">
            <h1>2013</h1>
            <h2>TOUR TWO</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium non facere dolorem eveniet recusandae possimus
              commodi, quia quo, cupiditate sed excepturi nesciunt quaerat, quam
              dolore voluptate ipsum minus tempore?
            </p>
          </div>
        </div>
        <div class="boxitem">
          <img src="/assets/images/practice/tour/cover03.png" alt="" />
          <div class="schedule">
            <h1>2015</h1>
            <h2>TOUR THREE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium non facere dolorem eveniet recusandae possimus
              commodi, quia quo, cupiditate sed excepturi nesciunt quaerat, quam
              dolore voluptate ipsum minus tempore?
            </p>
          </div>
        </div>
        <div class="boxitem">
          <img src="/assets/images/practice/cover04.png" alt="" />
          <div class="schedule">
            <h1>2015</h1>
            <h2>TOUR THREE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium non facere dolorem eveniet recusandae possimus
              commodi, quia quo, cupiditate sed excepturi nesciunt quaerat, quam
              dolore voluptate ipsum minus tempore?
            </p>
          </div>
        </div>
        <div class="boxitem">
          <img src="/assets/images/practice/tour/cover05.png" alt="" />
          <div class="schedule">
            <h1>2015</h1>
            <h2>TOUR THREE</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              accusantium non facere dolorem eveniet recusandae possimus
              commodi, quia quo, cupiditate sed excepturi nesciunt quaerat, quam
              dolore voluptate ipsum minus tempore?
            </p>
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
```

```css
* {
  box-sizing: content-box;
  margin: 0;
}

body {
  background-image: url(/assets/images/practice/tour/bg.png);
  color: white;
}

.rd-only {
  display: none;
}

.upperbg {
  position: relative;
  background-image: url(/assets/images/practice/tour/cover.png);
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
}
/* 사진의 위치를 어떻게 조정해야할지 모르곘다. */

.upperlogo {
  position: absolute;
  /* position : absolute가 되었기 때문에 이상있는 block으로 형성된다.
  width를 주지 않으면 글자의 크기만큼 차지한다. */
  left: 50%;
  /* left 50%가 아닌 40%를 했는데 왜 가운데에 위치하지.?? */
  top: 50%;
  /* font-size: 45px;
  color: white;
  border-top: 7px solid white;
  border-bottom: 7px solid white; */
}

.box {
  position: relative;
  max-width: 600px;
  margin: 10px auto;
  background-color: inherit;
}
.box::before {
  position: absolute;
  content: " ";
  width: 4px;
  height: 100%;
  background-color: dodgerblue;
  left: 49.5%;
  top: 20px;
}

.boxitem {
  position: relative;
  width: 50%;
  margin: 0 -15px;
  height: 300px;
  background-color: black;
}
.boxitem::before {
  width: 15px;
  height: 15px;
  background-image: url(/assets/images/practice/tour/cover.png);
  border: 2px solid dodgerblue;
  position: absolute;
  content: " ";

  border-radius: 50%;
}

.boxitem img {
  width: 100%;
}

.boxitem:nth-child(even) {
  margin-top: -50px;
  margin-left: auto;
}
.boxitem:nth-child(3n) {
  margin-top: -50px;
}

.schedule {
  margin: 10px;
}
.schedule h1 {
  font-size: 25px;
}

.schedule p {
  font-size: 5px;
}

@media screen and (max-width: 500px) {
  .boxitem:nth-child(even) {
    margin-top: 0px;
    margin-left: 0;
    margin: 0 -15px;
  }
  .boxitem:nth-child(3n) {
    margin-top: 0px;
  }

  .schedule {
    margin: 15px 30px;
  }
}
```

- Expert's Coding

```html
<body>
  <div class="wrapper">
    <h1>WORLD TOUR</h1>
    <ul class="timeline">
      <li class="timeline-item">
        <div class="tour">
          <img
            src="/assets/images/practice/lecture/cover01.png"
            alt=""
            class="tour-cover"
          />
          <div class="tour-contents">
            <strong>2011</strong>
            Tour ONE
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              praesentium odit quis. Dicta eveniet magnam est id ipsa culpa
              expedita excepturi iste, ratione quidem iure, placeat ut, hic
              delectus dignissimos?
            </p>
          </div>
        </div>
      </li>
      <li class="timeline-item">
        <div class="tour">
          <img
            src="/assets/images/practice/cover02.png"
            alt=""
            class="tour-cover"
          />
          <div class="tour-contents">
            <strong>2013</strong>
            Tour TWO
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              praesentium odit quis. Dicta eveniet magnam est id ipsa culpa
              expedita excepturi iste, ratione quidem iure, placeat ut, hic
              delectus dignissimos?
            </p>
          </div>
        </div>
      </li>
      <li class="timeline-item">
        <div class="tour">
          <img
            src="/assets/images/practice/cover03.png"
            alt=""
            class="tour-cover"
          />
          <div class="tour-contents">
            <strong>2015</strong>
            Tour THREE
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
              praesentium odit quis. Dicta eveniet magnam est id ipsa culpa
              expedita excepturi iste, ratione quidem iure, placeat ut, hic
              delectus dignissimos?
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</body>
```

```css
body,
h1,
ul {
  margin: 0px;
  padding: 0px;
}

ul {
  list-style-type: none;
}

body {
  background-image: url(/assets/images/practice/tour/bg.png);
  background-color: #0e0e0e;
  color: white;
}

.wrapper {
  max-width: 700px;
  /* width 는 고정값 
  max-width는 1200보다 더 커지지 못하게하고 그 화면의 모습을 유지함.?  */
  padding: 0 20px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  padding: 50px 0;
  margin: 0 -40px;
}

.timeline::before {
  content: " ";
  background-color: dodgerblue;
  position: absolute;
  width: 4px;
  bottom: 0;
  left: 50%;
  top: 0;
  margin: 100px 0 -100px;
  /* top bottom 등에 px을 붙이는거와 단위가 없을떄의 차이가 뭐지? */
  transform: translate(-50%);
  /* 이게뭐지..?? */
}
.timeline-item {
  width: 50%;
  /* width의 50% 변화없이 가운데를 비울수 있다. */
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
}

.timeline-item::before {
  content: " ";
  background-color: #0e0e0e;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 5px solid dodgerblue;
  right: 0;
  margin: 50px -19px;
}

.timeline-item::after {
  content: " ";
  background-color: dodgerblue;
  position: absolute;
  right: 0;
  width: 20px;
  height: 5px;
  top: 65px;
  margin: 0px 20px;
}

.timeline-item:nth-child(even) {
  margin-left: auto;
  margin-top: -100px;
  margin-bottom: -100px;

  /* 지그제그 모양만들기 위함 */
}

.timeline-item:nth-child(even)::before,
.timeline-item:nth-child(even)::after {
  left: 0;

  /* 지그제그 모양만들기 위함 */
}

.tour-cover {
  width: 100%;
}
```

- ### 코드 비교

  - **HTML 비교**

  1. 나는 li 테그를 사용하지 않았지만 , 전문가는 li 테그를 사용하여 HTML을 구성하였다는 것
     (-> 특정 순서에 따른거는 li를 활용하여 사용하도록 하자)

  - **CSS 비교**

  2. CSS 초기화 : 각 내장된 브라우저에서 제공하는 스타일링이 다르기 때문에 초기화 시켜 브라우저마다 스타일링의 차이점을 없애기 위함임
     , but 단점도 있다하니.. 사용 여부는 아직 미정

  ```css
  body,
  h1,
  ul {
    margin: 0px;
    padding: 0px;
  }
  ```

  3. 지그제그 모양을 만들어 주기위해 나는 두곳에 짝수 홀수에 margin-top을 주었는데, 그렇게 할필요 없이 한곳에 margin-top과 margin-bottom을 주는것만으로도 지그제그 모양이 만들어졌다.

  ```css
  .boxitem:nth-child(even) {
    margin-top: -50px;
    margin-left: auto;
  }
  .boxitem:nth-child(3n) {
    margin-top: -50px;
  }
  ```

  ```css
  .timeline-item:nth-child(even) {
    margin-left: auto;
    margin-top: -100px;
    margin-bottom: -100px;

    /* 지그제그 모양만들기 위함 */
  }
  ```

  4. transform : translate(-50%) 의 의미 , x 축으로 -50%만큼 이동
     translate(x,y) : 요소의 위치를 X축으로 x만큼, Y축으로 y만큼 이동시킨다.

  5. Zero of anything is zero. 0px = 0% = 0em = 0pt = 0

  6. max-width 와 min-width

  max-width 는 지정된 값보다 더 커지게 못하며 그 이하로는 같은 화면의 모습을 유지시키는것 같음

  min-width 는 지정된 값보다 더 작아지게 못하며 그 이상으로는 같은 화면의 모습을 유지시키는것 같음

  **6. 로고의 위치..**

  ```css
  position: absolute;
  /* position : absolute가 되었기 때문에 이상있는 block으로 형성된다.
  width를 주지 않으면 글자의 크기만큼 차지한다. */
  left: 40%;
  /* left 50%가 아닌 40%를 했는데 왜 가운데에 위치하지.?? */
  top: 30%;
  font-size: 45px;
  width: 310px;
  color: white;
  border-top: 7px solid white;
  border-bottom: 7px solid white;
  ```

  로 했는데 %는 부모에 따라 결정된다고 해서 50%씩 주면 화면의 가운데에 위치할줄 알았는데, 그러지 않는다.. 그 이유가 너무 궁금하다.

---
