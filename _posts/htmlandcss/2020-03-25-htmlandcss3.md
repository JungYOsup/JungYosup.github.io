---
title: "3.HTML과CSS를 이용한 연습 세번째"
excerpt: " 'Grid 형태 사이트' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## Grid 형태 사이트

![](/assets/images/practice/grid/grid.PNG);

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
        <nav class="l_nav clearfix">
          <h1 class="rd-only">menu</h1>
          <div class="logo">
            <a href="index.html">
              <img src="/assets/images/practice/grid/header-logo.png" alt="" />
            </a>
          </div>
          <div class="menu">
            <ul class="list">
              <li>course</li>
              <li>course</li>
              <li>course</li>
              <li>course</li>
              <li>course</li>
            </ul>
          </div>
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

.l_nav {
  padding: 0px 10px 0px 0px;
}

.logo {
  float: left;
  width: 20%;
}

.menu {
  float: left;
  width: 80%;
}

.menu .list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 15px;
  font-weight: 400;
  text-transform: capitalize;
}

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

@media screen and (max-width: 990px) {
  .l_row > li {
    width: 50%;
  }
}
```

- expert's Coding

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="expertstyles.css" />
  </head>
  <body>
    <div class="header">
      <div class="l_wrapper">
        Header
      </div>
    </div>

    <div class="contents">
      <div class="l_wrapper">
        <ul class="l_row clearfix">
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
          <li
            class="l_col l_col_4_12 l_col_tablet_6_12 l_col_mobile_12_12 l_col_ld_2_12 "
          >
            <div class="item">
              <img
                src="/assets/images/practice/grid/cover01.png"
                alt=""
                class="item-cover"
              />
              <div class="item-contents">
                <h2>The Web Developer</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi natus optio ex voluptas debitis iste et facilis velit
                  explicabo numquam, iure aspernatur dolores maiores
                  necessitatibus corrupti provident dolore. Saepe, voluptas!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer">
      <div class="l_wrapper">
        Footer
      </div>
    </div>
  </body>
</html>
```

```css
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style-type: none;
}

img {
  max-width: 100%;
  vertical-align: top;
}

/* 이미지의 경우 inline-block이기 때문에 생기는 하단의 공간이 있다.(텍스트도 하단의 공간이 생기는데 그와 마찬가지라고 함..) 이를해결하기 위해 diplay:block을 하거나 vertical-align:top을 해준다고함..
유투브 영상 참조
/

/* 이미지는 max-width : 100%로 잡는게 일반적이다.
width 100%로 잡을경우 예를들어 부모가 너비가 100px인데 
너비가 50px짜리인 이미지가 들어온다 하자 그러면 
그 이미지는 width : 100%에 의해 100px짜리가 되려고 너비가 커지기 때문에 깨지고 만다.

따라서 max-width : 100%로 잡을경우 큰 이미지 즉 
부모의 너비가 100px인데 이미지가 300px짜리의 경우 
100px짜리가 되고 50px짜리는 50px을 그대로 유지하게 된다.

그 이유는 max-width:100% 면 자기가 가진너비보다 작아질순 있으나 더 커질수 없기 때문이다.

따라서 이미지를 받을때 큰 이미지를 준비하는게 편하다.
난 부모의 100px을 채우고 싶은데 작은 이미지를 사용하고 max-width를 사용하면 채우지 못하기 때문이다.*/

/* layout */

.l_row {
  max-width: 960px;
  margin: 0 -10px;
}

.l_col {
  float: left;
  width: 20%;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

/* 지금 float 기반으로 grid를 잡는 방식인데, 이것은 옛날 방식이고 요즘에는 flex와 grid를 사용한다.
또한 float의 목적과도 어긋나는 방식이다.  */

/* 이렇게 float 기반으로 만든 grid는 width가 %로 만들어진 다는게 핵심이다. */

.l_col_12_12 {
  width: 100%;
}
.l_col_11_12 {
  width: 91.66666667%;
}
.l_col_10_12 {
  width: 83.33333333%;
}
.l_col_9_12 {
  width: 75%;
}
.l_col_8_12 {
  width: 66.66666667%;
}
.l_col_7_12 {
  width: 58.33333333%;
}
.l_col_6_12 {
  width: 50%;
}
.l_col_5_12 {
  width: 41.66666667%;
}
.l_col_4_12 {
  width: 33.33333333%;
}
.l_col_3_12 {
  width: 25%;
}
.l_col_2_12 {
  width: 16.66666667%;
}
.l_col_1_12 {
  width: 8.33333333%;
}

.l_col_3_15 {
  width: 20%;
}

/* component */

.item {
  background-color: #333;
}

.item-contents {
  padding: 20px;
}
.item-contents h2 {
  font-size: 30px;
  color: white;
}

.item-cover {
  width: 100%;
  height: 100%;
  display: block;
}

/* common */

.clearfix:after {
  content: " ";
  clear: both;
  display: block;
}

/* Mediaqueries */

@media screen and (min-width: 1400px) {
  .l_row {
    max-width: 1400px;
  }

  .l_col_ld_12_12 {
    width: 100%;
  }
  .l_col_ld_11_12 {
    width: 91.66666667%;
  }
  .l_col_ld_10_12 {
    width: 83.33333333%;
  }
  .l_col_ld_9_12 {
    width: 75%;
  }
  .l_col_ld_8_12 {
    width: 66.66666667%;
  }
  .l_col_ld_7_12 {
    width: 58.33333333%;
  }
  .l_col_ld_6_12 {
    width: 50%;
  }
  .l_col_ld_5_12 {
    width: 41.66666667%;
  }
  .l_col_ld_4_12 {
    width: 33.33333333%;
  }
  .l_col_ld_3_12 {
    width: 25%;
  }
  .l_col_ld_2_12 {
    width: 16.66666667%;
  }
  .l_col_ld_1_12 {
    width: 8.33333333%;
  }
}

/* tablet */
@media screen and (max-width: 760px) {
  /* .l_col{
      width: 50%
  } 

  /* 내가 5단이었던 화면을 화면이 줄었을때 
     2단으로 바꾸고 싶다.
    그런데 .l_col에 직접 width를 주는것은 결과는 만족스럽지만 좋지 못한 방법이다.
    왜냐하면 내가 원지않아도 모든 l_col이 변하기 때문이다. 만약 내가 상단에는 3개를 유지시키고 싶어도 이 코드에 의해 다 2개로 바뀌기 떄문이다.*/

  .l_col_tablet_12_12 {
    width: 100%;
  }
  .l_col_tablet_11_12 {
    width: 91.66666667%;
  }
  .l_col_tablet_10_12 {
    width: 83.33333333%;
  }
  .l_col_tablet_9_12 {
    width: 75%;
  }
  .l_col_tablet_8_12 {
    width: 66.66666667%;
  }
  .l_col_tablet_7_12 {
    width: 58.33333333%;
  }
  .l_col_tablet_6_12 {
    width: 50%;
  }
  .l_col_tablet_5_12 {
    width: 41.66666667%;
  }
  .l_col_tablet_4_12 {
    width: 33.33333333%;
  }
  .l_col_tablet_3_12 {
    width: 25%;
  }
  .l_col_tablet_2_12 {
    width: 16.66666667%;
  }
  .l_col_tablet_1_12 {
    width: 8.33333333%;
  }

  /*그렇다면 어떻게 해결할까? 
    3단으로 바뀔거에다가 l_col_tablet_4_12 클래스를 추가 시켜준다.
    이렇듯 다양한 변화를 하기 위해서는 직접 width를 하는것이 아니라. 적용할 곳에 새로운 클래스를 추가시켜주는것이다.
    이렇게 계속하다보면 HTML의 클래스가 길어질텐데??
    차라리 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다. 


  */
}

/* mobile*/

@media screen and (max-width: 480px) {
  /* .l_col{
        width: 50%
    } 
  
    /* 내가 5단이었던 화면을 화면이 줄었을때 
       2단으로 바꾸고 싶다.
      그런데 .l_col에 직접 width를 주는것은 결과는 만족스럽지만 좋지 못한 방법이다.
      왜냐하면 내가 원지않아도 모든 l_col이 변하기 때문이다. 만약 내가 상단에는 3개를 유지시키고 싶어도 이 코드에 의해 다 2개로 바뀌기 떄문이다.*/

  .l_col_mobile_12_12 {
    width: 100%;
  }
  .l_col_mobile_11_12 {
    width: 91.66666667%;
  }
  .l_col_mobile_10_12 {
    width: 83.33333333%;
  }
  .l_col_mobile_9_12 {
    width: 75%;
  }
  .l_col_mobile_8_12 {
    width: 66.66666667%;
  }
  .l_col_mobile_7_12 {
    width: 58.33333333%;
  }
  .l_col_mobile_6_12 {
    width: 50%;
  }
  .l_col_mobile_5_12 {
    width: 41.66666667%;
  }
  .l_col_mobile_4_12 {
    width: 33.33333333%;
  }
  .l_col_mobile_3_12 {
    width: 25%;
  }
  .l_col_mobile_2_12 {
    width: 16.66666667%;
  }
  .l_col_mobile_1_12 {
    width: 8.33333333%;
  }

  /*그렇다면 어떻게 해결할까? 
      3단으로 바뀔거에다가 l_col_tablet_4_12 클래스를 추가 시켜준다.
      이렇듯 다양한 변화를 하기 위해서는 직접 width를 하는것이 아니라. 적용할 곳에 새로운 클래스를 추가시켜주는것이다.
      이렇게 계속하다보면 HTML의 클래스가 길어질텐데??
      차라리 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다. 
  
  
    */
}
```

- ### 코드 비교 와 꿀 팁~

* **1.이미지는 max-width : 100%로 잡는게 일반적이다.**
  width 100%로 잡을경우 예를들어 부모가 너비가 100px인데
  너비가 50px짜리인 이미지가 들어온다 하자 그러면
  그 이미지는 width : 100%에 의해 100px짜리가 되려고 너비가 커지기 때문에 깨지고 만다.

  따라서 max-width : 100%로 잡을경우 큰 이미지 즉
  부모의 너비가 100px인데 이미지가 300px짜리의 경우
  100px짜리가 되고 50px짜리는 50px을 그대로 유지하게 된다.

  그 이유는 max-width:100% 면 자기가 가진너비보다 작아질순 있으나 더 커질수 없기 때문이다.

  따라서 이미지를 받을때 큰 이미지를 준비하는게 편하다.
  부모의 100px을 채우고 싶은데 작은 이미지를 사용하고 max-width를 사용하면 채우지 못하기 때문이다.

```css
img {
  max-width: 100%;
}
```

- **2.float 기반으로 grid를 잡는 방식은 옛날 방식이고 요즘에는 flex와 grid를 사용한다.** 또한 float의 목적과도 어긋나는 방식이다.

* **3.float 기반으로 만든 grid는 width가 %로 만들어진 다는게 핵심이다.**

- **4.float기반의 grid를 잡을때, grid의 모습이 변화할수 있는 부분의 layout은 하나로만 grid의 너비를 잡는것이 아니라 클래스를 추가시키면, 언제라도 다른 grid의 모습으로 변화할수 있게 만들어야한다.**

  - 첫째, 미리 그리드의 비율을 만들어 놓는다.

  ```css
  .l_col_12_12 {
    width: 100%;
  }
  .l_col_11_12 {
    width: 91.66666667%;
  }
  .l_col_10_12 {
    width: 83.33333333%;
  }
  .l_col_9_12 {
    width: 75%;
  }
  .l_col_8_12 {
    width: 66.66666667%;
  }
  .l_col_7_12 {
    width: 58.33333333%;
  }
  .l_col_6_12 {
    width: 50%;
  }
  .l_col_5_12 {
    width: 41.66666667%;
  }
  .l_col_4_12 {
    width: 33.33333333%;
  }
  .l_col_3_12 {
    width: 25%;
  }
  .l_col_2_12 {
    width: 16.66666667%;
  }
  .l_col_1_12 {
    width: 8.33333333%;
  }
  ```

  - 둘째, 만들어놓은 그리드를 class에 추가시킨다.
    (기존에 너비가 정해졌더라도 클래스가 추가되면 그 너비가 변화할수 있게)

  ```html
  <li class="l_col l_col_4_12"></li>
  ```

  - 셋째, 이렇게 함으로써 layout을 재활용하면서 각기 다른 비율을 가진 grid를 손쉽게 만들수 있다는것이다.

    - bad example

      우리는 l_col을 재활용 해야하는데 재활용하지 못하는 경우가 발생

    ```html
    <ul class="l_row">
      <li class="l_col">1</li>
      <li class="l_col">2</li>
      <li class="l_col">3</li>
    </ul>

    <ul class="l_row">
      <li class="l_col2">4</li>
      <li class="l_col2">5</li>
      <li class="l_col2">6</li>
      <li class="l_col2">7</li>
    </ul>
    ```

    ```css
    .l_col {
      width: 33.3333%;
    }

    .l_col2 {
      width: 25%;
    }
    ```

    또는 class를 더 늘리기 싫어서 자식 선택자를 사용함(내가 햇던것처럼..)


    ```html
    <ul class="l_row wd_33">
      <li class="l_col">1</li>
      <li class="l_col">2</li>
      <li class="l_col">3</li>
    </ul>

    <ul class="l_row wd_25">
      <li class="l_col">4</li>
      <li class="l_col">5</li>
      <li class="l_col">6</li>
      <li class="l_col">7</li>
    </ul>
    ```

    ```css
    .l_col {
      width: 33.3333%;
    }

    .wd_25 li{
      width:25%;
    }

    ```

    - good example

    ```html
    <ul class="l_row">
      <li class="l_col wd_33">1</li>
      <li class="l_col wd_33">2</li>
      <li class="l_col wd_33">3</li>
    </ul>

    <ul class="l_row">
      <li class="l_col wd_25">4</li>
      <li class="l_col wd_25">5</li>
      <li class="l_col wd_25">6</li>
      <li class="l_col wd_25">7</li>
    </ul>
    ```

    ```css

    .wd_25{
      width:25%
    }
    .wd_33{
      width:33%
    }

    ```

    결론 : 클래스의 길이가 늘어나는 것에 걱정을 하지말자 !!

- **5.Media queries의 경우도 크기에 따른 변화를 주기 위해 미리 만들어 놓고 사용한다.**

```css
/* Mediaqueries */

@media screen and (min-width: 1400px) {
  .l_row {
    max-width: 1400px;
  }

  .l_col_ld_12_12 {
    width: 100%;
  }
  .l_col_ld_11_12 {
    width: 91.66666667%;
  }
  .l_col_ld_10_12 {
    width: 83.33333333%;
  }
  .l_col_ld_9_12 {
    width: 75%;
  }
  .l_col_ld_8_12 {
    width: 66.66666667%;
  }
  .l_col_ld_7_12 {
    width: 58.33333333%;
  }
  .l_col_ld_6_12 {
    width: 50%;
  }
  .l_col_ld_5_12 {
    width: 41.66666667%;
  }
  .l_col_ld_4_12 {
    width: 33.33333333%;
  }
  .l_col_ld_3_12 {
    width: 25%;
  }
  .l_col_ld_2_12 {
    width: 16.66666667%;
  }
  .l_col_ld_1_12 {
    width: 8.33333333%;
  }
}

/* tablet */
@media screen and (max-width: 760px) {
  /* .l_col{
    width: 50%
} 

/* 내가 5단이었던 화면을 화면이 줄었을때 
   2단으로 바꾸고 싶다.
  그런데 .l_col에 직접 width를 주는것은 결과는 만족스럽지만 좋지 못한 방법이다.
  왜냐하면 내가 원지않아도 모든 l_col이 변하기 때문이다. 만약 내가 상단에는 3개를 유지시키고 싶어도 이 코드에 의해 다 2개로 바뀌기 떄문이다.*/

  .l_col_tablet_12_12 {
    width: 100%;
  }
  .l_col_tablet_11_12 {
    width: 91.66666667%;
  }
  .l_col_tablet_10_12 {
    width: 83.33333333%;
  }
  .l_col_tablet_9_12 {
    width: 75%;
  }
  .l_col_tablet_8_12 {
    width: 66.66666667%;
  }
  .l_col_tablet_7_12 {
    width: 58.33333333%;
  }
  .l_col_tablet_6_12 {
    width: 50%;
  }
  .l_col_tablet_5_12 {
    width: 41.66666667%;
  }
  .l_col_tablet_4_12 {
    width: 33.33333333%;
  }
  .l_col_tablet_3_12 {
    width: 25%;
  }
  .l_col_tablet_2_12 {
    width: 16.66666667%;
  }
  .l_col_tablet_1_12 {
    width: 8.33333333%;
  }

  /*그렇다면 어떻게 해결할까? 
  3단으로 바뀔거에다가 l_col_tablet_4_12 클래스를 추가 시켜준다.
  이렇듯 다양한 변화를 하기 위해서는 직접 width를 하는것이 아니라. 적용할 곳에 새로운 클래스를 추가시켜주는것이다.
  이렇게 계속하다보면 HTML의 클래스가 길어질텐데??
  차라리 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다. 


*/
}

/* mobile*/

@media screen and (max-width: 480px) {
  .l_col_mobile_12_12 {
    width: 100%;
  }
  .l_col_mobile_11_12 {
    width: 91.66666667%;
  }
  .l_col_mobile_10_12 {
    width: 83.33333333%;
  }
  .l_col_mobile_9_12 {
    width: 75%;
  }
  .l_col_mobile_8_12 {
    width: 66.66666667%;
  }
  .l_col_mobile_7_12 {
    width: 58.33333333%;
  }
  .l_col_mobile_6_12 {
    width: 50%;
  }
  .l_col_mobile_5_12 {
    width: 41.66666667%;
  }
  .l_col_mobile_4_12 {
    width: 33.33333333%;
  }
  .l_col_mobile_3_12 {
    width: 25%;
  }
  .l_col_mobile_2_12 {
    width: 16.66666667%;
  }
  .l_col_mobile_1_12 {
    width: 8.33333333%;
  }
}
```

- **6.4번 5번처럼 하면 클래스가 길어질텐데??? 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다.**

* 7.나는 body에게 margin : 0 auto 를 주어 가운데 정렬을 했는데, expert는 각 부분부분을 wrapper클래스로 묶어서
  css로 .wrapper 에 margin : 0 auto를 주어 가운데 정렬을 했다.
