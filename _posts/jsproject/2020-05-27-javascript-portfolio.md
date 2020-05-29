---
title: "11.포트폴리오 클론코딩 만들기(feat.Ellie)(별 100만개)"
excerpt: "javascript 프로젝트 열한번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 코딩비교

- 1. BEM에 맞는 올바른 Class 명을 사용하였는가?

- 2. 문서 구조에 맞는 HTML을 구성하였는가?

  - Sectioning Elements 를 적재적소, 그리고 위치도 알맞게 썻는가?

- 3. 적절하게 CSS를 사용했는가?

  - 굳이 안써도 되는 CSS를 사용했는가?

  - 쉽게 사용했어도 될 CSS인데 어렵게 사용한 CSS가 있나?

  * Mobile 까지 생각하고 CSS를 적용했나?

### HTML 비교(1) - header , nav 부분

- Expert Code

```html

```

- Yosup Code : CSS방법론중 BEM에 맞는 명명법을 사용해봤다.

```html
<header>
  <div class="l_wrapper">
    <div class="container">
      <nav class="nav">
        <h1 class="read-only">MenuBar</h1>
        <div class="nav__logo">
          <i class="fab fa-accusoft">Ellie</i>
        </div>
        <div class="nav__menubar">
          <a class="selected">Home</a>
          <a>About</a>
          <a>Skills</a>
          <a>My work</a>
          <a>Testimonials</a>
          <a>Contact</a>
        </div>
      </nav>
      <div class="intro">
        <img src="/imgs/yosup.jpg" alt="요섭이미지" class="intro__img" />

        <span class="intro__title">
          <h1>Hello,</h1>
          <h1>I'm Dream Coder</h1>
        </span>
        <h3 class="intro__inform">
          A Software Engineer currently residing in Sydney, Australia
        </h3>
        <button>
          CONTACT ME
        </button>
      </div>
    </div>
  </div>
</header>
```

### HTML 비교(2) - 첫번째 section 부분

- Expert Code

```html

```

- Yosup Code

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

### HTML 비교(3) - 두번째 section 부분

- Expert Code

```html

```

- Yosup Code

```html
<section>
  <h1 class="read-only">Skill</h1>
  <div class="l_wrapper">
    <div class="skills">
      <div class="skills__container">
        <h1 class="skills__container__title">Skills</h1>
        <h2 class="skills__container__subtitle">Skills & Attributes</h2>
        <p class="skills__container__introduce">
          Experience with all phases of the software life-cycle. Passion for
          learning new technologies. Capable of working within a team
          environment and independently. Ability to plan and time schedule, work
          under strict time pressure and adapt quicly when needed
        </p>
        <div class="skills__container__box">
          <div class="box__rightbox">
            <h3 class="rightbox__title">skills</h3>
            <ul>
              <li>
                <div class="rightbox__list">
                  <span>HTML</span>
                  <span>99%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_99"></div>
                  <div class="percent__left flex_1"></div>
                </div>
              </li>
              <li>
                <div class="rightbox__list">
                  <span>CSS</span>
                  <span>90%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_90"></div>
                  <div class="percent__left flex_10"></div>
                </div>
              </li>
              <li>
                <div class="rightbox__list">
                  <span>JAVASCRIPT</span>
                  <span>90%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_90"></div>
                  <div class="percent__left flex_10"></div>
                </div>
              </li>
              <li>
                <div class="rightbox__list">
                  <span>TYPESCRIPT</span>
                  <span>80%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_80"></div>
                  <div class="percent__left flex_20"></div>
                </div>
              </li>
              <li>
                <div class="rightbox__list">
                  <span>REACT</span>
                  <span>88%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_88"></div>
                  <div class="percent__left flex_12"></div>
                </div>
              </li>
              <li>
                <div class="rightbox__list">
                  <span>NoDEJS</span>
                  <span>77%</span>
                </div>
                <div class="percent">
                  <div class="percent__right flex_77"></div>
                  <div class="percent__left flex_23"></div>
                </div>
              </li>
            </ul>
          </div>
          <div class="box__leftbox">
            <div class="leftbox__tools">
              <h3 class="tools__title">Tools</h3>
              <ul>
                <li>Android development tools</li>
                <li>iOS development tools</li>
                <li>sublime Text with Plug-ins</li>
                <li>Visual Studio</li>
                <li>Team Foundation</li>
                <li>Adobe Programs</li>
                <li>Sketch app</li>
              </ul>
            </div>

            <div class="leftbox__etc">
              <h3 class="etc__title">
                Etc
              </h3>
              <ul>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### HTML 비교(4) - 세번째 section 부분

- Expert Code

```html

```

- Yosup Code

```html
<section>
  <h1 class="read-only">My work</h1>
  <div class="l_wrapper">
    <div class="work">
      <div class="work__container">
        <h1 class="work__container__title">My work</h1>

        <h3 class="work__container__subtitle">
          projects
        </h3>

        <div class="work__container__menu">
          <a>ALL</a>
          <a>Front-end</a>
          <a>Back-end</a>
          <a>Mobile</a>
        </div>

        <div class="work__container__items">
          <!-- 이미지를 여기다 주는게 맞을까? 아니면 백그라운드를 주는게 맞을까? -->
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### HTML 비교(5) - 네번째 section 부분

- Expert Code

```html

```

- Yosup Code

```html
<section>
  <div class="l_wrapper">
    <div class="testimonials">
      <div class="testimonials__container">
        <h1 class="testimonials__container__title">
          Testimonials
        </h1>
        <h3 class="testimonials__container__subtitle">
          see what they say about me
        </h3>
        <div class="container__items">
          <div class="item">
            <img src="/imgs/yosup.jpg" alt="" />
            <div class="item__inform">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                maiores illo. Deleniti optio voluptatem quo recusandae sequi
                nostrum veritatis. Aliquid molestias animi commodi at illum,
                sapiente exercitationem quod cumque a!
              </p>
              <span>Ellie</span>
              <span>/</span>
              <span>Tigerspike</span>
            </div>
          </div>
          <div class="item">
            <div class="item__inform">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet,
                maiores illo. Deleniti optio voluptatem quo recusandae sequi
                nostrum veritatis. Aliquid molestias animi commodi at illum,
                sapiente exercitationem quod cumque a!
              </p>
              <span>Ellie</span>
              <span>/</span>
              <span>Tigerspike</span>
            </div>
            <img src="/imgs/yosup.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### HTML 비교(5) - footer 부분

- Expert Code

```html

```

- Yosup Code

```html
<footer>
  <div class="l_wrapper">
    <div class="talk">
      <h1 class="talk__title">Let's talk</h1>
      <h2 class="talk__email">dream.coder.ellie@gmail.com</h2>
      <div class="talk__sns">
        <i class="fab fa-accusoft"></i>
        <i class="fab fa-accusoft"></i>
      </div>
      <h1 class="talk__rights">
        2020 Dream Coding Ellie - All rights reserved
      </h1>
    </div>
  </div>
</footer>
```

### CSS 비교(1) - header , nav 부분

- Expert Code

```css
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

### CSS 비교(2) - 첫번째 section 부분

- Expert Code

```css
```

- Yosup Code

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

### CSS 비교(3) - 두번째 section 부분

- Expert Code

```css
```

- Yosup Code

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

### CSS 비교(4) - 세번째 section 부분

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

### CSS 비교(5) - 네번째 section 부분

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

### CSS 비교(6) - footer 부분

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

- 궁금했던 사항

* 1. BEM 구조에 맞는 클래스명 방법

- 2. BEM 을 사용하면서 SASS 방법으로 사용하는 기술은 요즘 실무에서도 사용하는지

- 3. BEM 구조 사용시 CSS 와 HTML이 길이저니느 현상 방지하는 방법

- 4. 좀더 HTML과 CSS를 실무적으로 짜는방법

* 꿀팁
