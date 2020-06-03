---
title: "11.포트폴리오 클론코딩 만들기 HTML 비교(feat.Ellie)(별 100만개)"
excerpt: "javascript 프로젝트 열한번째 HTML"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 코딩비교

1. BEM에 맞는 올바른 Class 명을 사용하였는가?

2. 문서 구조에 맞는 HTML을 구성하였는가?

- Sectioning Elements 를 적재적소, 그리고 위치도 알맞게 썻는가?

### HTML 비교(1) - header , nav 부분

- Expert Code :

1. 버튼모양을 li 테그를 사용했네, 어차피 어디에 이동하는것이 아니기 때문에 li로 잡았다고함

```html
<nav id="navbar">
  <div class="navbar__logo">
    <i class="fab fa-accusoft"></i>
    <a href="#">Ellie</a>
  </div>
  <div class="navbar__menu">
    <ul class="navbar__menu">
      <li class="navbar__menu__item active">Home</li>
      <li class="navbar__menu__item">About</li>
      <li class="navbar__menu__item">Skills</li>
      <li class="navbar__menu__item">My Work</li>
      <li class="navbar__menu__item">
        Testimonials
      </li>
      <li class="navbar__menu__item">Contact</li>
    </ul>
  </div>
</nav>
<!-- Home -->
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

- Yosup Code :

1. CSS방법론중 BEM에 맞는 명명법을 사용해봤다.

2. 만약 나처럼 html을 작성할경우 즉 container를 만들고 거기에 배경을 넣고 그 배경을 사용하기 위해 그 안에다가 nav를 넣을시 생기는 문제점중 하나가 nav에 css인 sticky를 적용할때, 그 sticky의 기준점 범위가 body가 아닌 container로 한정되버리는 문제가 발생한다 따라서 전문가처럼 HTML을 작성해야지만 이러한 문제가 발생하지 않는다.

(sticky에 관한 정보)[https://jungyosup.github.io/css/css18/]

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

- Expert Code :

* 1. **section의 모습이 공통적으로 쓰여지는 형태가 많으므로(재활용) , 특정이름을 사용하기 보다는 그냥 테그만 사용한다(h1,p).**

- 2. title과 descripion 부분을 div로 잡았다.

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

- Yosup Code

* 1. **공통적으로 사용되는 부분에 이름을 주었는데, 그렇게 하는것보다 그냥 테그만을 사용하는게 좋다.**

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

* 1. 나열같은곳은 list를 사용함

* 2. BEM 형식으로 작성할때, class 명이 길어지게 사용하지 않음

- 3. progress bar 를 작성할때, html에 테그로 존재한다고는 하나 CSS를 하기가 어려워 우리가 원하는 형식으로 만듬

```html
<section id="skills" class="section">
  <div class="section__container">
    <h1>Skills</h1>
    <h2>Skills & Attributes</h2>
    <p>
      Experience with all phases of the software life-cycle. Passion for
      learning new technologies. Capable of working within a team environment
      and independently. Ability to plan and time schedule, work under strict
      time pressure and adapt quicly when needed
    </p>
    <div class="skillset">
      <div class="skillset__left">
        <h3 class="skillset__title">Skills</h3>
        <div class="skill">
          <div class="skill_description">
            <span>HTML</span>
            <span>99%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 99%;"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill_description">
            <span>CSS</span>
            <span>90%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 90%;"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill_description">
            <span>Javascript</span>
            <span>90%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 90%;"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill_description">
            <span>Typescript</span>
            <span>80%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 80%;"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill_description">
            <span>React</span>
            <span>88%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 88%;"></div>
          </div>
        </div>
        <div class="skill">
          <div class="skill_description">
            <span>Nodejs</span>
            <span>77%</span>
          </div>
          <div class="skill__bar">
            <div class="skill__value" style="width: 77%;"></div>
          </div>
        </div>
      </div>
      <div class="skillset__right">
        <div class="tools">
          <h3 class="skillset__title">Tools</h3>
          <ul class="tools__list">
            <li><span>Visual Studio Cpde</span></li>
            <li><span>IntelliJ</span></li>
            <li><span>Android Studio Code</span></li>
            <li><span>IOS development tools</span></li>
            <li><span>Setch app</span></li>
          </ul>
        </div>
        <div class="etc">
          <h3 class="skillset__title">Etc</h3>
          <ul class="etc__list">
            <li><span>Git</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
```

- Yosup Code

* 1. 어떤 나열을 할때는 list를 사용해야하나 하나, 나는 div를 사용했다.. 이거는 고치자.

- 2. BEM 형식으로 작성할때 계속 이어서 작성하는것이 아니라는점..(다시한번 전문가꺼 확인해보고, BEM형식으로 작성하는 방법을 다시 알아보자)

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

* 1. 이미지를 눌렀을때 그거에 대한 사이트로 이동해야하므로 a 테그로 만들어줌
* 2. 이미지는 크기가 클수록 불러오는데 시간이 많이 걸리므로, 최대한 내가 적용할만한 크기에 맞춰서 이미지를 조정하는게 좋다.

```html
<section id="work">
  <h1>My work</h1>
  <h3>Projects</h3>
  <div class="work__categories">
    <button class="category__btn">
      All<span class="category__count">8</span>
    </button>
    <button class="category__btn">
      Front-end<span class="category__count">3</span>
    </button>
    <button class="category__btn">
      Back-end<span class="category__count">3</span>
    </button>
    <button class="category__btn">
      Mobile<span class="category__count">2</span>
    </button>
  </div>
  <div class="work__projects">
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
    <a href="#" class="project">
      <img src="" alt="" />
      <div class="project__description">
        <h3>Youtuve Site</h3>
        <span>Clone coding with HTML and CSS</span>
      </div>
    </a>
  </div>
</section>
```

- Yosup Code

1. 생각 없이 짯다는게 느껴지는게, project를 a가 아닌 div로 사용햇다는것

2. **버튼을 만들때 , 어떨떄는 a 태그를 사용하고, 어떨때는 button을 사용하고 어떨때는 li 태그를 사용했다. 버튼을 만들때 명확한 구분이 필요할듯**

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
<section id="testimonials">
  <h1>Testimonials</h1>
  <h3>see what they say about me</h3>
  <div class="testimonials">
    <div class="testimonial">
      <img src="" alt="" class="testimonial__avatar" />
      <div class="testimonial__speech-bubble">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          repellat doloribus nostrum, inventore aliquam voluptatem odit dolore
          ab consectetur repellendus fugiat eligendi esse, quo a reiciendis enim
          magni aut totam?
        </p>
        <p class="name"><a href="">Ellie</a>/Samsung</p>
      </div>
    </div>
    <div class="testimonial">
      <img src="" alt="" class="testimonial__avatar" />
      <div class="testimonial__speech-bubble">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          repellat doloribus nostrum, inventore aliquam voluptatem odit dolore
          ab consectetur repellendus fugiat eligendi esse, quo a reiciendis enim
          magni aut totam?
        </p>
        <p class="name"><a href="">Ellie</a>/Samsung</p>
      </div>
    </div>
  </div>
</section>
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

* 1. footer라고 안잡고 그냥 section으로 잡아줌, 위아 다르게 h1과 h2에 class명을 주었는데, 그 이유는 색상을 입히기 위함이다.

```html
<section id="contact">
  <h1 class="contact__title">Let's talk</h1>
  <h2 class="contact__email">dream.coder.ellie@gmail.com</h2>
  <div class="contact__links">
    <a href="">
      <i></i>
    </a>
    <a href="">
      <i></i>
    </a>
  </div>
  <p class="contact__right">
    2020 Dream Coding Ellie - All rights reserved
  </p>
</section>
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

### HTML Ellie vs Yosup 총평

1. 나 같은경우는 l_wrapper를 사용했고, 정확한 크기를 주기위해 section명 container 를 사용했는데, 이게 좋은방법일까??

2. 굳이 Sectioning Elements 를 활용하지 않을 필요없이, 활용을 했으면 좋겠다. class도 적어주고..

3. **section의 모습이 공통적으로 쓰여지는 형태가 많으므로(재활용) , 특정이름을 사용하기 보다는 그냥 테그만 사용한다(h1,p).**

4. **버튼모양을 li 테그를 사용했네, 어차피 어디에 이동하는것이 아니기 때문에 li로 잡음**

5. **BEM 형식으로 작성할때, class 명이 길어지게 사용하지 않음**

6. **버튼을 만들때 , 어떨떄는 a 태그를 사용하고, 어떨때는 button을 사용하고 어떨때는 li 태그를 사용하고 어떨때는 button을 사용함 버튼을 만들때 명확한 구분이 필요할듯**

7. section ,header , 등에 큰 부분은 어차피 이름이 변하지 않으므로, class가 아닌 id를 주었다.

8. **CSS를 어떻게 적용할지에 대한 생각도 하면서 HTML을 짜는것이 중요한것같다.**

- nav 부분 작성할때 전문가와 나의 HTML의 차이를 통해, 그 이유가 나중에 CSS 적용때문에 저렇게 작성했어야 했던걸 알게되었다.
