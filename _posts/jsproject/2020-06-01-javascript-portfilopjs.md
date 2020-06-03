---
title: "12.포트폴리오 클론코딩 만들기 Javascript(별 100만개)"
excerpt: "javascript 프로젝트 열한번째 CSS"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 내 코드가 엉망진창이라, Ellie님의 HTML을 활용해서 먼저 Javascript를 구현하고 비교해보았다.

## 코딩비교

- 1. 기능에 맞는 javascript 코딩을 구현했는가?

### Javascript 비교(1) - Transparent navbar

- Expert

```js
//Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});
```

### javascript 비교(2) - Scroll to section

- Expert

1. list를 가져온것이 아닌 menu 자체를 가져왔다. querySelectorAll()를 사용하지 않았으므로, 당연히 forEach()를 해줄 필요가 없었다.
2. data-link에 #을 주어서 그 값을 통해 document를 해주어서 해당 section을 찾았다.

```html
<div class="navbar__menu">
  <ul class="navbar__menu">
    <li class="navbar__menu__item active" data-link="#home">home</li>
    <li class="navbar__menu__item" data-link="#about">About</li>
    <li class="navbar__menu__item" data-link="#skills">Skills</li>
    <li class="navbar__menu__item" data-link="#work">My Work</li>
    <li class="navbar__menu__item" data-link="#testimonials">
      Testimonials
    </li>
    <li class="navbar__menu__item" data-link="#contact">Contact</li>
  </ul>
</div>
```

```js
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
```

- Yosup

* forEach()를 두번이나 쓰고 이 기능을 실행했다니..

- 시간면에서도 전문가가 훨씬 빠르게 동작을 하겟다.

```html
<div class="navbar__menu">
  <ul class="navbar__menu">
    <li class="navbar__menu__item active" data-name="home">home</li>
    <li class="navbar__menu__item" data-name="about">About</li>
    <li class="navbar__menu__item" data-name="skills">Skills</li>
    <li class="navbar__menu__item" data-name="work">My Work</li>
    <li class="navbar__menu__item" data-name="testimonials">
      Testimonials
    </li>
    <li class="navbar__menu__item" data-name="contact">Contact</li>
  </ul>
</div>
```

```js
// Scroll to section
// 내가 클릭한 list의 값과 section이 id값이 일치할경우
// 일치하는 section으로 이동한다.
// list에 name의 속성을 주거나 , data속성을 주어서 그 값을 가져오는게 textContent로 가져오는것보다 좋을것 같다라는 생각이 들었다.

const menuItems = document.querySelectorAll(".navbar__menu__item");
const sections = document.querySelectorAll("section");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    sections.forEach((section) => {
      if (section.getAttribute("id") === e.target.dataset.name) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    });
  });
});
```

### javascript 비교(3) - Handle contact me button

- Expert

* 첫번재 방법

```js
const homeContactBtn = document.querySelector(".home__contact");

homeContactBtn.addEventListener("click", () => {
  const scrollTo = document.querySelector("#contact");
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
```

- 두번째 방법 **링크의 이동이 계속 반복되므로, 이 코드를 굳이 반복해서 쓰기 보다는 함수를 만들어 재활용해서 씀**

```js
const homeContactBtn = document.querySelector(".home__contact");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (e) => {
  const target = e.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

homeContactBtn.addEventListener("click", () => {
  scrollintoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoVie({ behavior: "smooth" });
}
```

- Yosup

* 어차피 클릭하면 하나로만 이동하는데 굳이 e.target을 쓸 필요가 있었을까 싶고, 거기에 데이터를 넣어주지 않아도 이동할수 있었음에도 이렇게 작성한것에 반성하자.

```js
// Handle contact me Button
const contactBtn = document.querySelector(".home__contact");

contactBtn.addEventListener("click", (e) => {
  const link = e.target.dataset.link;

  const section = document.querySelector(link);
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
```

### javascript 비교(4) - Transparent home

- Expert : inline으로 작성되는것도 두려워하지 말자.. (inline으로 작성될수도 있는거임..)

```js
const home = document.querySelector(".home__container");

const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});
```

### javascript 비교(5) - Arrow up button

- Expert

* line style을 주기 보다는 classlist를 주고 , trasition을 주었다.

```css
.arrow-up {
  right: 25px;
  bottom: 25px;
  position: fixed;
  z-index: 3;
  font-size: 40px;
  transition: all var(--animation-duration) ease;
  opacity: 0;
  pointer-events: none;
  /* 클릭이 안돼게 함 */
}

.arrow-up.visible {
  opacity: 1;
  pointer-events: auto;
}
```

```js
const arrowUp = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});
```

- Yosup

```js
const arrow = document.querySelector(".arrow");

arrow.addEventListener("click", () => {
  home.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});

document.addEventListener("scroll", () => {
  if (window.scrollY / 1000 > 1) {
    arrow.style.opacity = 1;
  } else {
    arrow.style.opacity = window.scrollY / 1000;
  }
});
```

### javascript 비교(6) - Project filtering&animation

- Expert

* 클릭했던것의 filtering된 요소들은 invisible 을 remove 하고, 그게 아닌요소들은 invisible 을 add 함으로써 간단하게 해결함..

```js
const workBtnContainer = document.querySelector(".work__categories");

const projectContainer = document.querySelector(".work__projects");

const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // span을 눌렀을때에는 filter를 반납할수 없으므로

  if (filter == null) {
    return;
  }

  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });
});
```

- Yosup(1) : CSS를 통해서 filtering 하는방법

- 버튼을 눌렀을때 그 데이터에 맞는요소들이 아닌 것들을 안보이게 하는 방법

* 기존의 것을 안보이게 한다음에, filtering 된 요소들만 보이게 해도 됬지만, 이미 project class가 flex가 되어버린 상태이기 때문에
  display:none을 해줄수가 없어서, 이 방법을 채택해봤다.

- 코드를 더 복잡하게 짜는 능력이 있는듯...

```js
//1. CSS를 통해 분류 하는방법
const workCategories = document.querySelector(".work__categories");

const projects = Array.from(document.querySelectorAll(".project"));

workCategories.addEventListener("click", (e) => {
  if (e.target.dataset.field === undefined) {
    return;
  }
  const clickBtn = e.target.dataset.field;

  //clickbtn를 제외한 나머지에 CSS를 display:none을 해준다

  const filterprojects = projects.filter((project) => {
    if (clickBtn == "all") {
      return;
    }
    return project.dataset.field !== clickBtn;
  });

  projects.forEach((project) => {
    project.classList.remove("invisible");
  });

  //누른것을 제외한 나머지를 invisible로 둠
  filterprojects.forEach((filterproject) => {
    filterproject.classList.add("invisible");
  });
});
```

- Yosup(2) : javascript를 통해서 filtering 하는방법

```js
const workCategories = document.querySelector(".work__categories");

const projects = Array.from(document.querySelectorAll(".project"));

const workProjects = document.querySelector(".work__projects");

workCategories.addEventListener("click", (e) => {
  if (e.target === undefined) {
    return;
  }

  const dataName = e.target.dataset.field;

  const filterProjects = projects.filter((project) => {
    if (dataName == "all") {
      return project;
    } else {
      return project.dataset.field === dataName;
    }
  });
  // 전체 자식요소 제거
  while (workProjects.lastChild) {
    workProjects.removeChild(workProjects.lastChild);
  }

  // filtering한 요소 추가
  for (let i = 0; i < filterProjects.length; i++) {
    workProjects.appendChild(filterProjects[i]);
  }
});
```

### javascript 비교(7) - project animation

- Expert

1. js 의 동작방식에 따라서 코드를 짰다.
2. 특징으로는 setTime 안에 코드를 넣었다는것 , 그 이유는??

- 첫번째 경우 filtering이 된 상태에서 내려간다.

* 두번쨰 경우는 내려간뒤에 필러딩을 한것을 올려보낸다.

```js
const workBtnContainer = document.querySelector(".work__categories");

const projectContainer = document.querySelector(".work__projects");

const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // span을 눌렀을때에는 filter를 반납할수 없으므로

  if (filter == null) {
    return;
  }

  //순서가 눈에 안보였다가 분류했다가 , 3초뒤 눈에보이게
  projectContainer.classList.add("anim-out");

  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });

  projectContainer.classList.remove("anim-out");
  setTimeout(() => {}, 300);
});
```

```js
const workBtnContainer = document.querySelector(".work__categories");

const projectContainer = document.querySelector(".work__projects");

const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // span을 눌렀을때에는 filter를 반납할수 없으므로

  if (filter == null) {
    return;
  }

  projectContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});
```

### javascript 비교(7) - Final touch on button state

- Expert

* 그전에 선택된것만 지움 ---> **선택자를 어떻게 적느냐고 엄청 중요할듯**

- 이 코드가 핵심

```js
const active = document.querySelector(".category__btn.selected");
```

- 하지만 전문가님의 코드의 문제점중 하나가 숫자를 눌렀을때는 button이 클릭되지 않는다는것이지.

```js
const workBtnContainer = document.querySelector(".work__categories");

const projectContainer = document.querySelector(".work__projects");

const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  // span을 눌렀을때에는 filter를 반납할수 없으므로

  if (filter == null) {
    return;
  }

  const active = document.querySelector(".category__btn.selected");
  if (active != null) {
    active.classList.remove("selected");
  }

  e.target.classList.add("selected");

  //순서가 눈에 안보였다가 분류했다가 , 3초뒤 눈에보이게
  projectContainer.classList.add("anim-out");

  projects.forEach((project) => {
    if (filter === "*" || filter === project.dataset.type) {
      project.classList.remove("invisible");
    } else {
      project.classList.add("invisible");
    }
  });

  setTimeout(() => {
    projectContainer.classList.remove("anim-out");
  }, 3000);
});
```

- Yosup

* 나는 특정 부분을 지운것이 아닌 다 class를 제거해버렸네.. (불필요하다.)

```js
const Categoires = document.querySelector(".work__categories");

const cateogriesBtns = document.querySelectorAll(".category__btn");

Categoires.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  if (filter === null) {
    return;
  }

  if (e.target.nodeName === "BUTTON" && filter !== null) {
    removeActive(); //
    e.target.classList.add("active");
  } else if (e.target.nodeName === "BUTTON" && filter !== null) {
    removeActive();
    e.target.parentNode.classList.add("active");
  }
});

function removeActive() {
  cateogriesBtns.forEach((btn) => {
    console.log(btn);
    btn.classList.remove("active");
  });
}
```

### javascript 비교(8) - Navbar toggle button

- Expert

```js
const navbarToggle = document.querySelector(".navbar__toggle-btn");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("display");
});
```

- Yosup : 비슷해서 할게없음

```js
const navbarToggle = document.querySelector(".navbar__toggle-btn");

navbarToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("display");
});
```
