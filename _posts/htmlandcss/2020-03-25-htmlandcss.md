---
title: "2.HTML과CSS를 이용한 연습 세번째"
excerpt: " 'Grid 형태 사이트' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

![grid site](/assets/images/practice/grid/grid.PNG);

- Yosup's Coding

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <div class="l_wrapper">
        <nav>
          <h1 class="rd-only clearfix">Menu</h1>
          <div class="logo">
            <ul class="menu">
              <li>course</li>
              <li>course</li>
              <li>course</li>
              <li>course</li>
              <li>course</li>
            </ul>
          </div>
          <h1>
            <img
              src="/assets/images/practice/grid/header-logo.png"
              alt="로고"
            />
          </h1>
        </nav>
      </div>
    </header>
    <main>
      <h1 class="rd-only">Grid</h1>
      <div class="l_wrapper">
        <ul class="l_row clearfix wd_20">
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover02.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover03.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover04.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover05.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
        </ul>
        <ul class="l_row clearfix wd_20">
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover06.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover07.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover08.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover09.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
          <li class="l_col">
            <div class="item clearfix">
              <img
                src="/assets/images/practice/grid/cover04.png"
                alt="이미지"
              />
              <div class="contents">
                <h2 class="contents-title">The Web Developer</h2>
                <p class="content">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Facere
                  sint magni, consequatur maiores nulla, dolores officia
                  delectus voluptate
                </p>
                <button type="button" class="buy_button">바로구매</button>
                <button type="button" class="view_button">보기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </body>
</html>
```

```css
* {
  margin: 0;
}

li,
ul {
  list-style-type: none;
  padding: 0;
}

button {
  padding: 0;
  border: 0;
}

body {
  background-image: url(/assets/images/practice/grid/bg.png);
  max-width: 1280px;
  margin: 0 auto;
  color: white;
}

/* -----layout----- */

.l_row {
  margin-left: -10px;
  margin-top: 20px;
}

.l_col {
  float: left;
  padding: 0 10px;
  box-sizing: border-box;
}

/* float를 사용하면서 단점이 여기서 느껴지네.
why? 나는 한줄에 5개를 맞추기 위해 20%를 줬다. 하지만 서로의 간격이 필요해 margin을 주었는데 그러나 두줄이 되버리는 현상이 생긴다. flex를 사용했다면 no-wrapper 이걸 사용하면 알아서 해주던데.. 
결론 : 내가 생각한 갯수를 한줄에 맞추기가 생각보다 어렵다는거
그래서 flex와 grid를 사용하는거구나.. */

/* components */

.item {
  background-color: #111;
}

.item img {
  width: 100%;
  display: block;
}

.contents {
  margin: 15px;
}

.contents .contents-title {
  font-weight: 900;
  font-size: 20px;
  padding-bottom: 10px;
}

.contents .content {
  color: gray;
  padding-bottom: 20px;
  font-size: 15px;
}

.contents .buy_button {
  background-color: orangered;
  width: 60%;
  height: 30px;
  color: white;
  font-weight: 400;
}

.contents .view_button {
  background-color: #333;
  width: 36%;
  height: 30px;
  display: inline-block;
  color: white;
  font-weight: 400;
}

/* .logo {
  width: 100%;
  position: relative;
}

.menu {
  margin-top: 15px;
  width: 80%;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-transform: capitalize;
} */

/* -----common----- */

.rd-only {
  display: none;
}

.clearfix::after {
  content: " ";
  display: block;
  clear: both;
}

.clearfix::after {
  display: table;
  content: " ";
}

/* utility */

.wd_50 > li {
  width: 50%;
}
.wd_33 > li {
  width: 33.33333%;
}
.wd_25 > li {
  width: 25%;
}
.wd_20 > li {
  width: 20%;
}
```

- expert's Coding

```html

```

```css
```

- ### 코드 비교 와 꿀 팁~
