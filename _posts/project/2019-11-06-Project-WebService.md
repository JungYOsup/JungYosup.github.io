---
title: "1. ReactJs로 웹서비스 만들기"
excerpt: "React 프로젝트 첫번째"
categories:
  - project
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## ReactJs 로 웹 서비스 만들기

Nomad Coders를 기반으로 하고 있다.

[Nomad코드](https://academy.nomadcoders.co/);

### 0. Introduction

### 1. Setup

### 2. JSX&Props

#### 2.0 Creating your first React Component

##### _2.0에서의 핵심_

> 1.컴포넌트(component)는 HTML을 반환(return)하는 함수이다.
>
> 2.컴포넌트 선언시 <컴포넌트이름 /> 으로 한다.
>
> 3.JSX란(Javascript XML) 자바스크립트 문법의 확장
>
> 4.react application은 한번에 하나의 Component만 rendering 할수 있다.
> (ex) index.js 은 하나의 컴포넌트만 render)
> 따라서 모든것은 내가 render할 어플리케이션에 구현을 하면된다.(지금은 App컴포넌트에 구현하면됨)

<u>index.js</u>

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; //App.js에서 export default App;을 하지 않으면 import를 할수 없다.

ReactDOM.render(<App />, document.getElementById("root"));
//<App/> 컴포넌트를 Dom 탐색해서 id가 root인 곳으로 보냄
//render로 보낼때 컴포넌트를 2개 집어넣을수 없다.예를들어 ReactDOM.render(<App /><Yosup />, document.getElementById("root")); (x)
```

<u>App.js</u>

```javascript
import React from "react"; //Component를 만들기 위해서는 react를 Import 해야한다

function App() {
  return <div className="App">Hello</div>;
}

export default App; // Component를 외부에서 import하기위해서
```

<u>index.html</u>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!-- 코드는 <div id="root"></div>만 있지만 실질적으로는 
    <div id="root"><div className="App">Hello</div></div> 이다.
    -->
  </body>
</html>
```

#### 2.1 Reusable Components with JSX + Props

##### _2.1에서의 핵심_

> 1.컴포넌트(components)에 정보를 보낼수 있다.
>
> 2.컴포넌트는 재사용이 가능하다.
>
> 3.Es6 기능으로 객체의 내부값을 아규먼트로 받을수 있게 되었다.

```javascript
import React from "react";

function Food(props) {
  return <h1>I like {props.favorite}</h1>;

  //args = 매개변수 는 props.favorite처럼 .을 쓸수가 없다.
  //그런다면 props의 특정값을 가져오기 위해서는 어떻게 해야할까?
  //ES6에서 그 문제를 해결해 주었는데 {}를 하면 props의 내부값을 가져올수 있다.
  //따라서
  //function Food({favorite}) {
  // return <h1>I like {favorite}</h1>;
  //}를 사용할경우 같은 결과값을 얻을수 있다.
}

function App() {
  return (
    <div>
      <h1>Hello</h1>

      <Food favorite="kimchi" abc="abc" />
      <Food favorite="kimchi2" abc="abc2" />
      <Food favorite="kimchi3" abc="abc3" />
      <Food favorite="kimchi4" abc="abc4" />
    </div>
  );
}

export default App;
```

### 3. State

### 4.Making the Movie App

### 5. Conclusions

```

```
