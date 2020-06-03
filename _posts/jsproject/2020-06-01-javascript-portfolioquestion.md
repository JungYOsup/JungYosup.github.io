---
title: "13.포트폴리오 클론코딩 만들기에서 가져가야할 능력들(별 100만개)"
excerpt: "포트폴리오 클론코딩에서 가져가야할 HTML, CSS , JAVASCRIPT"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

### HTML 에서 가져가야할 것

![](/assets/images/project_img/portfolio.png);

1. 다음과 같은 화면에서 배경이 들어갈 div 안에 nav를 넣는것이 아니라, nav 따로 배경이 들어갈 div 따로 만들어줘야한다?

- 만약 fixed를 사용하면 상관없지만 , nav에 sticky를 적용할때 그 sticky의 기준점 범위가 바로 위 부모이므로 sticky의 작동 영역이 한정되버리는 문제가 발생한다 따라서 전문가처럼 HTML을 작성해야지만 이러한 문제가 발생하지 않는다.

* 그런데 일반적으로 nav는 fixed로 해주는것 같다.

[sticky에 관한 정보](https://jungyosup.github.io/css/css18/)

2. section, header 등 테그요소들을 사용하는것에 두려움이 없어야한다. 단순히 HTML 구조를 잡는 용도라기보다 , 어떠한 기능을 넣어줌으로써 좀더 코드의 양을 줄일수 있을것 같다.

3. 공통적으로 쓰여지는 형태가 많으면 , class를 주기보다 그냥 테그만 사용한다.

- Good example

```html
<section id="home" class="section">
  <h1>About Me</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quae
    soluta similique corporis sint! Dolores consequuntur est eos tempora a iure,
    exercitationem officia vitae labore illo eveniet excepturi fuga blanditiis.
  </p>
</section>
<section id="job" class="section">
  <h1>Job introduce</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quae
  </p>
</section>
```

- Bad example

```html
<section id="home" class="section">
  <h1 class="home__title">About Me</h1>
  <p class="home__inform">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quae
    soluta similique corporis sint! Dolores consequuntur est eos tempora a iure,
    exercitationem officia vitae labore illo eveniet excepturi fuga blanditiis.
  </p>
</section>
<section id="job" class="section">
  <h1 class="job__title">Job introduce</h1>
  <p class="job__inform">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quae
  </p>
</section>
```

4. BEM 형식으로 작성할때, class 명이 길어지게 사용하지 않음

5. **버튼을 만들때 , 어떨떄는 a 태그를 사용하고, 어떨때는 button을 사용하고 어떨때는 li 태그를 사용하고 어떨때는 button을 사용함 버튼을 만들때 명확한 구분이 필요할듯**

6. 나중에 데이터를 받아서 HTML에 뿌려줄 것들은 CSS로 작업하는게 아니라, inline으로 작업을 해야한다.

- Good Example

```html
<div class="skill">
  <div class="skill_description">
    <span>Nodejs</span>
    <span>77%</span>
  </div>
  <div class="skill__bar">
    <div class="skill__value" style="width: 77%;"></div>
  </div>
</div>
```

```html
<div class="rightbox__list">
  <span>JAVASCRIPT</span>
  <span>90%</span>
</div>
<div class="percent">
  <div class="percent__right flex_90"></div>
  <div class="percent__left flex_10"></div>
</div>
```

- 7. grid 작업할때, 굳이 li를 쓰던데 div를 많이 씀..(뭐가 더 좋은 방법일까??)

* bad Example

### CSS 에서 가져가야할 것

1. 자주 사용될 요소들은 무조건 root를 만들어서 사용햇다.

```css
:root {
  /* Color */

  --color-white: #ffffff;

  --color-light-white: #eeeeee;

  --color-dark-white: #bdbdbd;

  --color-pink: #fe918d;

  --color-dark-pink: #ff6863;

  --color-dark-grey: #4d4d4d;

  --color-grey: #616161;

  --color-light-grey: #7c7979;

  --color-blue: #73aace;

  --color-yellow: #fff7d1;

  --color-orange: #feb546;

  --color-black: #000000;

  /* Font size */

  --font-large: 48px;

  --font-medium: 28px;

  --font-regular: 18px;

  --font-small: 16px;

  --font-micro: 14px;

  /* Font weight */

  --weight-bold: 700;

  --weight-semi-bold: 600;

  --weight-regular: 400;

  /* size */

  --size-border-radius: 4px;

  /* animation duration */

  --animation-duration: 300ms;
}
```

2. h1 과 h2 등 자주 사용하는 테그들도 미리 지정해줌 --> 코드의 간략화를 위함인듯

```css
h1 {
  font-size: var(--font-large);

  font-weight: var(--weight-bold);

  color: var(--color-black);

  margin: 16px 0px;
}

h2 {
  font-size: var(--font-medium);

  font-weight: var(--weight-semi-bold);

  color: var(--color-black);

  margin: 8px 0;
}

h3 {
  font-size: var(--font-regular);

  font-weight: var(--weight-regular);

  color: var(--color-black);

  margin: 8px 0;
}

p {
  font-size: var(--font-regular);

  font-weight: var(--weight-regular);

  color: var(--color-black);

  margin: 4px 0;
}
```

3. 하위요소 선택자 사용이 많이 없다는 점 , **선택자 사용이 많아지면 나중에 반응형작업을 할때 우선순위에서 영향을 미침**

- Good example

```css
#navbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-pink);
  align-items: center;
  padding: 16px;
  color: var(--color-white);
}

.navbar__menu {
  display: flex;
}

.navbar__logo {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
}
```

- Bad example

```css
#navbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-pink);
  align-items: center;
  padding: 16px;
  color: var(--color-white);
}

#navbar .navbar__menu {
  display: flex;
}

#navbar .navbar__menu .navbar__logo {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
}
```

4. 미디어 쿼리에서는 최소한의 CSS만 작업해야한다.

- 에를들어 즉 여기서는 toggle버튼의 보여지고 안보여지는 정도만 작업해야지 여기서 toggle의 색상이나 어떠한 크기는 하면 안되고 미디어가 아닌 CSS에서 작업을 해줘야한다.

5. 굳이 사용하지 않아도 될 요소에 CSS를 사용하지 말자.

- 공통 HTML : 완벽한 가운데 정렬을 필요로 하지 않은 HTML 이였다.

![](/assets/images/project_img/portfolio.png);

```html
<section id="home" class="section">
  <img src="/imgs/yosup.jpg" alt="" class="home__avatar" />
  <h1 class="home__title">
    Hello, <br />
    I'm Dream Coder
  </h1>
  <h2 class="home__description">
    A Software Engineer currently residing in Sydney, Australia
  </h2>
  <button class="home__contact">
    Contact me
  </button>
</section>
```

- Good Example : text-align 으로 inline 요소의 좌-우 의 가운데 정렬만 해줌

```css
#home {
  background-image: url("/imgs/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px;
  text-align: center;
}
```

- bad Example : 굳이 flex로 모든 요소를 가운데 정렬로 해줌

```css
#home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url("/imgs/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px;
}
```

### Javascript 에서 가져가야할 것(아니 버려야할것..)

1. 좀더 쉽게 할수 있는것을 복잡하게 하는 코딩능력.. 제바류ㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠㅠ

### Q.E

- 1. BEM 구조에 맞는 클래스명 방법

* Good Example

```html
<section id="about" class="section section__container">
  <h1>About Me</h1>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit quae
    soluta similique corporis sint! Dolores consequuntur est eos tempora a iure,
    exercitationem officia vitae labore illo eveniet excepturi fuga blanditiis.
  </p>

  <div class="about__majors">
    <div class="major">
      <div class="major__icon">
        <i class="fab fa-accusoft"></i>
      </div>
      <h2 class="major__title">
        Front-end
      </h2>
      <div class="major__description">
        HTML, CSS, Javascript, TypeScript,
        <br />React, Vue, Web APis
      </div>
    </div>
    <div class="major">
      <div class="major__icon">
        <i class="fab fa-accusoft"></i>
      </div>
      <h2 class="major__title">
        Front-end
      </h2>
      <div class="major__description">
        Android, IOS,React Native, Fullter,
        <br />Java, Swift, Kotlin
      </div>
    </div>
    <div class="major">
      <div class="major__icon">
        <i class="fab fa-accusoft"></i>
      </div>
      <h2 class="major__title">
        Front-end
      </h2>
      <div class="major__description">
        Java, Javascript, Go, NodeJs,
        <br />Rest APIs, GraphQL
      </div>
    </div>
  </div>
</section>
```

- Bad Example

```html
<section>
  <h1 class="read-only">About me</h1>
  <div class="l_wrapper">
    <div class="about">
      <div class="about__container">
        <h1 class="about__container__title">About me</h1>
        <p class="about__container__introduce">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          consequuntur laudantium molestiae minus consequatur? Inventore
          exercitationem totam, et fugiat quod possimus, voluptatibus
          consequuntur qui, esse dicta nesciunt accusantium. Aliquam, veritatis!
        </p>
        <div class="about__container__items">
          <div class="item">
            <div class="item__iconbox">
              <i class="fab fa-accusoft item__icon"></i>
            </div>
            <h2 class="item__title">Front-end</h2>
            <p class="item__detail">
              HTML, CSS, Javascript, TypeScript,React, Vue, Web APis
            </p>
          </div>
          <div class="item">
            <div class="item__iconbox">
              <i class="fab fa-accusoft"></i>
            </div>
            <h2 class="item__title">Mobile</h2>
            <p class="item__detail">
              Android, IOS,React Native, Fullter, Java, Swift, Kotlin
            </p>
          </div>
          <div class="item">
            <div class="item__iconbox">
              <i class="fab fa-accusoft item__icon"></i>
            </div>
            <h2 class="item__title">Back-end</h2>
            <p class="item__detail">
              Java, Javascript, Go, NodeJs, Rest APIs, GraphQL
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

- 2. BEM 을 사용하면서 SASS 방법으로 사용하는 기술은 요즘 실무에서도 사용하는지

- 3. BEM 구조 사용시 CSS 와 HTML이 길이가 늘어나는 현상 방지하는 방법

  - 길게 늘릴필요가 굳이 없음 , CSS도 마찬가지로 선택자를 길게 쓰지 않는다.

* Good Example

```css
#navbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-pink);
  align-items: center;
  padding: 16px;
  color: var(--color-white);
}

.navbar__menu {
  display: flex;
}

.navbar__logo {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
}

.navbar__menu__item {
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: var(--size-border-radius);
}

.navbar__menu__item.active {
  border: 1px solid var(--color-white);
}

.navbar__menu__item:hover {
  background-color: var(--color-dark-pink);
}
```

- Bad Example

```css
#navbar {
  display: flex;
  justify-content: space-between;
  background-color: var(--color-pink);
  align-items: center;
  padding: 16px;
  color: var(--color-white);
}

#navbar .navbar__menu {
  display: flex;
}

#navbar .navbar__menu .navbar__logo {
  font-size: var(--font-medium);
  font-weight: var(--weight-semi-bold);
}

#navbar .navbar__menu .navbar__menu__item {
  padding: 8px 12px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: var(--size-border-radius);
}

#navbar .navbar__menu .navbar__menu__item.active {
  border: 1px solid var(--color-white);
}

#navbar .navbar__menu .navbar__menu__item:hover {
  background-color: var(--color-dark-pink);
}
```

- 4. 좀더 HTML과 CSS를 실무적으로 짜는방법

* 5. 거의 모든 정렬에 flexbox를 사용했는데, flex박스의 남용인가? 아니면 잘 쓰는것일까?

  - **Ellie reply] 만약 가운데 정렬 하는것만 필요하다면, 구지 flex를 쓰시는것보다 text-align을 쓰는게 좋을 것 같아요**

* 6. 가운데 정렬의 4가지(margin , text-align , translate ,line-height,flex)가 어떨때 사용되는걸까?

  - margin auto 같은경우에는 layout을 가운데 정렬할때 사용하는것 같다.

  * text-align은 레이아웃의 h1,h2등을 가운데 정렬할떄 사용하는것 같다.

  * line-height는 자그마한 요소 예를들어 버튼안에 있는 text들을 위 아래 가운데로 정렬하고 싶을때 사용하는것 같다.

  * flex는 grid 요소들같은것이나 가로정렬을 하고 싶을때 사용하는것 같다.

- 7. **배경의 이미지를 줄때, 브라우저의 크기를 조정해도 이미지가 변하지 않게 유지하는 방법이 있을까?**

  - **Ellie reply]**

    요섭님께서 원하시는 행동은:

    스크린 사이즈가 백그라운드 이미지보다 크면: 이미지가 화면에 딱 맞게 표시
    스크린 사이즈가 백그라운드 이미지보다 작으면: 이미지가 반응형이 되지 않게 이렇게 원하시는거 맞나요? 백그라운드 이미지를 사용하고 싶으시다면

    background: no-repeat center fixed url('')
    이렇게 fixed를 쓰시고 **미디어 쿼리를 이용해서 스크린의 너비가 쓰고 계시는 백그라운드 이미지의 너비가 되면 그때부터 cover 속성을 이용하시면 될 것 같아요 :)**

- 8. **flex를 통한 자식 태그들의 가운데 정렬과, text-align을 통한 자식 태그들의(블록요소는 적용X) 가운데 정렬중 어떤게 더 나은 것일까? (flex 남용에 대한 노파심에 의한 질문)**

  - **Ellie reply]** 굳이 flex 기능이 필요하지 않는 경우라면 쓰지 않는게 좋을 것 같아요 하하

* 9. nav 부분을 sticky vs fixed

  - 언제 sticky를 써야하고 언제 fixed를 써야할까? 라는 질문에 대한 답은

    - sticky를 써야하는 디자인일때는 sticky를 , fixed를 써야하는 디자인일때는 fixed를 써야한다.

    * **Ellie reply]** 아 제가 말하는 디자인은 sticky의 속성이 필요한 경우와 그렇지 않은 경우를 말씀 드리는 거였어요 :) 만약 스크린 중간쯤에 위치한 아이를 그 자리에 배치했다가 스크롤링이 될때 그 자리를 유지 하면서 계속 화면에 남아 있도록 한다면 sticky를 쓰시는것이 맞구요.저희의 경우와 같이 navbar가 기존에 있던 자리에서 나와서 제일 상위위에 navbar를 고정 해야 하는 경우에는 fixed를 쓰는것이 더 맞다고 보거든요 :)

    - **Ellie reply]** #navbar에 sticky를 써야하는 디자인으로 하고 계신건가요?
      만약 sticky를 쓰고 싶으시다면 #home에 position을 absolute로 주는게 더 좋을 것 같아요 :) margin-top은 navbar의 높이를 계산해 와야 하기 때문에 자바스크립트로 하셔야 정확할거예요. -100px이라고 수동적으로 숫자를 쓰는것은 좋은 방법이 아니랍니다 :) navbar의 높이가 변경될때마다 100px을 수정해 줘야 하니깐요 ㅎㅎ
