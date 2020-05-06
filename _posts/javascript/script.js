var numbers = {
  array: [3, 5, 10],
  getNumbers: function () {
    return this.array;
  },
};
// 바인딩 함수
var boundGetNumbers = numbers.getNumbers.bind(numbers);
boundGetNumbers(); // => [3, 5, 10]
console.log(boundGetNumbers());
// 객체로부터 메소드를 추출 = 함수 호출
