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

##### 2.0에서의 핵심

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

##### 2.1에서의 핵심

> 1.컴포넌트(components)에 정보를 보낼수 있다.
>
> 2.컴포넌트는 재사용이 가능하다.
>
> 3.Es6 기능으로 {}를 사용함으로써 객체의 내부값을 아규먼트로 받을수 있게 되었다.

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

#### 2.2 Dynamic Component Generation

##### 2.2에서의 핵심

> 1.map은 array의 각 item(값)에 function을 적용하고 array을 준다.
>
> 2.[arrow function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98);
>
> 3.component 함수 내에서 {}의 선언은 {}안에 javascript로 쓰겠다는것을 의미한다.
>
> 4.map에서 사용되는 파라미터는 객체이다. ex) yosup.map(function(object){return }) 에서 object는 객체
>
> 5.파라미터는 앞서말헀듯이 .을 쓸수가 없다. 그래서 객체의 내부값을 받기 위해서는 ES6에서 {}를 제공해줬는데
> 객체의 내부값을 아규먼트로 받을때 {arg} 를 썻다면 내부값 두개를 받을때는 {arg1, arg2}를 쓰면 된다.

```javascript
import React from "react";

function Food({ name, country }) {
  //5. 내부 아규먼트 두개를 받을때는 {arg1, arg2}
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>country is {country}</h1>
    </div>
  );
}

const abc = [
  { name: "kimchi", country: "korea" },
  { name: "sushi", country: "japan" },
  { name: "maratang", country: "china" }
];

// 여기서 value는 객체
function App() {
  return (
    <div>
      {abc.map(function(value) {
        return <Food name={value.name} country={value.country} />;
      })}
    </div>
    // === abc.map(value => <Food name={value.name} country={value.country} />) , arrow function
  );
}

export default App;
```

#### 2.3 map Recap

##### 2.3에서의 핵심

> 1.모든 react의 element 요소들은 유일성이 있어야 한다. 따라서 key를 부여해야한다.

```javascript
import React from "react";

function Food({ name, country }) {
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>country is {country}</h1>
    </div>
  );
}

const abc = [
  { name: "kimchi", country: "korea", id: 1 },
  { name: "sushi", country: "japan", id: 2 },
  { name: "maratang", country: "china", id: 3 }
];

function App() {
  return (
    <div>
      {abc.map(function(value) {
        return (
          <Food key={value.id} name={value.name} country={value.country} />
        );
      })}
    </div>
  );
}

export default App;
```

#### 2.4 Protection with Proptypes

##### 2.4의 핵심

> 1.prop-types란 내가 전달받은 props가 내가원하는 props인지를 확인해 주는것
>
> 2.prop-types 사용하기 (npm i porp-types)
>
> 3.prop-types를 다운받은다음에는 pacakge.json에 잘 설치되었는지 확인한후
> 사용할 곳에 import Propypes from "prop-types"를 해줘야한다.
>
> 4.내가 props를 보낼때 발생할수 있는 문제들에 대해서 해결해주는 역할을 prop-types가 대신해줌

```javascript
import React from "react";
import PropTypes from "prop-types";

function Food({ name, country, score }) {
  return (
    <div>
      <h1>my name is {name}</h1>
      <h1>country is {country}</h1>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired //여기서 score의 타입이 무조건 string을 요구한다고 했는데
  //보내는 객체의 value값이 int 형이므로 propTypes에서 "나는 String을 원햇지만 int형 을 보내고 있다고 확인해보라고 오류가 뜬다"
  //But 화면에 보이는 결과값은 제대로 나온다.
};

const abc = [
  { name: "kimchi", country: "korea", id: 1, score: 5.0 },
  { name: "sushi", country: "japan", id: 2, score: 4.4 },
  { name: "maratang", country: "china", id: 3, score: 4.5 }
];

function App() {
  return (
    <div>
      {abc.map(function(value) {
        return (
          <Food
            key={value.id}
            name={value.name}
            country={value.country}
            score={value.score}
          />
        );
      })}
    </div>
  );
}

export default App;
```

### 3. State

#### 3.0 Class Components and State

##### 3.0의 핵심

> 1.state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
>
> 2.component는 함수형(function component)과 클래스형(class component)이 있다.
>
> 3.react는 자동적으로 class component의 render method를 자동으로 실행한다.
>
> 4.class component를 사용하는 이유는 state를 사용하기 위함이며 state는 객체이고 component의 data를 넣을공간이 있고
> 그 데이터는 동적 데이터이다. (즉 변하는 데이터)

```javascript
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    console.log("add");
  };

  minus = () => {
    console.log("minus");
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

#### 3.1 All you need to know about State

##### 3.1의 핵심

> 1.state를 건들기 위해 즉 데이터를 변화시키기 위해서는 this.state 를 쓰는게 아니라 this.setState() 를 사용한다.
>
> 2.state를 변화했을 때 새로운 state와 함께 render()가 다시작동한다.
> 즉 render() -> state변화 -> 변화된 state와 함께 render() 가 다시 동작
>
> 3.외부에서 state를 직접 건드는것은 좋은 방법이 아니다.

```javascript
import React from "react";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState({
      count: this.state.count + 1 //좋은 코딩은 아니다. why? 외부에서 state를 의존하기 때문에 좋은방법이 아니다.
    });
  };

  minus = () => {
    //current = this.state
    this.setState(current => ({
      count: current.count - 1 //좋은 코딩이다.
    }));
  };

  render() {
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
```

#### 3.2 Component Life Cycle

##### 3.2의 핵심

> 1.Mounting -> 태어남
> constructor() : 가장 먼저 호출되는 function()으로, javascript에서 class를 만들 떄 호출되는거임
> render()
> componentDidMount() : component가 처음 render 됐는지 알려줌, 따라서 첫 render 때만 동작하고 , 다음 render때는 동작안함
>
> 2.Updateing ->일반적인 업데이트
> componentDidUpdate() : 새로운 render가 발생할때마다 동작하는 함수 , state를 setstate해서 render가 다시 동작할때 적용
>
> 3.UnMounting -> 죽음 , component 가 죽는걸 의미함
> componentWillUnmount() : 컴포넌트가 떠날때 호출 됨 , 다른페이지로 갈때 적용

#### 3.3 Planning the Movie Component

##### 3.3의 핵심

> 1.Es6, const {isLoading} = this.state 와 const isLoading = this.state.isLoading 는 같다.
>
> 2.State에 나중에 쓸경우 초기화 하는습관을 들이는게 좋다.

```javascript
import React from "react";

class App extends React.Component {
  state = {
    ischecked: false,
    book: "" //나중에 book이 쓰일것을 대비하여 초기화함 (쓰지 않아도 되지만 초기화 습관들이는게 좋다.)
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ischecked: true,
        book: false
      });
    }, 6000);
  }

  render() {
    const { ischecked } = this.state; // const ischecked = this.state.ischecked
    return <div>{ischecked ? "We are ready" : "not Ready"}</div>;
  }
}

export default App;
```

### 4. Making the Movie App

#### 4.0 Fetching Movies from API

##### 4.0의 핵심

> 1.fetch(가져옴) 와 axios의 역할은 api를 가져올때 쓴다..?
>
> 2.[fetch vs axios](https://blog.logrocket.com/axios-or-fetch-api/), axois는 데이터를 Json 형태로 자동으로 바꿔준다
>
> 3.npm i axios (axios 설치방법)
>
> 4.async 와 await , async(Asynchronous : 비동기) 라는 뜻으로 데이터를 받는 방식이다.
> 동기식은 말 그래도 동시에 일어난다는 뜻이다. 요청과 결과가 동시에 일어난다는 약속
> 비동기식은 요청과 결과가 동시에 일어나지 않는다.
> [동기와 vs 비동기](https://private.tistory.com/24)

```javascript
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    ischecked: false,
    book: ""
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { ischecked } = this.state;
    console.log(this.state.ischecked);
    console.log(this.state.book);
    return <div>{ischecked ? "We are ready" : "not Ready"}</div>;
  }
}

export default App;
```

#### 4.1 Rendering the Movies

##### 4.1의 핵심

> 1.언제 class component를 쓸지 , 언제 function component를 쓸지 알아야한다. 앞서 말했듯이 state를 사용하려면 class component를 써야함
> 따라서 Movie.js는 class compontnt를 쓸 필요가 없다.
>
> 2.밑 코드에서 ES6 기능들이 어떻게 쓰였는지 확인해보자

<u>App.js</u>

```javascript
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies); // 우리가 가져올 데이터는 movies.data.data.movies이다
    //그러나 이런 예쁘지 않은 코딩은 Es6버전에서 새롭게 바뀌었다.

    const {
      data: {
        data: { movies }
      } //바로 ES6 기능으로 , movies.data.data.movies 가져옴 , movies안에 movies.data.data.movies가 담김
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies, // == movies: movies
      isLoading: false
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; //Es6

    console.log(this.state.isLoading);
    console.log(this.state.book);
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
```

<u>Movies.js</u>

```javascript
import React from "react";
import PropTypes from "prop-types";

//Movies.js 는 state가 필요 없기 때문에 class component로 선언해줄 필요가 없다.
//why 필요가 없어?
//class component는 state를 사용하기 위함이고, state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
//그런데 Movies.js는 데이터를 받기만 하지 그 데이터로 작업을 하지는 않으므로

function Movies({ id, year, title, summary, poster }) {
  return <h1>{title}</h1>;
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movies;
```

#### 4.2 Rendering the Movies

##### 4.2의 핵심

### 5. Conclusions

```

```

```

```

```

```

```

```
