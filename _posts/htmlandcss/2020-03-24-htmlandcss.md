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
