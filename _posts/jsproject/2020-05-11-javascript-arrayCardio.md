---
title: "7.배열을 다루는 프로젝트"
excerpt: "javascript 프로젝트 일곱번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 1.배열에서 어떨때 어떤 메소드를 사용해야할까? 라는 개념을 깨우치기 위한 연습(1)

- 전체 데이터

```js
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];
```

## 문제]

### 1. 1500에 태어난 사람들의 list를 가져오세요

```js
const array1 = inventors.filter((inventor) =>
  inventor.year >= 1500 && inventor.year < 1600 ? true : false
);

console.table(array1);
```

### 2. 첫번째 이름과 마지막이름을 포함하여 배열을 만드세요

```js
const array2 = inventors.map(
  (inventor) => `${inventor.last} ${inventor.first}`
);

console.table(array2);
```

### 3. 생년월일을 통해 나이가 많은사람부터 내림차순하세요

```js
const array3 = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(array3);
```

### 4. 모든 발명가는 몇 년을 살았습니까?

```js
const array4 = inventors.reduce((sum, inventor) => {
  return sum + (inventor.passed - inventor.year);
}, 0);

console.log(array4);
```

### 5. 수명을 기준으로 발명가를 정렬

```js
const array5 = inventors.sort((a, b) =>
  a.passed - a.year > b.passed - b.year ? 1 : -1
);

console.table(array5);
```

### 6. 이들 각각의 인스턴스를 요약합니다.(중요하니 잘 보도록)

```js
const data = [
  "car",
  "car",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const array6 = data.reduce(function (obj, item) {
  if (!array[item]) {
    array[item] = 0;
  }
  array[item]++;
  return obj;
  // item이 정해진것이 아니므로 . 이 아닌 []를 사용하였다는것에 주목하자
}, {});
```

## 2.배열에서 어떨때 어떤 메소드를 사용해야할까? 라는 개념을 깨우치기 위한 연습(2)

- 전체 데이터

```js
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 203423 },
  { text: "Ramen in my fav food ever", id: 123423 },
  { text: "Nice Nice Nice!", id: 542523 },
];
```

## 문제]

### 1. 적어도 1명의 19살인 사람이 있습니까?

```js
const array1 = people.some(function (item) {
  const Date = new Date();
  const CurrentYear = Date.getFufllYear();

  if (CurrentYear - item.year >= 19) {
    return true;
  }
});

console.log(array1); //true
```

### 2. 모든사람들이 19살 사람입니까?

```js
const array1 = people.every(function (item) {
  const Date = new Date();
  const CurrentYear = Date.getFufllYear();

  if (CurrentYear - item.year >= 19) {
    return true;
  }
});

console.log(array1); //true
```

### 3. ID 가 823423 인 사람을 찾으세요

```js
const array3 = people.find((item) => {
  return item.id === 823423;
});
```

### 4. ID 가 823423 인 사람을 지우세요

```js
const index = comments.findIndex((item) => item.id === 823423);

console.log(index); // 1

comments.splice(index, 1);

splice 또는 이방법을 사용한다.

// const newComments = [
//   ...comments.slice(0,index);
//   ...comments.slice(index+1);
// ];
```

### splice와 spread 연산자(...) 와 slice

[splice mdn]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice")

[spread 와 rest ](https://jeong-pro.tistory.com/117)

[slice]("https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice")
