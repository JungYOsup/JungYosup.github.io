---
title: "2.HTML과CSS를 이용한 연습 두번째"
excerpt: " '온라인 강의 사이트' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 온라인 강의 사이트

![](/assets/images/practice/lecture/practice2.PNG)

- Yosup's Coding

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="lecture">
        <header class="intro">
          <div class="intro_title">
            <h1>THE WEB DEVELOPER BOOTCAMP</h1>
            <strong>
              Complete Data Science Training : Mathematics, Statistics,Python,
              Advanced Statistics in Python, Machine & Deep Learning
            </strong>
          </div>

          <div class="intro_img">
            <img
              src="/assets/images/practice/lecture/logo.png"
              alt="lecture logo"
            />
            <strong>Creator Joseph</strong>
          </div>

          <img
            src="/assets/images/practice/lecture/star-sprite.png"
            alt="five start"
            aria-label="lecture 
            evaluation"
          />
        </header>

        <main class="curriculum">
          <h1>Curriculum</h1>
          <section>
            <h1 class="rd-only">Lecture Order</h1>
            <ul>
              <li>
                <div class="box">
                  <h2>Introduction to this Course</h2>
                  <div class="innerbox">
                    <table>
                      <tr class="rd-only">
                        <th>arrow img</th>
                        <th>title</th>
                        <th>date</th>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">A Note On Asking For Help</a></td>
                        <td>20.12</td>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">Adiitional FREE Content</a></td>
                        <td>20.12</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <h2>Introduction to Front End Development</h2>
                  <div class="innerbox">
                    <table>
                      <tr class="rd-only">
                        <th>arrow img</th>
                        <th>title</th>
                        <th>date</th>
                      </tr>
                      <tr>
                        <td aria-label="arrow">▶</td>
                        <td><a href="#">Unit Objectives</a></td>
                        <td>20.12</td>
                      </tr>
                      <tr>
                        <td aria-label="arrow">▶</td>
                        <td>
                          <a href="#">
                            Note about Setting Up Front-end Developer Enviroment
                          </a>
                        </td>
                        <td>20.12</td>
                      </tr>
                      <tr>
                        <td aria-label="arrow">▶</td>
                        <td>
                          <a href="#">Additional FREE Content </a>
                        </td>
                        <td>20.12</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <h2>Introduction to this Course</h2>
                  <div class="innerbox">
                    <table>
                      <tr class="rd-only">
                        <th>arrow img</th>
                        <th>title</th>
                        <th>date</th>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">A Note On Asking For Help</a></td>
                        <td>20.12</td>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">Adiitional FREE Content</a></td>
                        <td>20.12</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </li>
              <li>
                <div class="box">
                  <h2>Introduction to this Course</h2>
                  <div class="innerbox">
                    <table>
                      <tr class="rd-only">
                        <th>arrow img</th>
                        <th>title</th>
                        <th>date</th>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">A Note On Asking For Help</a></td>
                        <td>20.12</td>
                      </tr>
                      <tr>
                        <td>▶</td>
                        <td><a href="#">Adiitional FREE Content</a></td>
                        <td>20.12</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </div>

      <aside class="payment" lang="ko">
        <video controls>
          <source
            src="/assets/images/practice/lecture/sujin2.mp4"
            type="video/wav"
          />
          <source
            src="/assets/images/practice/lecture/sujin2.mp4"
            type="video/ogg"
          />
          <source
            src="/assets/images/practice/lecture/sujin2.mp4"
            type="video/mpeg"
          />
        </video>

        <div class="information">
          <div class="cost">
            <strong>11,000원</strong>
            <strong>5,500원</strong>
          </div>

          <button type="button">장바구니에 추가</button>
          <button type="button">지금 구매</button>
          <div class="detail">
            <strong>이 강좌는 다음을 포함합니다.</strong>
            <ul>
              <li>46.5시간 주문형 동영상</li>
              <li>81개의 글</li>
              <li>85개의 다운로드 가능 리소스</li>
              <li>평생 이용</li>
              <li>모바일 및 TV에 대한 엑세스</li>
              <li>수료증</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  </body>
</html>
```

```css
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  background-image: url(/assets/images/practice/lecture/bg.png);
  color: gray;
}
.rd-only {
  display: none;
}

.wrapper {
  max-width: 1200px;
  margin: 30px auto;
}

.lecture {
  float: left;
  width: 900px;
}

.lecture .intro {
  width: auto;
  background-image: url(/assets/images/practice/lecture/cover.png);
  background-size: cover;
  background-repeat: no-repeat;
  height: 200px;
  padding: 25px 25px;
}

.intro .intro_title {
  width: 700px;
  float: left;
}

.intro .intro_title h1 {
  color: white;
  font-size: 37px;
}

.intro .intro_img {
  float: left;
  width: 100px;
  margin-left: 50px;
  color: white;
}

.intro .intro_img img {
  border-radius: 50%;
  width: 60px;
  height: 60px;
}

.intro .intro_title strong {
  font-size: 18px;
}

.intro img {
  display: block;
}

.intro::after {
  content: " ";
  display: block;
  clear: both;
}

.wrapper::after {
  content: " ";
  display: block;
  clear: both;
}

.curriculum {
  margin-top: 15px;
}
.curriculum h1 {
  padding: 15px 0px 15px 15px;
  color: white;
}

.curriculum section {
  padding: 15px 0px 15px 15px;
}

.wrapper .curriculum {
  background-color: black;
}

.curriculum ul {
  list-style-type: none;
  padding: 0;
}

.curriculum .box {
  background-color: #3c3d3c;
  border-radius: 5px;
  height: 140px;
  margin-top: 15px;
}

.box h2 {
  font-weight: 400;
  font-size: 15px;
  color: white;
  padding-left: 30px;
  padding-top: 10px;
}

.curriculum .innerbox {
  position: relative;
  background-color: black;
  margin: 15px 15px;
  height: 85px;
  border-radius: 5px;
}

.curriculum .innerbox table {
  margin-left: 10px;
}

.innerbox table a {
  text-decoration: none;
  color: gray;
}
.innerbox table a:hover {
  text-decoration: underline;
}

.innerbox table td:last-child {
  position: absolute;
  right: 15px;
}

.wrapper .payment {
  width: 300px;
  height: 939px;
  float: left;
  background-color: black;
  margin: 0 auto;
}

.wrapper video {
  width: 300px;
  height: 250px;
}

.wrapper .payment .cost {
  text-align: center;
  margin: 30px;
}

.payment .cost strong:first-child {
  font-size: 40px;
  color: orangered;
}

.payment .information {
  width: 250px;
  margin: 0 auto;
}

.payment button {
  margin: 0 auto;
  display: block;
  width: 220px;
  height: 35px;
  margin-top: 10px;
  border: 0;
  font-weight: 900;
  color: white;
}

.payment button:nth-child(odd) {
  background-color: orangered;
}
.payment button:nth-child(even) {
  background-color: gray;
}

.payment .detail {
  margin: 0 auto;
  padding-top: 30px;
}
.payment .detail ul {
  padding: 0;
  margin-top: 30px;
  margin-left: 20px;
}

@media screen and (max-width: 1300px) {
  .wrapper .payment {
    width: 900px;
    height: 939px;
    float: left;
    background-color: black;
    margin: 0 auto;
  }
  .wrapper video {
    width: 900px;
    height: 400px;
  }
}
```

- Expert Coding

```html

```

```css
```

---

- ### 코드 비교 와 꿀 팁~

* **1.아직도 반응형 작성방법에 대한 이해가 잘 안됨.. 좀 더 효율적인 코딩이 쉬운 반응형 작업을 하는데 도움이 될것 같다는 결론을 얻음**

- **2.CSS 마진 상쇄(필수로 외워두자)**
  [CSS 마진 상쇄](https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4)

* **3.CSS 마진 상쇄 해결방법**

  ```css
  .clearfix:after {
    content: " ";
    display: table;

    /* 마진 상쇄의 해결방법 : 
    
    가상요소를 만들어 주되 이 문제는 block과 block 사이에서 발생하는 문제이므로  diplay를 block도 inline(inline은 위 아래가 아닌 흐름이자네~)도 아닌요소인 table로 해준다. 
  
    또 다른 해결방법(but 잘 쓰지 않음) : 
  
    부모요소에 경계를 줄수 있는 padding 이나 border를 준다. but 이것은 시각적으로 보일수 있으므로 시각적으로 보이지 않게 하기 위해 display:flow-root (flow-root 는 호환성이 별루..) 나 overflow:hidden 또는 가상요소를 만들어주어 사용한다. 그러나 overflow:hidden를 사용하면 overflow:hidden 자체의 목적인 "넘쳤을때 자른다"라는 의미에 맞지 않게 사용되므로 가상요소를 사용하여 해결해주는것이 좋을것 같다.
    */
  }
  ```

- **4.레이아웃을 먼저 잡는게 중요하며, 레이아웃(뼈대)만 따로하는 테그를 만들어 사용하면 나중에 재활용할수 있다. (그리고 그 레이아웃은 뼈대용도로만 사용해야한다.)**

  **마찬 가지로 공통된 스타일은 별도의 클래스로 만들고 재사용한다. (=== CSS 방법론)**

  ```html
  <div class="l_wrapper">
    <div class="l_sidebar"></div>
  </div>
  <div class="l_main">
    Main
  </div>
  ```

  ```css
  /* ---------------Layours :뼈대---------------------- */

  .l_wrapper {
    width: 960px;
    margin: 0 auto;
  }

  .l_sidebar {
    /* width: 260px; */
    float: right;
    margin-left: 20px;
    width: 300px;
  }

  .l_main {
    border: 10px solid red;
    background-color: green;
    overflow: hidden;
  }

  /* -----Commons : 공통적으로 사용할수 있는 것들-----*/

  .clearfix:after {
    content: " ";
    display: table;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
    background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;
  }

  .button_block {
    display: block;
    text-align: center;
  }
  ```

* **5.css를 작성할때 공통으로 사용되는 요소 , 뼈대로 사용되는 요소, 구성요소 등 따로 분리해서 작성한다.**

  ```css
  /* ---------------Layours :뼈대---------------------- */
  .l_wrapper {
    width: 960px;
    margin: 0 auto;
  }
  .l_sidebar {
    width: 260px;
    float: right;
    margin-left: 20px;
    width: 300px;
  }

  .l_main {
  border: 10px solid red;
  background-color: green;
  overflow: hidden;

  /* ----------------util------------*/
  .mb_5 {
  margin-bottom: 5px;
  }
  .mb_10 {
  margin-bottom: 10px;
  }
  .mb_15 {
  margin-bottom: 15px;
  }

  .mb_20 {
  margin-bottom: 20px;
  }

  /* -----Commons : 공통적으로 사용할수 있는 것들-----*/

  .clearfix:after {
  content: " ";
  display: table;

  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
   background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;

  }

  .button_block {
    display: block;
    text-align: center;
  }

  /* ------------Components---------------- */

  .contents {
   padding: 40px 0;
  }

  .checkout {
   background-color: #666;
  }

  ```

- **6.반응형으로 사용할 형태들은 언제든지 위치에 따라 모양이 바뀌어야하므로 px 보다는 %로 잡는게 좋다.**

* **7.높이를 정할때 height를 쓰는데, 반응형일때는 px보다는 %가 좋으니 %를 사용하려고 했으나, % 는 부모의 높이에 따른 비율이므로 만약 부모의 높이가 없을경우 height에 %를 사용하는것은 무의하다. 따라서 높이를 정할때 사용할수 있는 또다른 방법이 padding-top이다. (padding-top에 사용하는 %는 자기자신의 width에 비례한 높이를 나타낸다.)**

  ```css
  .video {
    position: relative;
    background-color: dodgerblue;
    padding-top: 56.25%;
  }
  ```

- **8.class 이름을 체계적으로 정하기**

  - 1.서로 직접적인 관련있는 하위요소일때 : price의 하위요소인 discount 다 ==> price-discount 처럼 "-" 를 사용하였다.

  ```html
  <p class="price">
    11,000원
    <span class="price-discount">5,500원</span>
  </p>
  ```

  - 2.어떠한 담당요소가 있을때 : layout의 역할을 하는 wrapper이다 ==> l_wrapper , l_sidebar 와 같은 **언더바** 를 사용하였다.

  ```html
  <div class="l_wrapper">
    <div class="l_sidebar"></div>
  </div>
  ```

* **9.자주 사용하는 속성은 utility class로 만든다.(=== CSS 방법론)**

  ```html
  <a href="#" class="button button_block mb_5">장바구니 담기</a>
  ```

  ```css
  /* util */

  .mb_5 {
    margin-bottom: 5px;
  }
  .mb_10 {
    margin-bottom: 10px;
  }

  .mb_15 {
    margin-bottom: 15px;
  }

  .mb_20 {
    margin-bottom: 20px;
  }
  ```

- **10. CSS 방법론(BEM, OOCSS, SMACSS)**

  ![**CSS 방법론**](https://gomdoreepooh.github.io/notes/smacss-bem-oocss)
