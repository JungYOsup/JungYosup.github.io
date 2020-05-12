// ### 1. 1500에 태어난 사람들의 list를 가져오세요

// ### 2. 첫번째 이름과 마지막이름을 포함하여 배열을 만드세요

// ### 3. 생년월일을 통해 나이가 많은사람부터 내림차순하세요

// ### 4. 모든 발명가는 몇 년을 살았습니까?

// ### 5. 수명을 기준으로 발명가를 정렬

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johanne", last: "Keppler", year: 1571, passed: 1630 },
  { first: "Nicolous", last: "Corpenicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
];

// ### 1. 1500대에 태어난 사람들의 list를 가져오세요

const array = inventors.filter((item) =>
  item.year >= 1500 && item.year < 1600 ? true : false
);

console.table(array);

// ### 2. 첫번째 이름과 마지막이름을 포함하여 배열을 만드세요
