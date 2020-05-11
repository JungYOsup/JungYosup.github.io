---
title: "Highter order function (고차함수)"
excerpt: "고차 함수"
categories:
  - javascript
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 고차함수 : 고수함수는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다.

**이 파트에서 중요한것은 각자의 함수가 어떠한 상황에서 사용되는지를 아는것이 중요하다**

## 1. Array.prototype.sort

- 배열의 요소를 적절하게 정렬한다. 원본 배열을 직접 변경하며 정렬된 배열을 반환한다.

- sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다. 정렬 순서를 정의하는 함수. **파라미터를 생략하면 배열은 각 요소의 문자열 변환에 따라 각 문자의 유니 코드 코드 포인트 값에 따라 정렬됩니다.** 따라서 우리가 원하는 내림차순 , 오름차순이 안될수도 있다. 그러므로 오름차순과, 내림차순을 하려면 파라미터를 입력해야한다.

- 주의할점 : **정렬한 배열. 원 배열이 정렬되는 것에 유의하세요. 복사본이 만들어지는 것이 아닙니다.**

### 1.1 문자열 정렬 : 문자열을 정렬하는건 문제가 없지만 , 숫자를 정렬할때 문제가 발생한다. 그 이유는 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따르기 때문이다.

- 1.1.1 문자열 오름차순

```js
const alphabet = ["a", "d", "f", "c"];
alphabet.sort();
console.log(months);
// expected output: Array ["a","c","d","f"]
```

- 1.1.2 문자열 내림차순

```js
const alphabet = ["a", "d", "f", "c"];
alphabet.reverse();
console.log(months);
// expected output: Array ["f","d","c","a"]
```

- 1.1.3 숫자정렬

```js
const points = [40, 100, 1, 5, 2, 25, 10];
points.sort();

console.log(points); //[1,10,100,2,25,40,5]
```

숫자 정렬이 안돼는 이유는?

**기본정렬순서는 배열의 요소가 숫자 타입이라할지라도 일시적으로 문자열로 변환되어 정렬하기 때문이다. 이를 방지하기 위해 sort 메서드의 인자로 정렬 순서를 정의하는 비교 함수를 전달한다.**

### 1.2 비교함수

```js

function(a,b){
    return a-b
}

```

- 1.2.1 숫자 정렬 : 숫자를 비교하기 위해 compare 함수는 a에서 b를 뺄 수 있습니다.

```js
const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b; //오름차순
  //return b-a // 내림차순
});
console.log(numbers);

// [1, 2, 3, 4, 5]
```

- 1.2.2 특정값의 정렬 :개체는 해당 속성 중 **하나의 값을 기준**으로 정렬 할 수 있습니다.

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

arrow function으로

```js
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
```

## 2. Array.prototype.forEach()

- forEach는 배열을 순회하며 배열의 각 요소에 대하여 인자로 주어진 콜백함수를 실행한다. 콜백함수의 매개변수를 통해 배열요소의 값(item), 요소 인덱스(index), 순회할 배열(array)을 전달받을수 있다. 반환값은 undefined이다.

* forEach 메소드는 **원본 배열을 변경하지 않는다.**

```js
const total = 0;

const testArray = [1, 3, 5, 7, 9];

testArray.forEach(function (item, index) {
  console.log(`${index} = item`);
});
```

### 2.1 원본 배열을 변경하려면 콜백 함수의 3번째 인자를 이용한다.

```js
const total = 0;

const testArray = [1, 3, 5, 7, 9];

testArray.forEach(function (item, index, array) {
  array[index] = Math.pow(item, 2);
});

console.log(textArray); //[1,4,9,16]
```

### 2.2 forEach 메소드는 for문과는 달리 breack 문과 continue 문을 사용 할수 없습니다.

### 2.3 두번째 인자로 this를 전달할수 있다.

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}

Conter.prototype.add = function (array) {
  array.forEach(function (entry) {
    this.sum += entry; //2번째 인자 this를 전달하지 않으면 this는 window
    this.count++;
  }, this);
};

var Counter = new Counter();
Counter.add([2, 5, 9]);
console.log(counter.count); //3
console.log(counter.sum); //16
```

### 꿀팁 !!

- ES6 Arrow Function을 사용하면 this를 생략하여도 동일한 동작을 한다.

## 3. Array.prototype.map<U>()

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수의 반환값(결과값)으로 **새로운 배열을 생성하여 반환한다**. **이때 원본 배열은 변경되지 않는다.**

* forEach()는 **배열을 순회하며 요소 값을 참조하여 무언가를 하기 위한 함수** , **map()은 배열을 순회하며 요소 값을 다른값으로 매핑하기 위한 함수이다.**

```js
var numbers = [1, 4, 9];

var roots = numbers.map(function (item) {
  return Math.sqrt(item);
});

//축약 표현
// var roots = numbers.mao(Math.sqrt(item));

// 원본 배열은 바뀌지 않는다.
console.log(roots); // [1,2,3]
console.log(numbers); //[1,4,9]
```

### 3.1 두번째 인자로 this를 전달할수 있다.

## 4. Array.prototype.filter()

- 배열을 순회하며 각요소에 대하여 인자로 주어진 콜백함수의 실행결과가 true인 배열요소의 값만을 추출한 새로운 배열을 반환한다. 배열에서 **특정케이스만 필터링 조건으로 추출하여 새로운 배열을 만들고 싶을때 사용한다.** **이때 원본 배열은 변경되지 않는다.**

```js
const result = [1, 2, 3, 4, 5].filter(function (item, index, array) {
  console.log(`${index} = ${item}`);
  return item % 2; //홀수만 필터링한다 (1은 true로 평가된다.)
});

console.log(result);
```

### 4.1 두번째 인자로 this를 전달할수 있다.

## 5. Array.prototype.reduce()

배열을 순회하며 각요소에 대하여 **이전의** 콜백함수 실행 반환값을 전달하여 콜백함수를 실행하고 그 결과를 반환한다.

### 5.1 배열의 합 구하기

```js
const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function (
  previousValue, //이전 콜백의 반환값
  currentValue, // 배열 요소의 값
  currentIndex, // 인덱스
  array // 순회할 배열
) {
  console.log(
    previousValue + "+" + currentValue + "=" + (previousValue + currentValue)
  );
  return previousValue + currentValue; //결과는 다음 콜백의 첫번째 인자로 전달된다.
  console.log(sum);

  //   1 : 1+2=3
  //   2 : 3+3 =6
  //   3 : 6+4 =10
  //   4 : 10+5 = 15

  // 15
});
```

**currentValue의 시작은 항상 index가 1부터이다.**
**previousValue는 이전값이 하닌 이전콜백의 반환값이다**

### 5.1 배열의 최대값 구하기

```js
previousValue, //이전 콜백의 반환값
currentValue, // 배열 요소의 값
const arr = [1, 2, 3, 4, 5];
var max = arr.reduce(function (prev, cur) {
  return prev > cur ? prev : cur;
});

console.log(max); //5 : 최대값
```

## 6. Array.protoType.some()

- 배열 내 **일부 요소가** 콜백 함수의 **테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환**한다. 콜백함수의 매개변수를 통해 배열요소의 값, 요소인덱스, 순회할 배열을 전달 받을 수 있다.

```js
const res = [2, 5, 8, 1, 4].some(function (item) {
  return item > 10;
});

console.log(res); // false
```

### 6.1 some()도 map(),forEach()와 같이 두번재 인자로 this를 전달할 수 있다.

## 7. Array.protoType.every()

- 배열 내 **모든 요소가** 콜백 함수의 **테스트를 통과하는지 확인하여 그 결과를 boolean으로 반환**한다. 콜백함수의 매개변수를 통해 배열요소의 값, 요소인덱스, 순회할 배열을 전달 받을 수 있다.

## 8. Array.protoType.find()

- 배열을 순회하며 각 요소에 대하여 인자로 주어진 콜백함수를 실행하여 그 결과가 **참인 첫번째 요소를 반환한다.** 따라서 filter의 반환값은 언제나 배열이다. 하지만 find는 콜백함수를 실행하여 그 결과가 참인 첫번째 요소를 반환하므로 find의 결과값은 해당 요소값이다.

```js
var users = [
    {id : 1, name : 'Lee'},
    {id : 2, name : 'Kim'},
    {id : 2, name : 'Sup'}
]

const result = users.find(funtion(item){
        return item.id === 2;
});

console.log(result) // {id : 2 , name : 'kim'}

const result = users.filter(funtion(item){
        return item.id === 2;
});

console.log(result) // [ {id : 2, name : 'Kim'},{id : 2, name : 'Sup'}]

```

## 8. Array.protoType.findIndex()

배열을 순회하며 각 요소에 대하여 인자로 주어진 **콜백함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환한다.** 콜백함수의 실행 결과가 참인 요소가 존재하지 않는다면 **-1을 반환**한다.
