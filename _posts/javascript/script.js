"use strict";

// Promise is a Javascript object for asynchronous operation.

// Promise는 비동기처리를 위한 자바스크립트 object이다.

// 1. producer
// when new promise is created , the executor runs automatically(promise가 만들어지게 되면 , 자동적으로 실행해버린다. 따라서 버튼을 눌러서 어떠한 network나 readfiles를 하기위해서는 이렇게 작성해서는 안된다.)
const promise = new Promise((resolve, reject) => {
  //doing some heavy work(network, read files 는 비동기적으로 처리하는것이 좋다. 왜?? 오래걸리기 때문에 동기적으로 하면 다른일을 하지 못함)

  console.log("doing something");
  setTimeout(() => {
    resolve("ellie"); //성공적으로 network or readfiles를 햇다면 resolve()함수를 사용한다.

    reject(new Error("no network"));
    //만약 성공적으로 받아오지 못했다면 밑에reject()함수가 실행되어 그 이유를 나타내준다.
  }, 2000);
});

// promise의 then과 catch를 통해 성공일때의 값과, 실패했을때의 error을 받아올수 있다.

//finally() 성공하든 실패하든 상관없이 무조건 실행시키는 함수

promise
  .then((value) => {
    console.log(value); //ellie
  })
  .catch((error) => {
    console.log(error); // no network
  }) //error를 잡기위함
  .finally(() => {
    console.log("final");
  });

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("닭"), 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen}=>"달걀"`)), 1000);
  });
};
const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg}=>병아리`), 1000);
  });
};

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return "빵";
  })
  .then((egg) => cook(egg))
  .then(console.log)
  .catch(console.log);
//---------------------------------------------
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password == "dream") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user, onSuccess, onError) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();

const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then((user) => alert(`Hello" ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
