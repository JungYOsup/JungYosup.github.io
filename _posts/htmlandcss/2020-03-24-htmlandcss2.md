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
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="expertstyles.css" />
    <title>Lecture</title>
  </head>
  <body>
    <!-- l_wrapper에 padding을 주지않고 contents를 굳이 만들어서 padding을 준 이유 ?? 
    정답은 expertstyles.css에 적혀있다. -->
    <div class="contents">
      <div class="l_wrapper">
        <div class="l_sidebar">
          <div class="checkout clearfix">
            <div class="video">
              <iframe
                src="https://player.vimeo.com/video/27246366?color=ffffff"
                width="640"
                height="360"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
                class="video-iframe "
              ></iframe>
            </div>
            <div class="checkout-section">
              <p class="price">
                11,000원
                <span class="price-discount">5,500원</span>
              </p>
            </div>
            <div class="checkout-section">
              <a href="#" class="button button_block mb_5">장바구니 담기</a>
              <a href="#" class="button button_block button_important"
                >바로구매</a
              >
            </div>
            <div class="checkout-section">
              section2
            </div>
          </div>
        </div>
        <div class="l_main">
          <div class="course">
            <div class="course-cover">
              <div class="course-creator">
                <img
                  src="/assets/images/practice/lecture/logo.png"
                  alt=""
                  class="course-creator-logo"
                />
                <div class="course-creator-contents">
                  <strong>Creator</strong>
                  Joseph
                </div>
              </div>
              <div class="course-title">
                <h1>The Web Developer BootCamp</h1>
                <p>
                  Complte Data Science Training : Mathematics, Statistics,
                  Python, Advanced Statisctics in Python, Machine & Depp Lerning
                </p>
              </div>
            </div>
            <div class="course-section">
              <h2>Curriculum</h2>
              <div class="course-section-contents">
                <ul class="curriculum">
                  <li class="curriculum-item clearfix">
                    <h3>Introduction to this Course</h3>
                    <ul class="curriculum-item-list ">
                      <li>
                        <a href="" class="curriculum-link">
                          <span>
                            20:12
                          </span>
                          A Note ON Asking For Help
                        </a>
                      </li>
                      <li>
                        <a href="#" class="curriculum-link">
                          <span>
                            20:12
                          </span>
                          Additional FREE Content
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="curriculum-item clearfix">
                    <h3>Introduction to Front End Development</h3>
                    <ul class="curriculum-item-list ">
                      <li>
                        <a href="#" class="curriculum-link">
                          <span>
                            20:12
                          </span>
                          Unit Objectives
                        </a>
                      </li>
                      <li>
                        <a href="#" class="curriculum-link">
                          <span>
                            20:12
                          </span>
                          Note about Setting Up Front-End Developer Environment
                        </a>
                      </li>
                      <li>
                        <a href="#" class="curriculum-link">
                          <span>
                            20:12
                          </span>
                          Additional FREE Content
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

```css
body,
p {
  background-image: url(/assets/images/practice/lecture/bg.png);
  color: #999;
  margin: 0;
}

h1,
h2,
h3,
ul {
  padding: 0;

  margin: 0;
}
li {
  list-style-type: none;
}

/* l_wrapper , l_sidebar 처럼 class이름에 layout_sidebar의 약어인 l_sidebar라고 나타냈다.
그 이유는 이 부분은 레이아웃만 담당이라는것을 명시하기 위함이라고 한다. 
배경색이라던가 이런것 역시 담당이 아닌 오로지 레이아웃 즉 뼈대만 담당하는 용도라는 것을 명시하기 위함
또한 이렇게 뼈대들은 똑같은 뼈대들이 있는 화면이 있을때 재활용해서 사용 가능하며, 따로 css를 만들어서 import해서 사용해도 
좋을것 같다*/

/* ---------------Layours :뼈대---------------------- */

.l_wrapper {
  max-width: 960px;
  /* max-widh를 했는데 float 된곳은 줄어들지 않는다..??? 그 이유는 뜨기때문일까? */
  margin: 0 auto;
  padding: 0 20px;
}

.l_sidebar {
  /* width: 260px; */
  float: right;
  margin-left: 20px;
  width: 300px;
  margin-left: 0;
}

.l_main {
  overflow: hidden;
  /* float: right; */
  /* width: 680px;  */
  /* overflow: hidden ? 나였으면 main에 일정크기를 먼저 주고 sidebar에도 일정크기를 준다음 
  clear를 이용했을것 같은데... 뭐가 더 나은방법일까? 
  그런데 부모요소가 아닌 그냥 얘한테 overflow : hidden을 주었네, 원래 overflow :hidden의 이미가
  넘어버리면 숨긴다는 얘긴데... 여기서는 어떠한 역할을 하는지 모르곘다..*/
}

/* .l_wrapper::after {
  display: block;
  content: " ";
  clear: both;
} */

/* wrapper에 주면 되지 굳이 contents 클래스를 만들었나 싶었는데, 앞서 말했듯이 l_wrapper는 레이아웃의 담당이고 나중에 다른곳에 
l_wrapper라는 클래스만 적용해서 다시 재활용해서 사용할수도 있으므로 contents라는 클래스를 만들어 거기다가 padding을 주었다.
l_wrapper에 padding을 주면 나중에 다론곳에 사용했을때도 padding이 적용되니까*/

/* ------------Components---------------- */

.contents {
  padding: 40px 0;
}

.checkout {
  background-color: #666;
}

.checkout-section {
  margin: 20px;
  background-color: rgba(255, 255, 255, 0.05);

  /* margin 상쇄 효과 부분 */

  /* 나는 같이 붙어있는 형제한테 margin 20px씩 주면 그 형제의 간격이 40px이 차이날줄 알았는데 20px 차이가 나더라
  블록의 top 및 bottom 마진은 때로는 (결합되는 마진 중 크기가) 가장 큰 한 마진으로 결합(combine, 상쇄(collapsed))됩니다, 마진 상쇄(margin collapsing)로 알려진 행동
  -MDN-*/

  /* 부모박스와 마지막 자식박스의 하단 마진이 겹칠때는 부모 박스의 바깥으로만 랜더링이 되므로 하단의 margin이 0인건처럼 보이게 된다.
  이 문제의 해결방법은 부모요소에 경계를 줄수 있는 padding 이나 border를 준다. but 이것은 시각적으로 보일수 있으므로 
  시각적으로 보이지 않게 하기 위해 display:flow-root (flow-root 는 호환성이 별루..) 나 overflow:hidden 또는 가상요소를 만들어주어 사용한다.
  그러나 overflow:hidden를 사용하면 overflow:hidden 자체의 목적인 "넘쳤을때 자른다"라는 의미에 맞지 않게 사용되므로 가상요소를 사용하여 해결해주는것이 좋을것 같다.*/
}

.video {
  position: relative;
  background-color: dodgerblue;
  padding-top: 56.25%;
}

/* 나중에 비디오가 핸드폰화면에서도 비율을 유지하기 위해서는 px단위 처럼 정해진 값을 주면 안된다.
그래서 사용 한게 % 인데, 그렇다고 해서 height 에 % 를 주면 안됌 
heigh에서 %는 부모의 높이에 따른 비율인데 지금 부모의 높이가 없으므로 안됨  따라서 padding-top를 사용해서 높이를 만들어줌 
padding-top의 %는 자기 자신의 너비에(현재 자기 자신의 너비가 명시되어 있지 않으므로 부모의 너비를 따름 즉 300px) 따른 높이의 비율을 정해줌 , 따라서 paddig-top : 100%는 정사각형이 나오게 됨 
하지만 우리 비디오가 16:9 비율이기 때문에 56.25%를 주면 16:9비율이 만들어져 화면이 꽉 차게 들어간다.
그리고 나중에 우리가 핸드폰 화면에서도 그 비율이 유지가 된다.

padding-top : 100%를 줘도 .video-iframe에 width 와 height 를 100% 를 주었기 때문에 높이와 너비가 꽉차지만 화면이 16:9 비율이므로 화면으로 꽉차지는 않는다. 

*/

.video-iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  /* left: 0;  top: 0;  bottom: 0; right: 0; 가  width : 100% 와 hegiht 100% 인줄알았는데 그게 아닌듯.. */
}

.price {
  font-weight: bold;
  color: orangered;
  font-size: 40px;
}

.price-discount {
  position: relative;
  font-weight: normal;
  color: #333;
  font-size: 0.5em;
}

.price-discount::before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.6em;
  opacity: 0.5;
  height: 2px;
  background-color: white;
}

/* through-line을 직접 만들었는데,  별로 좋은 방법은 아니라고 함*/

.course-cover {
  background-image: url(/assets/images/practice/lecture/cover.png);
  padding: 30px;
  background-size: cover;
  background-position: center;
  position: relative;
}

.course-cover::after {
  content: " ";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.5;
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
}

.course-creator,
.course-title {
  position: relative;
  z-index: 10;
  /* z-index를 주기 위해서는 position을 주어야한다. */
}

/* 텍스트가 흰색이라 잘 안보이는 경우가 있는데,배경을 줄때 어떤 이미지를 주더라도 텍스트가 잘 보이게끔 하기 위해 배경안에 또 다른 레이아웃을 넣어주고 특정 지역을 어둡게 하여 텍스트 있는 쪽은 잘 보이게끔 하기도 한다.*/

.course-section {
  margin: 20px 0px;
}

.course-creator {
  float: right;
  margin-left: 10px;
  width: 100px;
  text-align: right;
}

/* 전문가가 float는 주는 테그가 위에 자리 잡아야한다고 한다.
그 이유를 아직 모르겠다.*/

.course-creator img {
  border-radius: 50%;
  width: 50px;
}

.course-creator-contents {
  padding: 5px;
}
.course-creator-contents strong {
  display: block;
}

.course-title {
  overflow: hidden;
}
/* overfolw : hidden을 주는 이유를 잘 모르겠다..
그리고 그것을 주었을때 왜 그 모양이 나오는지도*/
.course-title h1 {
  color: white;
  font-size: 50px;
  line-height: 1.4;
  font-weight: bold;
  margin-bottom: 20px;
  text-transform: uppercase;
}
/* line-height 에 대해서 찾아보자 */

.course-title p {
  margin-bottom: 20px;
}

.course-section {
  margin: 20px 0;
}
.course-section h2 {
  font-size: 30px;
  color: white;
  border-bottom: 2px solid;
}
.course-section-contents {
}

.curriculum {
  background-color: #333;
}

.curriculum-item {
  background-color: #666;
  margin-bottom: 10px;
}
.curriculum-item:last-child {
  margin-bottom: 0;
}
/* margin 중복현상때문에 사라지긴 하지만 명시해주는것이 좋다. */

.curriculum-item h3 {
  padding: 10px 20px;
  /* marging을 줄경우 상단에 마진 겹침현상이 발생한다. */
}

.curriculum-item-list {
  background-color: #111;
  padding: 20px 0;
  margin: 5px;
}

.curriculum-link {
  background-color: rgba(255, 255, 255, 0.05);
  display: block;
  margin: 5px 20px;
  padding: 10px;
}

.curriculum-link span {
  float: right;
  font-size: 10px;
}
/* CSS방법론에 따르면 CSS선택자로 아이디와 태그를 사용하지 말것을 권장한다고함  */

.curriculum-link::before {
  content: "▶";
  font-size: 10px;
}

.curriculum-link:hover {
  color: white;
}
/* -----Commons : 공통적으로 사용할수 있는 것들-----*/

/* 마진 상쇄가 자주 발생하므로 이것을 통해 해결 */
.clearfix:after,
.clearfix::before {
  content: " ";
  display: table;
  /* 마진 상쇄의 해결방법 : 가상요소를 만들어 주되 이 문제는 block과 block 사이에서 발생하는 문제이므로
  diplay를 block도 inline(inline은 위 아래가 아닌 흐름이자네~)도 아닌요소인 table로 해준다. */
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
  /* a 태그는 inline 요소이므로 padding을 주면 안된다고 했다.
  why? 여기서는 부모밖으로 튀어 나오는 쓸때없는 영역을 차지하기 때문에 하지만 padding을 주고 싶어서 display를 inline-block으로 바꿈  
  
  보통 버튼은 inline-block으로 많이 해줌*/
}

.button_block {
  display: block;
  text-align: center;
}

.button_important {
  background-color: orangered;
}

/* 버튼끼리의 간격을 어떻게 주는게 좋을까?
버튼에 margin-bottom을 준다? 그런데 button은 공통적 요소로 우리가 두기로 했잖아.. 그러면 다른 곳에서도 margin-bottom이 적용 될텐데?? 그러면 차라리 margin들을 사용할수 있게끔 하는 다양한 클래스를 만들어 주자*/

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

/* Typograph */

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  font-size: 100%;
  /* 부모의 font-size를 받아옴 
  일반적인 폰트사이즈는 16px */
}

/* mediaqueries */

@media screen and (max-width: 768px) {
  .l_sidebar {
    width: auto;
    float: none;
  }
}

@media screen and (max-width: 480px) {
  .course-cover {
    text-align: center;
  }
  .course-creator {
    float: none;
    margin: 0;
    width: auto;
    text-align: center;
  }
}
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
    
    가상요소를 만들어 주되 이 문제는 block과 block 사이에서 발생하는 문제이므로  
    diplay를 block도 inline(inline은 위 아래가 아닌 흐름이자네~)도 아닌요소인 table로 해준다. 
  
    또 다른 해결방법(but 잘 쓰지 않음) : 
  
    부모요소에 경계를 줄수 있는 padding 이나 border를 준다. but 이것은 시각적으로 보일수 있으므로 
    시각적으로 보이지 않게 하기 위해 display:flow-root (flow-root 는 호환성이 별루..) 나 
    overflow:hidden 또는 가상요소를 만들어주어 사용한다. 
    그러나 overflow:hidden를 사용하면 overflow:hidden 자체의 목적인 "넘쳤을때 자른다"라는 
    의미에 맞지 않게 사용되므로 가상요소를 사용하여 해결해주는것이 좋을것 같다.
    */
  }
  ```

- **4.레이아웃을 먼저 잡는게 중요하며, 레이아웃(뼈대)만 따로하는 테그를 만들어 사용하면 나중에 재활용할수 있다. (그리고 그 레이아웃은 뼈대용도로만 사용해야한다.) 마찬 가지로 공통된 스타일은 별도의 클래스로 만들고 재사용한다. (=== CSS 방법론)**

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

  [**CSS 방법론**](https://gomdoreepooh.github.io/notes/smacss-bem-oocss)

* **11.float를 주는 테그가 위에 자리 잡아야 한다. 그 이유는???? 나중에 미디어쿼리시 발생하는 모습도 예상했기에 right를 해줌??**

  ```html
  <div class="course-creator">
    <img
      src="/assets/images/practice/lecture/logo.png"
      alt=""
      class="course-creator-logo"
    />
    <div class="course-creator-contents">
      <strong>Creator</strong>
      Joseph
    </div>
  </div>

  <div class="course-title">
    <h1>The Web Developer BootCamp</h1>
    <p>
      Complte Data Science Training : Mathematics, Statistics, Python, Advanced
      Statisctics in Python, Machine & Depp Lerning
    </p>
  </div>
  ```

  ```css
  .course-creator {
    float: right;
    margin-left: 10px;
    width: 100px;
    text-align: right;
  }
  ```

- **12.텍스트가 흰색이라 잘 안보이는 경우가 있는데,배경을 줄때 어떤 이미지를 주더라도 텍스트가 잘 보이게끔 하기 위해 배경안에 또 다른 레이아웃을 넣어주고 특정 지역을 어둡게 하여 텍스트 있는 쪽은 잘 보이게끔 하기도 한다.**

  ```css
  .course-cover {
    background-image: url(/assets/images/practice/lecture/cover.png);
    padding: 30px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .course-cover::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );

    <!-- bacground 부분은 그라데이션을 주기위해 외부에서 가져온거임 -->
  }

  ```

* **13.max-width를 했는데 float 된곳은 줄어들지 않는다..??? 그 이유는 뜨기때문일까?**

* **14.보통 버튼은 inline-block으로 많이 해줌**

  ```css
  .button {
    background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;
    /* a 태그는 inline 요소이므로 padding을 주면 안된다고 했다.
  why? 여기서는 부모밖으로 튀어 나오는 쓸때없는 영역을 차지하기 때문에 하지만 padding을 주고 싶어서 display를 inline-block으로 바꿈  
  
  보통 버튼은 inline-block으로 많이 해줌*/
  }
  ```

- **15.각 기기별 미디어쿼리 적용사이즈**

```css
/*
  ##Device  =  Desktops
  ##Screen  =  1281px  to  higher  resolution  desktops
*/
@media (min-width: 1281px) {
  /* CSS */
}

/* 
  ##Device = Laptops,Desktops
  ##Screen  =  B/w  1025px  to  1280px
*/
@media (min-width: 1025px) and (max-width: 1280px) {
  /* CSS */
}

/* 
  ##Device = Tablets,Ipads  (portrait)
  ##Screen  =  B/w  768px  to  1024px  
*/
@media (min-width: 768px) and (max-width: 1024px) {
  /* CSS */
}

/* 
  ##Device = Tablets,Ipads  (landscape)
  ##Screen  =  B/w  768px  to  1024px  
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  /* CSS */
}

/* 
  ##Device = Low Resolution Tablets,Mobiles  (Landscape)  
  ##Screen  =  B/w  481px  to  767px  
*/
@media (min-width: 481px) and (max-width: 767px) {
  /* CSS */
}

/*
  ##Device  =  Most  of  the  Smartphones  Mobiles  (Portrait)
  ##Screen  =  B/w  320px  to  479px  
*/
@media (min-width: 320px) and (max-width: 480px) {
  /* CSS */
}
```
