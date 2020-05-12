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

const array1 = people.some(function (item) {
  const getDate = new Date();
  const CurrentYear = getDate.getFullYear();

  if (CurrentYear - item.year >= 19) {
    return true;
  }
});

console.log(array1); //true

const array2 = people.every(function (item) {
  const getDate = new Date();
  const CurrentYear = getDate.getFullYear();

  if (CurrentYear - item.year >= 19) {
    return true;
  }
});

console.log(array2);

const array3 = comments.find((item) => {
  return item.id === 823423;
});

console.log(array3);

const index = comments.findIndex((item) => item.id === 823423);

console.log(index); // 1

// comments.splice(index, 1);

console.log(...comments);

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.log(newComments);
