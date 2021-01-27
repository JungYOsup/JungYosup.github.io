---
title: "4.초보자를 위한 Redux"
excerpt: "Redux에 대한 개념"
categories:
  - react
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 0.0 Introduction

> Redux는 Javascript Apllicaton들의 state(상태)를 관리 하는 방법
>
> React에만 국한된게 아니라 다른 Js framwork 에서도 활용되고 vanilla Js 에서도 활용된다.

# 1. Pure Redux : Counter

## 1.0 Vanilla Counter

```js
const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count = count + 1;
  updateText();
};

const handleMinus = () => {
  count = count - 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
```

## 1.1 Store and Reducer

> Store 은 데이터를 저장하는 공간 , state 의 공간이라고 생각하면 되겠다.
>
> reducer은 데이터를 업데이트해주는 곳 , 그리고 return하는 데이터들은 store의 데이터가 됨
>
> 여기서 count = 0 은 state에 0을 넣은 초기값이라고 생각하면 된다.

```js
import { createStore } from "redux";

// store은 너의 date를 넣는곳이야 , 너의 state

// 매겨변수에 default 값을 지정해주는 방법 (state = 0 ) ---> 매개변수가 전달이 안되면 default 값으로 0으로해줌
const countModifier = (count = 0) => {
  return count;
};
// reducer은 너의 데이터를 수정하는 함수
// return 하는 것은 store의 데이터가 됨

const countStore = createStore(countModifier); // createStore 은 찍어보면 reducer를 매개뱐수로 필요로 한다.

console.log(countStore.getState());
// getState : state 값을 가져옴
```

```js
// 현재 Reducer의 역학을 하고 있는 countModifier 를 자세하게 보면 첫번째 매개변수는 state이고 두번째 매개변수는 action의 역할을 하는것을 볼수있다.
export type Reducer<S = any, A extends Action = AnyAction> = (
  state: S | undefined,
  action: A
) => S
```

## 1.2 Actions

> dispatch는 reducer를 실행시키기 위한 함수, 또한 dispatch의 파라미터의 값은 객체이어야만 하고 그 객체는 reducer의 action에게 전달된다.

```js
import { createStore } from "redux";

// store은 너의 date를 넣는곳이야 , 너의 state

// 매겨변수에 default 값을 지정해주는 방법 (state = 0 ) ---> 매개변수가 전달이 안되면 default 값으로 0으로해줌
// reducer를 자세히보면 파라미터의 첫번쨰는 state 이고 , 두번째는 action이다.
const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
// reducer은 너의 데이터를 수정하는 함수
// return 하는 것은 store의 데이터가 됨

const countStore = createStore(countModifier); // createStore 은 찍어보면 reducer를 매개뱐수로 필요로 한다.

countStore.dispatch({ type: "ADD" });

// dispatch는 "급파","신속메세지" 의 의미로 , 다른거 제처두고 reducer을 실행시키고 dispatch의 파라미터는 action으로 전달된다.
// dispatch의 파라미터는 객체가 되어야함
// 따라서 dispatch -> coutModifier(reducer) -> countModifier = (count =0 , {type:"Hello"})

countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState()); // 결과값 4
```

## 1.3 SubScriptions

> subscribe 는 store에 변화가 있을떄마다 감지해서 불러줌
>
> dispatch에 의해서 reducer 함수가 동작하면 -> reducer함수의 데이터 값이 변화했으므로 store에 변화가 있으므로 -> subcribe가 동작을 하여 onChage가 동작을 하게되고 -> getState()의 값을 가져와서 뿌려주게 되는것이다.
>
> 만약 ADD시 return을 count+1 이 아닌 정요섭으로 할경우 어떻게 될까?
>
> 작동방식은 똑같으나, return하는 데이터들은 store의 데이터가 되므로, 데이터가 정요섭으로 바뀌어버림
>
> 따라서 add를 하고 minus를 하면 정요섭에서 -1로 되는게 아니라 정요섭에서 NAN으로 됨

```js
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
    // return "정요섭"
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange); // store에 변화가 있을때마다 감지해서 불려줌

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
```

## 1.4 Recap Refactor

> 개선사항
>
> 첫번째, reducer안에서는 if문 보다는 switch문을 쓰는게 좋다
>
> 두번째, dispatch의 valye값은 string 보다는 변수로 설정해주는게 좋다. 그 이유는 사람이라면 String을 잘못 입력할시 오류가 뜰때 Javascript에서 찾을수 없지만, 변수로해서 넣어줄 경우 Javascript에서 어떤 오류인지 찾아준다.

```js
import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
```

# 2. Pure Redux : To Do list

## 2.0 Vanilla ToDo

> Javascript ToDoList를 Redux를 이용해서 사용할시 좋은점이 무엇일까?

```js
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerHTML = toDo;

  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```

## 2.1 State Mutation

> Mutation State를 절대 하지말자
>
> Mutation State가 뭘까 ??
>
> State를 Mutation(변형) 하는걸 하지 말자는 얘기이다. 즉 직접적으로 State를 건들지 말자는 것이다.

```js
const friends = ["son", "kim"];

friends.push("lynn"); // Redux에서는 직접 객체에 접근 하지 말자
```

> 그러면 어떻게 해야할까?
>
> Redux에서는 수정된 새로운 Object를 리턴해주면 된다.
>
> 우리가 react hook 쓰면서 useState의 state를 직접 건들지 말고 새로운 객체를 복사해서 넣어준다는 말과 같다.

- **잘못된 방법 : 직접 state에 push 해줌**

```js
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return state.push(action.text);
    case DELETE:
      return [];
    default:
      return [];
  }
};

const toDoStore = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  toDoStore.dispatch({ type: ADD, text: toDo });
};

form.addEventListener("submit", onSubmit);
```

- **옳은 방법**

```js
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD = "ADD";
const DELETE = "DELETE";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, { text: action.text }]; //spread(...)를 사용해서 새로운 배열에 기존의 값과, 새로운 값을 추가해서 넣어준걸 리턴해줌
    case DELETE:
      return [];
    default:
      return [];
  }
};

const toDoStore = createStore(reducer);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  toDoStore.dispatch({ type: ADD, text: toDo });
};

form.addEventListener("submit", onSubmit);
```

## 2.2 Delete To Do

```js
import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state]; // ...state를 뒤에 보낸 이유는 , 추가될때마다 추가된 배열이 맨앞에 나오게 하기 위해서이다.
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```

## 2.3 Delete To Do part Two

> 우리가 배열을 삭제할때 , splice() 를 사용을 많이 했었다. why ? 원하는부분을 제거해주고 삭제한만큼 배열도 알아서 줄어드므로
>
> 하지만 여기서는 우리는 이걸 쓰면 안된다. why? mutation state 즉 state를 직접 변형시키면 안되기 때문이다.
>
> splice()는 다음과 같이 정의 되어 있다. splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.
>
> 이렇든 원래 배열을 삭제 교체시키기 떄문에, 여기서 삭제하는 용도로 사용할시 기존의 state가 변형되는 것이므로 사용하면 안된다.
>
> 따라서 우리는 filter() 함수를 사용한다.
>
> filter 함수는 다음과 같의 정의되어있다. filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다. 여기서 주목해야하는것은 기존의 것을 건들지 않고 새로운 배열로 반환한다는 것이다.
>
> filter로 제거할때는 제거하려는 대상을 제거하는게 아닌, 제거하지말아야할 대상만 추려 return 해준다.

```js
import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    // splice() 가 아닌 filter()를 사용한것을 볼수있다.
    // filter로 제거할때 조건을 보니 splice() 처럼 해당 index에 맞는걸 제거해주는게 아닌, 제거하지 말아야할 대상을 추려 return 해주었다.
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```

## 2.4 Conclusions

# 3.React Redux

## 3.0 Setup

> React에서 redux를 사용하면 어떻게 될까?
>
> 첫번째 질문, redux와 hook을 같이 사용하는 경우가 발생할까?

```js
import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
```

## 3.1 Connecting the Store

> App 에 <Provider store={}> 으로 감싸므로서 store과 컴포넌트의 연결을 위한 준비를 한다.

- **store.js**

```js
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDO = (text) => {
  return { type: ADD, text };
};

export const deleteToDO = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];

    case DELETE:
      return state.filter((toDO) => toDO !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
```

- **index.js**

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

- **App.js**

```js
import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}></Route>
      <Route path="/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
```

- **Home.js**

```js
import React, { useState } from "react";

function Home() {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

export default Home;
```

## 3.2 mapStateToProps

> 컴포넌트가 store에 잇는 (1)state를 가져오고 (=getState()역할) (2)dispatch 동작을 해야한다.
>
> 첫번째로 우리가 해야할일은 store의 state에 접근을 해야한다.
>
> 그러기 위해 사용 되는것이 connect() 이다 . connect()의 첫번째 파라미터는 state를 가져오는 역할을 하며 , 두번째 파라미터는 dispatch의 역할을 해야한다.
>
> mapStatetoProps로 선언된 함수(getCurrentState)는 첫번째 파라미터가 store의 state값이고 두번째는 기존 파라미터가 받아오는 props이다.
>
> mapStatetoProps로 함수가 return을 하면 컴포넌트에 기존 props에 실려서 전달된다.
>
> 따라서 function Home({ toDos }) 이렇게 받는것이다.

```js
import React, { useState } from "react";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </>
  );
}

// 내가 store에 있는 state를 사용하고 싶을때 !!
// connect라는 것을 사용해서 -> props를 통해 -> state를 가져올수 있다.

function getCurrentState(state, ownProps) {
  return { toDos: state };
  // store.js 에서 state 값을 Home의 props에 전달함
  //
}

export default connect(getCurrentState)(Home);
```

## 3.3 mapDispatchToProps

> 컴포넌트가 store에 잇는 (1)state를 가져오고 (=getState()역할) (2)dispatch 동작을 해야한다.
>
> state를 가져왔으므로 , 두번째로 dispatch의 동작도 할수 있게 해야한다.
>
> 앞에서 설명했듯이 connect() 는 첫번째 파라미터가 state를 가져오는 역할 , 두번째 파라미터가 dispatch 동작 역할을 한다.
>
> mapDispatchToProps로 선언된 함수(mapDispatchToProps)는 첫번째 파라미터가 dispatch 역할을 하고 ,두번째 파라미터는 기존 파라미터가 받아오는 props이다.
>
> mapDispatchToProps 함수가 return을 하면 컴포넌트에 기존 props에 실려서 전달된다.
>
> 따라서 function Home({ toDos, addToDo }) 이렇게 받는것이다.
>
> 그리고 mapDispatchToProps에 의해 리랜더링 되는걸 볼수 있다
>
> 작동방식
>
> 이미 props를 통해 Home 컴포넌트는 state와 dispatch를 사용할수 있게 되었고 그 상태에서 onsubmit() -> mpaDispatchToProps 의 addToDO 함수로 인해 값이 전달되고 dispatch에 의해 reducer의 state값이 변동되고 변동된 값을 toDos가 받아서 다시 뿌려준다.

```js
import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

- **store.js**

```js
import { createStore } from "redux";

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
```

## 3.4 Deleting To Do

> Delete는 ToDo.js 에서 해주면 되기에 , connect()를 ToDo.js 로 연결했다.
>
> 그리고 주목해야할것은 toDos.map()을 할때 ToDO 컴퍼넌트에 일일이 다 props를 입력하지 않아도 {...toDo}로 함으로써 다 입력할수 있게 해주었다.

- **Home.js**

```js
import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>

      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
          //<ToDo text={toDo.text} id={toDO.id} key={toDO.id}/>
        ))}
      </ul>
    </>
  );
}
// toDos = [{ text: action.text, id: Date.now() },{},{}]
// {...toDO} = {{ text: action.text, id: Date.now() }}

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

- **ToDo.js**

```js
import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function ToDo({ text, onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}

// connect할때 첫번째 파라미터에 mapStateToProps를 사용하지 않을때 null을 해주면 된다.
export default connect(null, mapDispatchToProps)(ToDo);
```

## 3.5 Detail Screen

- **Detail.js**

```js
import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
```

# 4 REDUX TOOLKIT (BONUS)

## 4.0 Redux Toolkit

> 리덕스의 방대한 코딩량을 줄이기 위한방법이다. 하지만 Redux를 완전히 이해하고 사용할떄까지 잠시 접어두자

## 4.1 createAction

## 4.2 createReducer

## 4.3 configureStore

## 4.4 createSlice

## 4.5 Conclusions
