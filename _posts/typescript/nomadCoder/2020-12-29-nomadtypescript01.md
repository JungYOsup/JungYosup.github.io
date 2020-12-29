---
title: "1.Typescript로 블록체인 만들기"
excerpt: "Typescript로 블록체인 만들기"
categories:
  - typescript
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 1.0 Introuction and What are we building

- (1).TypeScript 를 사용하는 첫번째 이유
  : 자바스크립트는 규칙없이 사용하기 쉽고 우리가 원하는 방향대로 수정이 편하다, 하지만 그렇기 때문에 큰 프로젝트를 하거나 팀으로 일할때, 버그를 최소화 하고 싶을때는 단점이 된다. 그렇기에 규칙이 있는 Typescript를 사용하는것이다.

* (2).아래의 예시를 통해 어떤 차이가 있는지 알수 있다.

  - 아래 코드는 자바스크립트 문법상 어떠한 문제도 없으므로 자바스크립트 엔진은 아무런 이의 제기없이 위 코드를 실행할 것이다. 이러한 상황이 발생한 이유는 변수나 반환값의 타입을 사전에 지정하지 않는 자바스크립트의 동적 타이핑(Dynamic Typing)에 의한 것이다.

  ```js
  function sum(a, b) {
    return a + b;
  }

  sum("x", "y"); // 'xy'
  ```

  - TypeScript는 정적 타입을 지원하므로 컴파일 단계에서 **오류를 포착할 수 있는 장점**이 있다. **명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술**할 수 있다. 이는 코드의 가독성을 높이고 예측할 수 있게 하며 디버깅을 쉽게 한다.

  ```ts
  function sum(a: number, b: number) {
    return a + b;
  }

  sum("x", "y");
  // error TS2345: Argument of type '"x"' is not assignable to parameter of type 'number'.
  ```

## 1.1 Setting Typescript Up

- (1).yarn init

- (2).Typescript 설치

  - > npm install typescript --save-dev

- (3).tsconfig.json 파일 생성

```json
// module : node.js를 평범하게 사용하고 다양한걸 import 하거나 export 할 수 있게 만듬
// target : 어떤 버전의 javascript로 컴파일 되고 싶은 지를 적음
// sourceMap : sourcemap 처리여부(true/false)
// include : ["어떤 파일이 컴파일 과정에 포함되는지 Typescript한테 알려줌"]

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "ES2015",
    "sourceMap": true
  },
  "include": ["index.ts"],
  "exclude": ["node_modules"]
}
```

- (4).ts 파일 생성 , index.ts

* (5).ts 를 .js로 바꿈

  - > npx tsc
    >
    > why ? Node.js는 Typescript를 이해하지 못하기 때문에 Javascript 코드로 컴파일 하는 작업이 필요함

- (6)yarn start로 index.js를 실행시켜주기 위해 설정(매번 npx tsc를 할 필요없게 하기 위해)

```json
{
  "name": "TypeChain",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/JungYOsup/TypeChain.git",
  "author": "yosup <yosup1004@gmail.com>",
  "license": "MIT",
  "devDependencies": {
    "typescript": "^4.1.3"
  },
  "scripts": {
    "start": "node index.js",
    "prestart": "npx tsc"
    // yarn start 를 할경우 prestart가 먼저 동작 npx tsc 즉 .ts를 js로 바꿔줌(Node.js는 Typescript를 이해하지 못하기 때문에 Javascript 코드로 컴파일 하는 작업이 필요함)
    // 그 바꿔준 파일인 index.js 를 실행시킴
  }
}
```

## 1.2 First steps with Typescript

- (1).TypeScript 를 사용하는 두번째 이유

  - javascript 는 sayHi()의 파라미터에 gender가 선언이 안돼도 undefined가 전달되므로 오류가 안생김

  ```js
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  const name = "jung",
    age = 24,
    gender = "male";
  const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };
  sayHi(name, age);
  //# sourceMappingURL=index.js.map

  // 결과값 : Hello jung, you are 24, you are a undefined
  // 장점 : 코드 작성하기가 편하다
  // 단점 : 명시적으로 gender의 파라미터로 값이 들어가는지 안들어가는지 알기가 어렵다.
  ```

  - typescript는 sayHi()의 파라미터의 geden가 선언이 안돼면 오류가 발생, 명시적으로 파라미터 3개를 넣으라고 알려줌

  ```ts
  const name = "jung",
    age = 24,
    gender = "male";

  const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi(name, age, gender);

  export {};

  // index.ts:9:1 - error TS2554: Expected 3 arguments, but got 2.9 sayHi(name, age); index.ts:5:275 const sayHi = (name, age, gender) => {An argument for 'gender' was not provided.Found 1 error.
  ```

  - 만약 내가 파라미터를 2개를 넣어주고 싶고 gender은 있어도 되고 없어도 될경우에는 어떻게 할까 ? gender 파라미터는 선택적이야

  ```ts
  const name = "jung",
    age = 24,
    gender = "male";

  const sayHi = (name, age, gender?) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
  };

  sayHi(name, age);

  export {};
  // 결과값 : Hello jung, you are 24, you are a undefined
  ```

  - 또 이렇게 될경우 명시적으로 **name, age는 필수로 들어가야하는데 gender은 선택적이구나 라고 코드만 보고 명시적으로 바로 알수가 있다.**

## 1.3 Types in Typescript

- (1).Typescript는 또 이렇게 명시적으로 type을 정해줄수 있다. 파라미터 옆에 : string 이 의미하는것은 return 타입이 무엇인지를 명시해준다.

```ts
const name = "jung";
const age = 24,
  gender = "male";

const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}`;
};

sayHi("jung", 24, "안녕");

export {};
```

- (2).TSC watch

> TSC watch : 원래는 ts코드가 바뀔 때마다 js로 컴파일 한 뒤, node로 실행하는 과정을 반복해야했지만, tsc-watch를 사용하면 ts코드가 바뀔때마다 자동으로 컴파일 해준 뒤 js로 실행시켜준다.

- 순서

  - 1.tsc-watch 설치 : yarn add tsc-watch --dev

  * 2.tsconfig.json 파일 내용 수정

  ```json
  // module : node.js를 평범하게 사용하고 다양한걸 import 하거나 export 할 수 있게 만듬
  // target : 어떤 버전의 javascript로 컴파일 되고 싶은 지를 적는거임
  // sourceMap : sourcemap 처리여부(true/false)
  // include : ["어떤 파일이 컴파일 과정에 포함되는지 Typescript한테 알려줌" , ["src/**/*"] : src안의 모든 ts 파일을 의미함]
  // outDir : compile할 위치를 지정함
  {
    "compilerOptions": {
      "module": "commonjs",
      "target": "ES2015",
      "sourceMap": true,
      "outDir": "dist"
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
  }
  ```

- 3.package.json 파일 수정

  ```json
  {
    "name": "TypeChain",
    "version": "1.0.0",
    "main": "index.js",
    "repository": "https://github.com/JungYOsup/TypeChain.git",
    "author": "yosup <yosup1004@gmail.com>",
    "license": "MIT",
    "devDependencies": {
      "typescript": "^4.1.3"
    },
    "scripts": {
      "start": "tsc-watch --onSuccess \" node dist/index.js \" ",
      // tsc-watch의 실행이 성공하면(--onSuccess) dist 안에 있는 index.js를 실행함
      "prestart": "npx tsc"
    },
    "dependencies": {
      "tsc-watch": "^4.2.9"
    }
  }
  ```

  - 4.ts값 수정시 node script 할 필요없이 자동으로 수정되는것이 보임

## 1.4 interface on Typesscript
