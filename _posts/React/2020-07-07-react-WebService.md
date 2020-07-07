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
