// network로 요청을해서 백엔드에서 데이터를 가져오는 함수가 있다고 하자.

// const { func } = require("prop-types");

// function fetchUser() {
//   //do network request in 10 secs....

//   return new Promise((resolve, reject) => {
//     resolve("ellie");
//   });
// }

// const user = fetchUser();
// console.log(user);
// user.then(console.log);

// async function fetchUser() {
//   //do network request in 10 secs....
//   return "ellie";
// }

// const user = fetchUser();
// console.log(user);
// user.then(console.log);

// 2. await

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function getApple() {
//   await delay(3000);
//   return "사과";
// }

// function getBanana() {
//   return delay(3000).then(() => "바나나");
// }

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// function getApple() {
//   return delay(1000).then(() => "사과");
// }

// function getBanana() {
//   return delay(1000).then(() => "바나나");
// }

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

// pickFruits().then(console.log);

async function getApple() {
  await delay(1000);
  return "사과";
}

async function getBanana() {
  await delay(1000);
  return "바나나";
}

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join("+")
  );
}

pickAllFruits().then(console.log);
