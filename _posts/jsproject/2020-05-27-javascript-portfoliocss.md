---
title: "12.포트폴리오 클론코딩 만들기 CSS 비교(feat.Ellie)(별 100만개)"
excerpt: "javascript 프로젝트 열한번째 CSS"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 코딩비교

- 1. 적절하게 CSS를 사용했는가?

  - 굳이 안써도 되는 CSS를 사용했는가?

  - 쉽게 사용했어도 될 CSS인데 어렵게 사용한 CSS가 있나?

  * Mobile 까지 생각하고 CSS를 적용했나?

### CSS 비교(1) - global 부분

- Expert Code :

* 1. 자주 사용될 요소들은 무조건 root를 만들어서 사용햇다.

* 2. h1 과 h2 등 자주 사용하는 테그들도 미리 지정해줌 --> 코드의 간략화를 위함인듯

```css
/* Global */

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

/* Universal tags */
* {
  box-sizing: border-box;
}

/*  */

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  cursor: default;
}

a {
  text-decoration: none;
  color: var(--color-white);
}

ul {
  list-style: none;
  padding-left: 0;
}

button {
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
}

/* Section common */

.section {
  padding: 50px;
  text-align: center;
  margin: auto;
}

.section__container {
  max-width: 1200px;
  margin: auto;
}

/* Typography */

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

### CSS 비교(2) - header , nav 부분

- Expert Code :

* 1. 첫번째로는 **하위요소 선택자 사용을 하지 않았다는점**

- 2. **바뀌지 않을 큰 태그들은 id로 지정했다는점**

* 3. **공통으로 자주 사용될 요소들은 root로 지정해서 사용했다는점**

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

- Yosup Code

```css
.container {
  background-image: url(/imgs/background.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: rgba(255, 255, 255, 0.8);
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 30px 10px;
}

.nav .nav__logo {
  flex: 1 1 50%;
  font-size: 20px;
}

.nav .nav__menubar {
  flex: 1 1 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.nav .nav__menubar a {
  padding: 7px;
  background-color: inherit;
  border-radius: 3px;
}
```

### CSS 비교(3) - 이미지 설명 부분(home, intro)

- Expert Code

* 1. root의 사용으로 좀더 간결해보이는 코딩이 되었다.
* 2. 또한 자주사용되는 테그인 h1,h2,h3 등은 이미 앞에서 padding과 margin이 적용된 상태이므로 여기서 따로 padding과 margin을 줄 필요가 없어서 더 보기 좋은 코드인것 같다.

- 3. **flex를 통한 자식 태그들의 가운데 정렬과, text-align을 통한 자식 태그들의(블록요소는 적용X) 가운데 정렬중 어떤게 더 나은 것일까?**

```css
#home {
  background-image: url("/imgs/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px;
  text-align: center;
}

.home__avatar {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid var(--color-light-white);
}

.home__title,
.home__description {
  color: var(--color-white);
}

.home__contact {
  font-size: var(--font-regular);
  font-weight: var(--weight-bold);
  margin: 24px;
  border: 2px solid var(--color-dark-white);
  border-radius: var(--size-border-radius);
}
```

- Yosup Code

```css
.intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}

.intro .intro__img {
  border-radius: 50%;
  max-width: 130px;
  margin-bottom: 15px;
  display: inline-block;
}

.intro .intro__title {
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  font-size: var(--font-h1);
}

.intro .intro__inform {
  margin-bottom: 15px;
  font-size: var(--font-h3);
}

.intro button {
  border: 2px solid rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  padding: 7px;
  background-color: inherit;
  border-radius: 3px;
}
```

### CSS 비교(4) - 첫번째 section 부분

- Expert Code

* 1. 어차피 h1,h2는 위에서 공통으로 지정해줬기때문에, 따로 CSS를 주지 않았다

* 2. 어차피 h1,h2, block 요소이므로 이것을 포함하는 부모한테 flex 와 flex-direction:column을 주지 않으신것 같다.

```css
.about__majors {
  display: flex;
  justify-content: space-between;
  margin: 80px 0;
}

.major__icon {
  width: 170px;
  height: 170px;
  font-size: 70px;
  line-height: 170px;
  background-color: yellow;
  margin: auto;
  border: 1px solid var(--color-blue);
  border-radius: 50%;
  margin-bottom: 16px;
  color: blue;
}

.major__icon i {
  transition: all var(--animation-duration) ease;
  /* 사용자가 사용하기에 적합한 시간이
  250~350ms */
}

.major__icon:hover i {
  color: var(--color-pink);
  transform: rotate(-30deg) scale(1.1);
}

.major__title,
.major__description {
  color: var(--color-dark-grey);
}

.major__description {
  font-size: var(--font-small);
}
```

- Yosup Code

* 1. **공통적인 요소에도 따로 CSS를 주니까 코드가 길어지는 현상이 발생하였다.**

- 2. **flex를 사용하지 않아도 세로형식으로 diplay가 되는데 굳이 flex-direction : column울 주었다.**

```css
.about {
  margin-bottom: 50px;
}

.about__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}

.about__container__title {
  font-size: var(--font-h1);
  margin-bottom: 20px;
  display: block;
}
.about__container__introduce {
  text-align: center;
  margin-bottom: 20px;
}

.about__container__items {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.about__container__items .item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 1 25%;
}
.about__container__items .item .item__iconbox {
  display: flex;
  width: 150px;
  height: 150px;
  border: 1px solid #5b56f4;
  background-color: inherit;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.about__container__items .item .item__iconbox i {
  font-size: 50px;
  color: #5b56f4;
}

.about__container__items .item .item__title {
  font-size: var(--font-h2);
  margin-bottom: 10px;
}
.about__container__items .item .item__detail {
  text-align: center;
}
```

### CSS 비교(5) - 두번째 section 부분

- Expert Code

- 1. **value 를 통해 width를 적용하게 되면 모든값이 적용되므로, 따로 CSS를 클래스를 만들어서 적용해주실줄 알았지만, 이런 것들은 나중에 데이터를 받아서 표현되어야 하므로 HTML tag에서 적용되어야한다. 이런것들은 따로 추출해서 json에서 관리해서 동적으로 받아온것들을 HTML 코드로 변환해서 자동적으로 생성해야하므로!!**

* 2. 코드의 양이 현저히 적은것이 보인다. 그 이유는, 기존에 많이 사용할 것들의 태그는 이미 만들어져 재활용된다는것과, 굳이 사용하지 않아도 될 CSS를 사용했다는 점과 HTML에서 div가 너무 남용되었다는것

```css
/* skill */
#skills {
  background-color: var(--color-yellow);
}

.skillset {
  display: flex;
  background-color: var(--color-light-grey);
  color: var(--color-light-white);
  margin: 20px 0;
}

.skillset__title {
  color: var(--color-white);
}

.skillset__left {
  flex-basis: 60%;
  background-color: var(--color-dark-grey);
  padding: 20px 40px;
}

.skill {
  margin-bottom: 32px;
}

.skill_description {
  display: flex;
  justify-content: space-between;
}

.skill__bar {
  width: 100%;
  height: 3px;
  background-color: var(--color-grey);
}
.skill__value {
  height: 3px;
  background-color: var(--color-orange);
}

.skillset__right {
  flex-basis: 40%;
}

.tools {
  background-color: var(--color-grey);
}
```

- Yosup Code

* 1. flex에 미쳤나보다.. 굳이 이걸 flex를 사용해서 bar을 나타내다니..

- 2. 코드의 양이 너무 많다..

```css
.skills {
  background-color: #f9f1ca;
  margin-bottom: 50px;
}

.skills__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}

.skills__container__title {
  font-size: var(--font-h1);
  margin-top: 50px;
  margin-bottom: 20px;
}
.skills__container__subtitle {
  font-size: var(--font-h2);
  margin-bottom: 10px;
}

.skills__container__introduce {
  text-align: center;
  margin-bottom: 50px;
}
.skills__container__box {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
}

.box__rightbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  flex: 1 1 60%;
  background-color: #5b5757;
}

.box__rightbox .rightbox__title {
  font-size: var(--font-h3);
  padding: 20px;
}

.box__rightbox ul {
  padding: 0 40px;
  width: 100%;
}

.box__rightbox ul li {
  margin-bottom: 30px;
}

.rightbox__title {
  text-align: center;
  font-size: var(--font-h3);
}

.rightbox__list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.rightbox__list span {
  text-transform: uppercase;
}

.percent {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.percent .percent__right {
  height: 3px;
  background-color: #eac300;
}
.percent .percent__left {
  height: 3px;
  background-color: #7c7979;
}

.box__leftbox {
  color: rgba(255, 255, 255, 0.8);
  flex: 1 1 40%;
  background-color: #7c7979;
  text-align: center;
}

.leftbox__tools {
  height: 60%;
}

.leftbox__tools .tools__title {
  padding: 20px;
  font-size: var(--font-h3);
}

.box__leftbox .leftbox__etc {
  background-color: #ada9a9;
  height: 40%;
}
.leftbox__etc .etc__title {
  padding: 20px;
  font-size: var(--font-h3);
}
```

### CSS 비교(6) - 세번째 section 부분

- Expert Code

```css
```

- Yosup Code

```css
.work {
  color: black;
  margin-bottom: 50px;
}

.work__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.work__container__title {
  font-size: var(--font-h1);
  margin-bottom: 20px;
}

.work__container__subtitle {
  font-size: var(--font-h3);
  margin-bottom: 20px;
}

.work__container__menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
}
.work__container__menu a {
  border: 2px solid rgba(84, 61, 61, 0.39);
  padding: 5px 30px;
  background-color: rgba(255, 255, 255, 0.486);
  border-radius: 3px;
}

.work__container__items {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* 이렇게 grid를 짜는게 맞을려나..?? */
.work__container__items .item {
  flex: 1 1 25%;
  background-color: white;
  margin-left: -10px;
}

.work__container__items .item img {
  padding: 0 0px 10px 10px;
  max-width: 100%;
  vertical-align: top;
}
```

### CSS 비교(7) - 네번째 section 부분

- Expert Code

```css
```

- Yosup Code

```css
.testimonials {
  background-color: #eae5e5;
  margin-bottom: 50px;
}

.testimonials__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin: 0 auto;
}

.testimonials__container__title {
  font-size: var(--font-h1);
  margin-top: 50px;
  margin-bottom: 20px;
}
.testimonials__container__subtitle {
  font-size: var(--font-h3);
  margin-bottom: 20px;
}

.container__items {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container__items .item {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}
.container__items .item img {
  border-radius: 50%;
  width: 130px;
  height: 130px;
}

/* 중복되는 코드 고치는법 */
.container__items .item .item__inform:nth-child(even) {
  width: 100%;
  height: 130px;
  text-align: center;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 20px;
  margin-left: 30px;
}
.container__items .item .item__inform:nth-child(odd) {
  width: 100%;
  height: 130px;
  text-align: center;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 20px;
  margin-right: 30px;
}

.item__inform p {
  padding-bottom: 10px;
}
```

### CSS 비교(8) - footer 부분

- Expert Code

```css
```

- Yosup Code

```css
.talk {
  color: white;
  background-color: #f9a2a2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.talk .talk__title {
  margin: 50px 0px;
  font-size: var(--font-h1);
}

.talk .talk__email {
  margin-bottom: 20px;
  font-size: var(--font-h2);
}

.talk .talk__sns {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
}
.talk .talk__rights {
  margin-bottom: 20px;
  font-size: var(--font-h3);
}
```

### CSS Ellie vs Yosup 총평

- 1. 자주 사용되는 CSS는 역시 root로 변수를 만드는것이 코딩이 더 깔금해보이며, h1,h2,h3,h4 , p 와 같은 자주 사용되므로 같은 간격을 유지하는경우 굳이 계속 CSS를 주기보다 다음과 같이 하는것이 보기 더 깔끔하다.

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

- 2. 굳이 flex를 사용하지 않아도 될 부분에 flex를 사용해서 코드의 양을 늘려버렸다.

* 3. **value 를 통해 width를 적용하게 되면 모든값이 적용되므로, 따로 CSS를 클래스를 만들어서 적용해주실줄 알았지만, 이런 것들은 나중에 데이터를 받아서 표현되어야 하므로 HTML tag에서 적용되어야한다. 이런것들은 따로 추출해서 json에서 관리해서 동적으로 받아온것들을 HTML 코드로 변환해서 자동적으로 생성해야하므로!!**

### 궁금했던 사항

- 1. BEM 구조에 맞는 클래스명 방법

* 2. BEM 을 사용하면서 SASS 방법으로 사용하는 기술은 요즘 실무에서도 사용하는지

* 3. BEM 구조 사용시 CSS 와 HTML이 길이가 늘어나는 현상 방지하는 방법

* 4. 좀더 HTML과 CSS를 실무적으로 짜는방법

- 5. 거의 모든 정렬에 flexbox를 사용했는데, flex박스의 남용인가? 아니면 잘 쓰는것일까?

- 6. 가운데 정렬의 4가지(margin , text-align , translate ,flex)가 어떨때 사용되는걸까?

- 7. **배경의 이미지를 줄때, 브라우저의 크기를 조정해도 이미지가 변하지 않게 유지하는 방법이 있을까?**

* 8. **flex를 통한 자식 태그들의 가운데 정렬과, text-align을 통한 자식 태그들의(블록요소는 적용X) 가운데 정렬중 어떤게 더 나은 것일까? (flex 남용에 대한 노파심에 의한 질문)**

- 꿀팁

```

```
