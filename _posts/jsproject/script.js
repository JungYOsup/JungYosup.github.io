const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

console.log(cities);

// 데이터를 얻어서 cities에 넣기

fetch(endpoint)
  .then((response) => response.json())
  .then((json) => cities.push(...json));

// 내가입력한것과 데이터와 일치하는 부분찾기
function findMatches(wordToMatch, cities) {
  const regexr = new RegExp(`${wordToMatch}`, "ig");
  console.log(regexr);

  const array = cities.filter(
    (city) => city.city.match(regexr) || city.state.match(regexr)
  );

  return array;
}

function numberWithCommas(x) {}

// 일치하는 부분 프린트하기
function displayMatches() {
  const inputValue = this.value;
  const matchesItems = findMatches(inputValue, cities);

  // 받은 데이터를 가지고 return 해줌으로써

  const html = matchesItems.map((matchesItem) => {
    const regex = new RegExp(inputValue, "ig");

    console.log(regex);

    const cityName = matchesItem.city.replace(
      regex,
      `<span class="hl">${inputValue}</span>`
    );

    const stateName = matchesItem.state.replace(
      regex,
      `<span class="hl">${inputValue}</span>`
    );

    return `<li> ${cities} , ${stateName}</li>`;
  });

  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
