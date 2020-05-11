"use strict";

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// Array.prototype.filter()
// 1. filter the list if invetors for those who were born in the 1500's
//1500 년대에 태어난 사람들을 위해 invetors가 있다면 목록을 필터링하십시오.

const fifteen = inventors.filter((inventor) => {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true; // 그 조건에 맞는 객체를 리턴함 == inventor
  }
});

console.table(fifteen);

// same code

// const fifteen = inventors.filter(
//   (inventor) => inventor.year >= 1500 && inventor.year < 1600
// );

// Array.protoptye.map()
// 2. Give us an array of the inventory first and last name
// 재고 이름과 성으로 구성된 배열을 제공하십시오

const fullNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventory by birthdate, oldest to youngest
//생년월일, 가장 오래된 것부터 가장 어린 것까지 인벤토리를 정렬

// const ordered = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1; //오름차순
//   } else {
//     return -1;
//   }
// });

// console.table(ordered);

// Array.prototype.reduce()
// 4. How many year did all the inventory live?
// 모든 재고는 몇 년 동안 살았습니까?

// for (var i = 0; i < inventors.length; i++) {
//   totalYears += inventors[i].year;
// }

const tatalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

const months = [""];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const total = 0;

const testArray = [1, 3, 5, 7, 9];

testArray.forEach(function (item, index, array) {
  array[index] = Math.pow(item, 2);
});

console.log(testArray);
