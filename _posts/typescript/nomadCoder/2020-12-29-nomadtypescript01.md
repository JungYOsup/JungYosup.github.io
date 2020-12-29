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
