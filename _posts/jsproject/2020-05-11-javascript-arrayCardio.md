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

## 배열에서 어떨때 어떤 메소드를 사용해야할까?

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

### 1. Array.proptotype.filter()

- filter의 가장 큰 특징은 **boolean형태의 return값을 갖는다.** **return값이 true일경우 그 요소를 반환하고** **false일경우 반환하지 않는다.** 기본값은 false이다. 예를 들어보자.

* 주의할점:

```js
//1500 년대에 태어난 사람들을 위해 invetors가 있다면 목록을 필터링하십시오.
const fifteen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; // 그 조건에 맞는 요소를 반환함, 즉 조건에 맞는 객체를 반환함
  }
});

console.table(fifteen);
```

### 2. Array.prototype.map()

- filter와 다른점이라고 하면, filter는 return값으로 true/false만 쓸 수 있으며, 요소를 반환하지만, map의 경우 요소가 아닌 **새로운 값을 만들어서** return할 수 있다.

* 주의할점 :

```js
const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.log(fullNames);
```

### 3. Array.prototype.sort()

- sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬 순서를 정의하는 함수. **파라미터를 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.** 따라서 우리가 원하는 내림차순 , 오름차순이 안될수도 있다. 그러므로 오름차순과, 내림차순을 하려면 파라미터를 입력해야한다.

- 주의할점 : **정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.**

* 3.1 문자열 정렬 : 문자열을 정렬하는건 문제가 없지만 , 숫자를 정렬할때 문제가 발생한다. 그 이유는 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따르기 때문이다.

```js
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
```

- 3.2 숫자 정렬 : 숫자를 비교하기 위해 compare 함수는 a에서 b를 뺄 수 있습니다.

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

- 3.2 개체는 해당 속성 중 **하나의 값을 기준**으로 정렬 할 수 있습니다.

```js
//year, 하나의 값을 기준으로 정렬
const ordered = inventors.sort(function (a, b) {
  if (a.year > b.year) {
    return 1; //오름차순
    //return -1; //내림차순
  } else {
    return -1;
  }
});
```

- 3.2를 arrow function으로

```js
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
```

### 4. Array.prototype.reduce()

### 5.
