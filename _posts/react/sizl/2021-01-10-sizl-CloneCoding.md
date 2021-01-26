---
title: "5.onhour 프로젝트"
excerpt: "sizl onhour 프로젝트에서 배웠던것들 정리"
categories:
  - react
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 1. Introduce

### 1.1 프로젝트 설명

- 1.React와 Hook을 활용하였으며, 나중에 Redux와 Typescript를 추가적으로 넣어줄것이다.

### 1.2 구현해야할 프로젝트

[![초기페이지](/assets/images/sizl/Landing.PNG)]
[![로그인페이지](/assets/images/sizl/Login.PNG)]
[![사용자페이지](/assets/images/sizl/User.PNG)]
[![관리자페이지](/assets/images/sizl/Admin.PNG)]

## 2. Layout

### 2.1 Router

[React Router V4 정리](https://medium.com/@han7096/react-router-v4-%EC%A0%95%EB%A6%AC-e9931b63dcae)

### 2.2 Link

### 2.3 switch

## 3. Login

### 3.1 Login Coding

```js
import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import "../../assets/css/login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login({ history }) {
  const [inputs, setInput] = useState({ email: "", password: "" });

  const { email, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;

    setInput({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // res.data.data.token;
    axios
      .post("https://1hour.school/user/login", { email, password })
      .then((res) => {
        console.log(res);
        const {
          data: {
            data: { token },
          },
        } = res;
        // token을 못받았을때 예외처리
        // token을 받고 받은 token을 sessionStorage에 넣어준다.
        sessionStorage.setItem("adminToken", token);
        history.push("/admin");
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  };

  return (
    <div className="Login">
      <div>
        <img src={logo} className="Login-img" prop="#" />
      </div>
      <div className="Login__container">
        <span>시작하기</span>
        <p className="container__content">
          환영합니다! 계정이 없다면 회원가입후 이용해주세요
        </p>
        <form onSubmit={handleSubmit}>
          <div className="container__box">
            <label for="box__id">이메일주소</label>
            <input
              name="email"
              type="text"
              id="box__id"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="container__box">
            <label for="box__pw">비밀번호</label>
            <input
              name="password"
              type="password"
              id="box__pw"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="Login__section">
            <button type="submit" className="Login__btn">
              로그인
            </button>
          </div>
        </form>
        <div className="container__register">
          <Link to="/authorization/register">
            <span>가입하기</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
```

### 3.1 Login Coding 분석

> Login 코드는 stata에 초기값이 들어가고 랜더링 -> 값이 수정될때마다 setInput에 의해 업데이트 -> 그 업데이트 된 값들을 axois.post()를 통해 서버와 통신 -> 통신이 정확하게 이루어질경우 Token 값을 가져오고 Session에 저장 -> history.push로 페이지 이동

### 3.2 Hook

- 1.Why Hook?

  > Hooks는 16.8 버전에서 React에 새로 추가된 것으로, class 를 작성하지 않고도 state 와 라이프사이클 방법과 같은 React 기능을 사용할 수 있습니다.
  >
  > 클래스가 주는 혼동의 원인은 바로, 다른 언어들과는 다르게 동작하는 this 입니다. 이에 익숙치 않은 개발자들은 어려움을 겪게 됩니다. 그러므로 함수를 사용함에 따라 this를 활용하지 않아도 된다는 이점이 있다.

- 2.React LifeCycle

  > state와 라이프사이클 방법과 같은 React의 기능을 함수에서도 사용하기 떄문에 react의 라이프 사이클을 알아야지 Hook도 사용할수 있다.
  >
  > 라이프 사이클 과정에서 () 친것은 무시해도 좋다.

- Mount

  > 컴포넌트가 처음 실행될 떄 그것을 Mount라고 표현합니다.
  >
  > Mount가 되면 Construtor -> context,defaultProps,state를 저장한다. -> (componentWillMount) -> render -> ComponentDidmount
  >
  > ComponentDidmount에서 주로 Ajax요청을 하거나 setTimeout, setInterval 같은 행동을 한다.
  >
  > ComponentDidmount는 한번만 호출된다.

- State Update

  > setState 호출을 통해 state가 업데이트될떄 과정입니다.
  >
  > (shouldComponentUpdate) -> (componentWillUpdate) -> render -> componentDidUpdate

- 3.useState

  > 컴포넌트에서 동적인 값을 상태(state)라고 부릅니다. 리액트에 useState 라는 함수가 있는데요, 이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있습니다.

  > useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태(Class에서 state역할), 두번째 원소는 Setter 함수입니다(Class 에서 setState의 역할).
  >
  > 로그인 페이지 state에 email 값과 pw값을 초기화 시켜주고, input에 값을 입력할때마다, setInput(=setState)가 동작하게끔 만들었다.

### 3.3 Axois

- 1.Axois ?

  > Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
  >
  > 비동기 라이브러리 처리 방법에는 Axois 와 fetch, Ajax 도 있는데 차이가 무엇이며 왜 Axois를 많이 활용할까?

* 2.Why Axois ?

- [Axois vs fetch vs Ajax](https://dream-frontend.tistory.com/382)

### 3.4 SessionStorage

- 1.Session Login

  > 이번 프로젝트에서는 Login을 하기위해 Session을 활용하였다, 로그인을 할때 Session과 Cookie가 주로 활용되는데 그 이유는 이 두가지 모두 사용자의 정보(데이터)를 저장하기 때문이다.
  >
  > 먼저 Axois로 토큰(Token)을 받는데, 토큰이란 id와 pw가 맞을때 사용자가 유요한 사용자라는것을 증명해주는 권한 이라고 생각하면 된다.
  >
  > 그리고 그 Token을 sessionStorage에 저장해준다.
  >
  > 그리고 나중에 그 Token(권한) 있으면 관리자(admin) 페이지를 사용할수 있게끔 하기 위함

* 2.Session vs Cookie

  > 나는 이 프로젝트에서 Cookie 가 아닌 Session을 활용하였는데, 왜 Session을 사용했을까?
  >
  > 그 이유는 다음과 같지만 , 구체적으로는 잘 모르겠음..

  - Cookie

  > 사용자의 로컬에 저장되었다가 브라우저가 요청시 왔다갔다하게 됨(보안에 취약)

  - Session

  > 서버에 데이터를 저장하여 쿠키에 비해 보안에 안전함

### 3.5 Token

> 토큰이란 id와 pw가 맞을때 사용자가 유요한 사용자라는것을 증명해주는 권한 이라고 생각하면 된다.

### 3.6 History

> history 객체는 라우트로 사용된 컴포넌트에게 match, location 과 함께 전달되는 props 중 하나입니다. 이 객체를 통하여, 우리가 컴포넌트 내에 구현하는 메소드에서 라우터에 직접 접근을 할 수 있습니다 - 뒤로가기, 특정 경로로 이동, 이탈 방지 등

[history](https://react.vlpt.us/react-router/04-extra.html)

[history vs Link ](https://tillog.netlify.app/posts/redirect-historypush-link)

## 4. Admin

### 4.1 Admin Coding

```js
import axios from "axios";
import ContentsList from "./ContentsList";
import React, { Component, useEffect, useState } from "react";
import Pagination from "./Pagination";
import ContentsNav from "./ContentsNav";

function ContentsLists({ navs }) {
  const [contents, setContents] = useState({
    isLoading: true,
    category: -1,
    page: 1,
    rows: [],
  });

  // page 가 총 3개가 있네 처음에는 첫번째 페이지를 출력해주자
  const { isLoading, category, page, rows, total } = contents;

  // 매개변수로 전달할때는 그대로가 아닌 이름 바꿔서
  // 카테고리를 바꾸는 함수
  const changeCategory = (category, page) => {
    setContents({ ...contents, category, page });
    // ...contents 때문에 contents is not iterable가 나옴..
    // map을 활용할수 없다고하네.. 이유는?
  };
  // 페이지를 바꾸는 함수
  const changePage = (page) => {
    setContents({ ...contents, page });
  };

  // data.data.rows
  const getApi = async () => {
    console.log(category);
    console.log(page);
    const {
      data: { data },
    } = await axios.get(
      `https://1hour.school/api/v1/contents/list/${category}/${page}`,
      {
        headers: {
          Authorization: sessionStorage.getItem("adminToken"),
        },
      }
    );
    const { rows, total } = data;

    console.log(rows);

    setContents({
      ...contents,
      isLoading: false,
      rows,
      total,
    });
  };

  useEffect(getApi, [page, category]);

  return (
    <section className="container">
      <h1>콘텐츠 관리</h1>

      <ContentsNav navs={navs} changeCategory={changeCategory} />

      {isLoading ? (
        <div className="Loader">
          <span className="Loader__text">isLoading...</span>
        </div>
      ) : (
        <ContentsList rows={rows} />
      )}

      <Pagination total={total} category={category} changePage={changePage} />
    </section>
  );
}

export default ContentsLists;
```

### 4.1 Admin Coding 분석

> Admin 페이지에서는 처음에 랜더링 -> getAPI로 데이터를 받아오고 그 받아온 데이터를 setContents 로 state를 바꿈 -> 변경된 값으로 랜더링 된다.
>
> Admin 페이지는 navbar가 바뀔때마다 업데이트를 해줘야 한다. 그러기 위해서는 setContents를 계속 활용해야하는데, 한 페이지에서 구현 하기에는 너무 복잡하므로 또다른 Components를 만들어서 사용하고 props로 setContetns를 보내어 받은 Component에서도 활용할수 있게끔 해주었다. 그런데 실무적으로 setContents를 직접 보내는것보다 새로운 함수(changePage,changeCategory)를 만들어서 보내주어야한다고 한다.

### 4.2 LifeCycle of React

> state와 라이프사이클 방법과 같은 React의 기능을 함수에서도 사용하기 떄문에 react의 라이프 사이클을 알아야지 Hook도 사용할수 있다.
>
> 라이프 사이클 과정에서 () 친것은 무시해도 좋다.

- Mount

  > 컴포넌트가 처음 실행될 떄 그것을 Mount라고 표현합니다.
  >
  > Mount가 되면 Construtor -> context,defaultProps,state를 저장한다. -> (componentWillMount) -> render -> ComponentDidmount
  >
  > ComponentDidmount에서 주로 Ajax요청을 하거나 setTimeout, setInterval 같은 행동을 한다.
  >
  > ComponentDidmount는 한번만 호출된다.

- State Update

  > setState 호출을 통해 state가 업데이트될떄 과정입니다.
  >
  > (shouldComponentUpdate) -> (componentWillUpdate) -> render -> componentDidUpdate

### 4.2 LifeCycle of Hook

- 1.useState

  > 컴포넌트에서 동적인 값을 상태(state)라고 부릅니다. 리액트에 useState 라는 함수가 있는데요, 이것을 사용하면 컴포넌트에서 상태를 관리 할 수 있습니다.

  > useState 를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출해줍니다. 이 함수를 호출해주면 배열이 반환되는데요, 여기서 첫번째 원소는 현재 상태(Class에서 state역할), 두번째 원소는 Setter 함수입니다(Class 에서 setState의 역할).
  >
  > 로그인 페이지 state에 email 값과 pw값을 초기화 시켜주고, input에 값을 입력할때마다, setInput(=setState)가 동작하게끔 만들었다.

* 2.useEffect

  > useEffect Hook을 componentDidMount와 componentDidUpdate, componentWillUnmount가 합쳐진 것으로 생각해도 좋습니다.
  >
  > useEffect(함수,[업테이트할 값])
  >
  > 컴포넌트가 화면에 가장 처음 렌더링 될 때만 실행되고 업데이트 할 경우에는 실행 할 필요가 없는 경우엔 useEffect(function,[]) 를 사용 ,즉 ComponentDidmount 역할만 한다고 보면됨 (ComponentDidmount는 랜더링되고 한번만 실행됨)
  >
  > useEffect(function,[]) ==> fucntion 부분은 ComponentDidmount일때 실행되고 , []안에 값이 있으면 그 값이 update될때마다 function이 작동한다.

### 4.3 Admin 페이지의 Component 구성

**1. 처음 Admin 페이지의 모습** : 컴포넌트를 적극 활용하지 않아서, 다른곳에서도 똑같은 기능이 있음에도 다른곳에서도 필요하지만 여기서만 사용가능하게 만들었기에 **좋지않은 Component 구성**

- ContentsManage

  - ConentesLists

    - map으로 Nav바 작성(다른곳에서도 필요하지만 컴포넌트로 만들지 않았기에 여기서만 사용가능)

    * ContentsList

      - Map으로 화면구성

    - map으로 paging 구성(다른곳에서도 컴포넌트로 만들지 않았기에 여기서만 사용가능)

**2. 수정후 Admin 페이지의 모습**

- ContentsManage

  - ContentsLists

    - ContentsNav(컴포넌트로 만들었기에 재활용 가능)

      - map으로 nav바 작성

    - ContentsList

      - Content

    - Pagination(컴포넌트로 만들었기에 재활용 가능)

      - map으로 paging 구성

### 4.4 유투브 URL을 IMG로 바꾸는 방법, 썸네일 이미지 가져오기

> url의 특정부분을 때서 img.youtube.com/vi/{url의 특정부분}/0.jpg 으로 IMG를 만들수가 있음

```js
let getTumbnail = "";

if (url.includes("&")) {
  getTumbnail = url.substring(32, url.indexOf("&"));
} else {
  getTumbnail = url.substring(32, url.length);
}

const getImageUrl = `http://img.youtube.com/vi/${getTumbnail}/0.jpg`;

["How do I get a YouTube video thumbnail from the YouTube API?"](https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api)
```

### 4.5 웹에서 유투브 URL로 동영상 트는법

> 유투브는 video는 지원하지 않음 따라서 iframe을 사용해야하나 iframe에 youtube url을 그대로 사용할 경우 다음과 같은 오류가 발생 Refused to display '<URL>' in a frame because it set 'X-Frame-Options' to 'sameorigin'. 이 문제를 해결하기 위해 watch?v= 를 embed/로 바꿈

[Refused to display 'url' in a frame because it set 'X-Frame-Options' to 'SAMEORIGIN'](https://stackoverflow.com/questions/41522652/refused-to-display-url-in-a-frame-because-it-set-x-frame-options-to-sameori)

## 5. Paging

```js
import React from "react";

function Pagination({ total, changePage }) {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(total / 9); i++) {
    pageNumber.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumber.map((pageNum) => (
          <li
            key={pageNum}
            className="pagination_item"
            onClick={() => changePage(pageNum)}
          >
            {pageNum}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
```
