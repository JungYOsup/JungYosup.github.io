---
title: "3.Javascript로 드럼 만들기"
excerpt: "javascript 프로젝트 세번째"
categories:
  - jsproject
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## javscript 로 드럼 만들기

- Expert Code

  - HTML 분석

  ```html
  <body>
    <div class="keys">
      <div data-key="65" class="key">
        <kbd>A</kbd>
        <span class="sound">clap</span>
      </div>

      <div data-key="83" class="key">
        <kbd>S</kbd>

        <span class="sound">hihat</span>
      </div>

      <div data-key="68" class="key">
        <kbd>D</kbd>

        <span class="sound">kick</span>
      </div>

      <div data-key="70" class="key">
        <kbd>F</kbd>

        <span class="sound">openhat</span>
      </div>

      <div data-key="71" class="key">
        <kbd>G</kbd>

        <span class="sound">boom</span>
      </div>

      <div data-key="72" class="key">
        <kbd>H</kbd>

        <span class="sound">ride</span>
      </div>

      <div data-key="74" class="key">
        <kbd>J</kbd>

        <span class="sound">snare</span>
      </div>

      <div data-key="75" class="key">
        <kbd>K</kbd>

        <span class="sound">tom</span>
      </div>

      <div data-key="76" class="key">
        <kbd>L</kbd>

        <span class="sound">tink</span>
      </div>
    </div>

    <audio data-key="65" src="sounds/clap.wav"></audio>

    <audio data-key="83" src="sounds/hihat.wav"></audio>

    <audio data-key="68" src="sounds/kick.wav"></audio>

    <audio data-key="70" src="sounds/openhat.wav"></audio>

    <audio data-key="71" src="sounds/boom.wav"></audio>

    <audio data-key="72" src="sounds/ride.wav"></audio>

    <audio data-key="74" src="sounds/snare.wav"></audio>

    <audio data-key="75" src="sounds/tom.wav"></audio>

    <audio data-key="76" src="sounds/tink.wav"></audio>
  </body>
  ```

  - data- 에 관련된 자료 [data-](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

  * data- 속성은 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있도록 해줍니다.

  - 어느 엘리멘트에나 data-로 시작하는 속성은 무엇이든 사용할 수 있습니다. 화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있어요. 아래 data 사용법이 있습니다.

  * CSS 분석

  ```css
  html {
    font-size: 5px;
    /* 페이지 최상위 요소의 폰트 */
    height: 100%;
    width: 100%;
    background: no-repeat center url(../img/drum.jpg);
  }

  body,
  html {
    margin: 0;
    padding: 0;
    font-family: Georgia, "Times New Roman", Times, serif;
  }

  .key {
    border: 0.4rem solid black;
    /* rem은 최상위 폰트 크가 * rem 즉 border가 0.4rem 이면 => 10*0.4 즉 4px이 된다.
  rem이 쓰기 좋은 이유는 최상위 폰트를 바뀌면 나머지가 자동으로 그에 맞게 바뀌기 때문이다.
  (전제조건 : 최상위 요소의 폰트 사이즈가 지정되어야 rem이 정상적으로 작동)*/
    border-radius: 0.5rem;
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 0.5rem;
    width: 10rem;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.4);
    text-shadow: 0 0 0.5rem balck;
    transition: all 0.07s ease;
    /* CSS 트랜지션은 CSS 속성을 변경할 때 애니메이션 속도를 조절하는 방법을 제공합니다. 속성 변경이 즉시 영향을 미치게 하는 대신, 그 속성의 변화가 일정 기간에 걸쳐 일어나도록 할 수 있습니다.  */
    /* transition : transition-property , transition-duration ,transition-timing-funtion , transition-delay */
    /* transition은 동시에 2개를 지정할수도 있다.
  ex)  width 1s ease, background-color 13s ease;  (너비만 1초 극초반은 느리게,초반은 빠르게,종료시점은 느리게 변화한다., 배경색이 13초에 너비만 1초 극초반은 느리게,초반은 빠르게,종료시점은 느리게 변화한다.)*/
  }

  .playing {
    transform: scale(1.1);
    border-color: #ffc600;
    box-shadow: 0 0 1rem #ffc600;
  }

  kbd {
    display: block;
    font-size: 4rem;
  }

  .sound {
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #ffc600;
  }
  ```

  - Javascript 분석

  ```js
  "use strict";

  window.addEventListener("keydown", function (e) {
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    // audio.currentTime = 0;
    // audio.play();
    key.classList.add("playing");
  });

  function removeTransition(e) {
    console.log(e.propertyName);
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  ```

  - e(이벤트) : 특정 이벤트가 발생했을때, 그 이벤트의 변수, console.log(e)를 통해서 그 이벤트가 가지는 속성을 파악할수 잇다.

  - querySelector() 복잡한 선택자 : 선택자의 속성을 통해서 특정선택자를 고를수 잇다.

  ```html
  <div class="user-panel main">
      <input name=login></input>
  </div>
  ```

  ```js
  var el = document.querySelector("div.user-panel.main input[name=login]");
  ```

  - transitioned : 이벤트중에 하나로, transition이 발생했을때를 의미함

  * this가 의미하는것은?? ... 잘모르겠다...

  ```js
  function removeTransition(e) {
    console.log(e.propertyName);
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
  }
  ```

  여기서 this는

* Yosup Code

  ```js
  "use strct";

  window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;
    // audio.play();

    key.classList.add("playing");
    setTimeout(function () {
      key.classList.remove("playing");
    }, 70);
  });
  ```

- 결론 : 나는 transtion이 발생했다 사라지는 현상을 , setTimeout() 메서드를 사용해야할것 같았는데 이것을 사용할 경우 CSS에 적용된 시간과 내사 JS에서 설정한 시간이 다를 경우 화면상 문제가 발생하므로, 차라리 transition이 발생했을때 playing을 제거한다면, CSS와 JS의 시간을 맞춰야하는 불편함이 사라진다.
