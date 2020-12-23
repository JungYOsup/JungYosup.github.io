---
title: "2.ReactJs로 웹서비스 만들기"
excerpt: "'React로 영화 웹 서비스 만들기' 전문가(Nomad)와 코린이의 코딩 비교"
categories:
  - react
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## ReactJs 로 웹 서비스 만들기

Nomad Coders를 기반으로 하고 있다.

## 1. Planning the Movie Component

#### 1.1의 핵심

> 1.Es6, const {isLoading} = this.state 와 const isLoading = this.state.isLoading 는 같다.
>
> 2.State에 나중에 쓸경우 초기화 하는습관을 들이는게 좋다.

```javascript
import React from "react";

class App extends React.Component {
  state = {
    ischecked: false,
    book: "", //나중에 book이 쓰일것을 대비하여 초기화함 (쓰지 않아도 되지만 초기화 습관들이는게 좋다.)
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        ischecked: true,
        book: false,
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

## 2. Making the Movie App

### 2.1 Fetching Movies from API

**2.1의 핵심**

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
    book: "",
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

### 2.2 Rendering the Movies

**2.2의 핵심**

> 1.언제 class component를 쓸지 , 언제 function component를 쓸지 알아야한다. 앞서 말했듯이 state를 사용하려면 class component를 써야함
> 따라서 Movie.js는 class compontnt를 쓸 필요가 없다.
>
> 2.밑 코드에서 ES6 기능들이 어떻게 쓰였는지 확인해보자
>
> 3. map(()=>{return}) 와 map(()=>{()}) 은 같지만, 후자는 자동으로 return을 시켜주는 반면 전자는 return을 명시해야한다.

<u>App.js</u>

```javascript
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies); // 우리가 가져올 데이터는 movies.data.data.movies이다
    //그러나 이런 예쁘지 않은 코딩은 Es6버전에서 새롭게 바뀌었다.

    const {
      data: {
        data: { movies },
      }, //바로 ES6 기능으로 , movies.data.data.movies 가져옴 , movies안에 movies.data.data.movies가 담김
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies, // == movies: movies
      isLoading: false,
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
          : movies.map((movie) => {
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
  poster: PropTypes.string.isRequired,
};

export default Movies;
```

### 2.3 Styling the Movies

**2.3의 핵심**

> 1.className이 아닌 class를 property로 써도 오류는 뜨지만 결과값은 같게 나옴
>
> 2.map에서는 div로 감싼다음에 return을 쓰지 않아도 되던데, 기 이유가 div로 감싸면서 html처럼 사용해야하기 때문인가? 왜지...???
>
> 3.인라인테그로 css를 적용하는것보다, css file을 만들어서 사용하는것이 더 좋다.

<u>App.js</u>

```javascript
import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies); // 우리가 가져올 데이터는 movies.data.data.movies이다
    //그러나 이런 예쁘지 않은 코딩은 Es6버전에서 새롭게 바뀌었다.

    const {
      data: {
        data: { movies },
      }, //바로 ES6 기능으로 , movies.data.data.movies 가져옴 , movies안에 movies.data.data.movies가 담김
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies, // == movies: movies
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">"Loading..."</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            ))}
          </div>
        )}
      </section>
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
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movies;
```

### 2.4 Adding Genres

**2.4의 핵심**

> 1.map에 있는 각각의 item은 key가 필요하다. map의 index 아규먼트를 사용함으로써 key의 value를 채울수도 있다.
>
> 2.하지만 index를 잘 사용하지는 않는다고 들었던것 같다.

<u>App.js</u>

```javascript
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Movie.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // async 함수를 비동기화 시킴 , 즉 이 함수는 순차적으로 진행되어야하는 함수야, 그래서 await를 한것을 다 기다린후에 함수를 실행시킬게~ 라는말이다.
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    //console.log(movies.data.data.movies); // 우리가 가져올 데이터는 movies.data.data.movies이다
    //그러나 이런 예쁘지 않은 코딩은 Es6버전에서 새롭게 바뀌었다.

    const {
      data: {
        data: { movies },
      }, //바로 ES6 기능으로 , movies.data.data.movies 가져옴 , movies안에 movies.data.data.movies가 담김
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );

    this.setState({
      movies, // == movies: movies
      isLoading: false,
    });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;

    return (
      <section class="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">"Loading..."</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
```

<u>Movies.js</u>

```javascript
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

//Movies.js 는 state가 필요 없기 때문에 class component로 선언해줄 필요가 없다.
//why 필요가 없어?
//class component는 state를 사용하기 위함이고, state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
//그런데 Movies.js는 데이터를 받기만 하지 그 데이터로 작업을 하지는 않으므로

function Movies({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary}</p>
      </div>
    </div>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //프로프타입이 String인 배열이 요구되어진다.
};

export default Movies;
```

### 2.5 Styles Timelapse

**2.5의 핵심**

> 1.화면꾸미기 CSS를 사용해서 꾸며보는데 , 최신 CSS 기술들을 활용해서 꾸며보는게 중요할것 같다.
>
> 2.flex 나 grid를 사용해보자
>
> 3.스스로 한번 꾸며보는 연습을 해보자

### 2.6 Cutting the summary

**2.6의 핵심**

> 1.slice로 summary를 자름..

## 3. Conclusions

### 3.1 Deploying to Github Pages

**3.1의 핵심**

> 프로젝트 배포방법
>
> 1.gh-pages : github의 github page 도메인에 나타나게 해줌(설치방법 : npm i gh-pages)
>
> 2.package.json으로 가서 home page 를 추가시킴("homepage": "https://jungyosup.github.io/movie_app_2019")
> 주의할점 : homepage명은 소문자여야함
>
> 3.build 를 실행시킴 (npm run build) , build 폴더가 생성됨

> 4.package.json으로 가서 script 에서 두가지를 "deploy": "gh-pages -d build", "predeploy": "npm run build" 을 추가한다.
> npm run deploy 를 통해 gh-pages를 호출하고 , gh-pages에 build 폴더를 업로드한다. 하지만 그전에 deploy는 먼저 predeploy를 호출한다.
> 따라서 npm run deploy를 하면 predeploy를 실행시켜 num run build를 하게하고 build폴더가 생성되고, gh-page를 호출하고 , gh-pages에 build 폴더를 업로드 한다.

> 5.업로드 될때까지 5분정도 기다리면 페이지가 뜬다.
>
> 6.[Movie_app_2019 Project](https://jungyosup.github.io/movie_app_2019)
>
> 7.다음에 수정된 것을 업로드 하기 위해서는 npm run deploy만 하면 된다. 우리가 npm run deply 입력만 하면 모든 동작을 하게끔 설정을 해놨기 떄문 (predploy로)

## 4. ROUTING BONUS

### 4.0 Getting Ready for the Router

**4.1의 핵심**

> 1. npm react-router-dom 으로 설치
>
> 2. react-router-dom이 뭘까? 바로 Navigation을 누를때마다 새로운 페이지를 보여주는 역할을 하는 router를 import 할수 있게 해준다.
>
> 3. compoents 폴더와 router 폴더를 만들때, 자주 활용되기 떄문에 정해진 이름이 있는것을 볼수 있다.

### 4.2 Building the Router

**4.2의 핵심**

> 1. 화면에 2개의 컴포넌트가 동시에 나올경우 해결방법은 exact={true} 이다.

#### 4.2.1 react-router-dom을 활용하는 방법

> 1. install 한 react-router-dom 에서 HashRouter 과 Router를 가져온다.
>
> 2. 가져온 HashRouter안에 Route를 해주는데, Route안에는 중요한 props 들이 있다.
>
> 3. Route 안 props중에 중요한 props는 path 그리고 component 이다.
>
> 4. path 는 말 그래도 보여질 컴포넌트의 경로를 선언한다.
>
> 5. component는 path의 경로에 선언된 component를 말한다.
>
> 6. 만약 브라우저 url 에 #을 없애고 싶으면 HashRouter 대신에 BrowserRouter를 사용하면 됨

<u>App.js</u>

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

- 따라서 여기에는 #/about 경로에 About 컴포넌트가 보인다는 말임.

#### 4.2.2 두개의 컴포넌트가 동시에 랜더링

> 1. 같은경로에 있을경우 두개의 컴포넌트가 동시에 랜더링 된다.
>
> 2. 하지만 우리는 한페이지에 2개의 컴포넌트가 동시에 보여지는것을 원하지 않는다.
>
> 3. 이를 해결하기 위해 exact={true}를 사용하는데, 이것의 의미는 "너의 path의 url이 선언된 그대로 랜더링을 해줘" 라는 뜻이다.

<u>App.js</u>

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
function App() {
  return (
    <HashRouter>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

이렇게 선언할경우 #/about경로에서 두개의 컴포넌트 home 과 about가 동시에 랜더링 되는것을 볼수있다.

마찬가지로

<u>App.js</u>

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
function App() {
  return (
    <HashRouter>
      <Route path="/home" component={Home} />
      <Route path="/home/introduce" component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

이렇게 선언할경우 #/home 경로에 home 컴포넌트가 보여지는데 , #/home/introduce 경로에 home과 introduce 컴포넌트가 동시에 보여지게된다.

하지만 한페이지에 2개의 컴포넌트가 보여지는것은 우리가 원하지 않는다.

<u>App.js</u>

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

### 4.3 Buiding the Navigation

**4.3의 핵심**

> 1. Route를 이용한 Navigation을 만들때 anchor tag를 사용하면 페이지를 새롭게 새로고침하기 때문에 내가 Home을 누를경우 react가 죽고 다시 실행되기 때문에 다시 로딩을 해야하는 경우가 발생한다. 하지만 react-router-dom 에서 제공하는 link를 사용하면

> 2. anchor tag를 사용하며 about로 페이지 이동을 할때, about으로 이동할경우 /#/about가 나와야하는데 http://localhost:3001/about#/ 가 나오게됨

> 3. link를 사용하여 about로 페이지 이동을 할때,

<u>App</u>

- Navigation은 home 컴포넌트가 보여지는 화면이나 , about가 보여지는 화면이나 둘다 있어야 하기 때문에 Navigation에 exact={true}를 하지 않음으로써 두 화면에 Navigation 컴포넌트가 보여지게 되는것이다.

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Home from "./routers/Home";

import Navigation from "./components/Navigation";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;
```

- 이렇게 할경우 Route를 이용한 Navigation을 만들때 anchor tag를 사용하면 페이지를 새롭게 새로고침하기 때문에 Home인 페이지에서 다시 Home을 누를경우 react가 죽고 다시 실행되기 때문에 다시 로딩을 해야하는 경우가 발생한다.

<u>Navigation</u>

```js
import React from "react";

function Navigation() {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </div>
  );
}

export default Navigation;
```

- 하지만 react-router-dom 에서 제공하는 link를 사용하면 이런 문제를 해결할수 있다.

```js
import React from "react";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
```

### 4.3 Sharing Props Between Routes

**4.3의 핵심**

> 1. 이 장에서는 클릭했을때 상세 페이지가 나오게끔 하는 작업을 할것이다.
>
> 2. 그러기 위해서는 Routes props 를 알아야한다.
>
> 3. Route는 기본 props를 가지고 있다. 따라서 about에 props전달은 하지 않았어도 console을 찍어보면 전달받은 기본 props가 찍힌다.
>
> 4. 우리가 전달할 props를 전달하기 위해 Movie에 Link를 걸어주고 전달할 props를 보내준다.

#### 4.3.1 Movies to Detail

<u>Movies.js</u>

```js
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

//Movies.js 는 state가 필요 없기 때문에 class component로 선언해줄 필요가 없다.
//why 필요가 없어?
//class component는 state를 사용하기 위함이고, state는 보통 동적 데이터(변하는 데이터)와 함께 작업할때 만들어진다.
//그런데 Movies.js는 데이터를 받기만 하지 그 데이터로 작업을 하지는 않으므로
```

### 4.4 Redirecting(페이지 전환)

**4.4의 핵심**

> 1. 우리가 영화를 클릭해서 detail로 들어갈경우 props를 받게 되지만, 클릭하지 않고 URL로 쳐서 들어가면 props를 받지 못한다. 내가 props를 받지 못할경우에는 home화면으로 가게 만든다. 그 이유는 다시금 클릭을 하여 detail로 들어갈수 있게 만들기 위함이다.
>
> 2. Detail.js 의 Detail 함수 컴포넌트를 class 컴포넌트로 변환한다.
>
> 3. URL로 쳐서 들어가게 되면 props를 전달받지 못하고 undefined가 뜨게 된다. undefined가 뜰경우 홈으로 가게끔 만든다.
>
> 4. 각 영화들이 각자의 모습을 가지는게 좋기 때문에 url도 id로 지정해주는게 좋아보인다.

### 4.4.3 why class funtion

```js
import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    // URL이 아닌 클릭해서 들어간경우 location이 존재하므로 span 태그의 내요이 나온다
    if (location.state) {
      return <span>{location.state.title}</span>;
    }
    // 하지만 URL로 들어갈경우 location이 없기 때문에, location이 없을경우 null을 반환하고 componentDidMount()가 동작해 Home 페이지로 이동하게 된다.
    else {
      return null;
    }
  }
}

export default Detail;
```

### 4.4.4 cool URL

<u>App.js</u>

```js
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./routers/About";
import Detail from "./routers/Detail";
import Home from "./routers/Home";

import Navigation from "./components/Navigation";
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
```

<u> Movie.js </u>

```jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movies({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        // 각 영화들이 각자의 모습을 가지는게 좋기 때문에 url도 id로 지정해주는게 좋아보인다.
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </div>
    </Link>
  );
}

Movies.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //프로프타입이 String인 배열이 요구되어진다.
};

export default Movies;
```
