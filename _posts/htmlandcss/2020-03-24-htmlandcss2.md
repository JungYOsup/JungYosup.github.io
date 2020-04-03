---
title: "2.HTML과CSS를 이용한 연습 두번째"
excerpt: " '온라인 강의 사이트' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 온라인 강의 사이트

![](/assets/images/practice/lecture/practice2.PNG)

### 코드 비교

- **HTML 구성(1)**

  - Expert Code : 클래스명을 작성할때, 여러 페이지에 걸쳐 작성될 테그들, 즉 활용도가 높은 테그들은 그 용도 파악하기 쉽게 접두어를 붙인다. 또한 이런애들은 뼈대의 역할을 할뿐이어서 디자인 서식을 준다거나 하지 않는다.

  ```html
  <div class="l_wrapper ">
    <div class="l_sidebar">Side</div>
    <div class="l_main">Main</div>
  </div>
  ```

  - Yosup Code : 그냥 위치에 따라 클래스명을 작성함

  ```html
  <div class="wrapper">
    <div class="lecture"></div>
    <aside class="payment" lang="ko"></aside>
  </div>
  ```

* **HTML 구성(2)**

  - Expert Code : 위에서 말한것처럼 l_wrapper를 우리가 뼈대로 이미 정했기 때문에 l_wrapper에 padding을 주변 다른곳에서 재활용할때에도 상하단에 padding이 적용되기 때문에 그걸 다른요소(contents)로 감싸서 그 테그에다가 padding을 주었다. 마찬가지로 l_sidebar와 l_main 역시 그 자체에 어떠한 디자인 서식을 주기 보다는 또다른 테그를 만들어 그 테그에다 디자인을 줌

  ```html
  <div class="contents">
    <div class="l_wrapper">
      <div class="l_sidebar">
        <div class="checkout"></div>
      </div>
      <div class="l_main">
        <div class="course"></div>
      </div>
    </div>
  </div>
  ```

  ```css
  .contents {
    padding: 40px 0;
  }
  .checkout {
    background-color: #666;
  }
  ```

  - Yosup Code : wrapper에 margin을 줌(이러면 나중에 재활용할때에 다른것도 margin에 영향을 받게됨)

  ```html
  <div class="wrapper">
    <div class="lecture"></div>
    <aside class="payment" lang="ko"></aside>
  </div>
  ```

  ```css
  .wrapper {
    width: 1200px;
    margin: 30px auto;
  }
  ```

* **HTML 구성(3)**

  - Expert Code : 같은 margin이 적용하기 위해 공통의 클래스를 적용하였다.

  ```html
  <div class="checkout-section">
    <p class="price">
      11,000원
      <span class="price-discount">5,500원</span>
    </p>
  </div>
  <div class="checkout-section">
    <a href="#" class="button button_block mb_5">장바구니 담기</a>
    <a href="#" class="button button_block button_important">바로구매</a>
  </div>
  <div class="checkout-section">
    section2
  </div>
  ```

  ```css
  .checkout-section {
    margin: 20px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  ```

  - Yosup Code : 같은 margin을 적용하기 위해 infromaition 이라는 하나의 div로 묶어줬다. 이럴경우 cost 와 button detail의 간격도 떨어트려야 하기 때문에 또 다른 css를 적용할수 밖에 없다.

  ```html
  <div class="information">
    <div class="cost">
      <strong>11,000원</strong>
      <strong>5,500원</strong>
    </div>
    <button type="button">장바구니에 추가</button>
    <button type="button">지금 구매</button>
    <div class="detail">
      <strong>이 강좌는 다음을 포함합니다.</strong>
      <ul>
        <li>46.5시간 주문형 동영상</li>
        <li>81개의 글</li>
        <li>85개의 다운로드 가능 리소스</li>
        <li>평생 이용</li>
        <li>모바일 및 TV에 대한 엑세스</li>
        <li>수료증</li>
      </ul>
    </div>
  </div>
  ```

  ```css
  .information {
    width: 250px;
    margin: 0 auto;
  }
  .payment button {
    margin-top: 10px;
  }
  .payment .detail {
    margin: 0 auto;
    padding-top: 30px;
  }
  ```

* **HTML 구성(4)**

  - Expert Code : class에 하위 요소에는 '-' 를 어떠한 기능을 할때는 언버바 를 붙였다.

  ```html
  <div class="l_wrapper ">
    <div class="l_sidebar">
      <div class="checkout">
        <div class="video">
          Video
        </div>
        <div class="checkout-section">Price</div>
        <div class="checkout-section">Section 1</div>
        <div class="checkout-section">Section 2</div>
      </div>
    </div>
    <div class="l_main">Main</div>
  </div>
  ```

  - Yosup Code : 그냥 의미 없는 class를 작성하였다. 하위요소에 - 를 해야하는데 언더바를 붙였네..

  ```html
  <header class="intro">
    <div class="intro_title">
      <h1>THE WEB DEVELOPER BOOTCAMP</h1>
      <strong>
        Complete Data Science Training : Mathematics, Statistics,Python,
        Advanced Statistics in Python, Machine & Deep Learning
      </strong>
    </div>

    <div class="intro_img">
      <img src="/assets/images/practice/lecture/logo.png" alt="lecture logo" />
      <strong>Creator Joseph</strong>
    </div>

    <img
      src="/assets/images/practice/lecture/star-sprite.png"
      alt="five start"
      aria-label="lecture 
            evaluation"
    />
  </header>
  ```

- **CSS의 작성(1)**

  - Expert Code : css를 작성할때 공통으로 사용되는 요소 , 뼈대로 사용되는 요소, 구성요소 등 따로 분리해서 작성한다.

  ```css
  /* ---------------Layours :뼈대---------------------- */
  .l_wrapper {
    width: 960px;
    margin: 0 auto;
  }
  .l_sidebar {
    width: 260px;
    float: right;
    margin-left: 20px;
    width: 300px;
  }

  .l_main {
    border: 10px solid red;
    background-color: green;
    overflow: hidden;
  }

  /* ----------------util------------*/

  .mb_5 {
    margin-bottom: 5px;
  }
  .mb_10 {
    margin-bottom: 10px;
  }

  /* -----Commons : 공통적으로 사용할수 있는 것들-----*/

  .clearfix:after {
    content: " ";
    display: table;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
    background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;
  }

  .button_block {
    display: block;
    text-align: center;
  }

  /* ------------Components---------------- */

  .contents {
    padding: 40px 0;
  }

  .checkout {
    background-color: #666;
  }
  ```

  - Yosup CODE : 구분 없이 그냥 작성

  ```css
  .wrapper {
    width: 1200px;
    margin: 30px auto;
  }
  .lecture {
    float: left;
    width: 900px;
  }
  .lecture {
    float: left;
    width: 900px;
  }
  .lecture .intro {
    width: auto;
    background-image: url(/assets/images/practice/lecture/cover.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 200px;
    padding: 25px 25px;
  }
  ```

- **CSS의 작성(2) : CSS 방법론**

  - Expert Code : CSS에 하위요소를 선언해서 사용하지 않고, 거의 클래스명으로 CSS를 적용시켜주었다. 이렇게 되면 HTML의 클래스의 명이 복잡해지겠지만 , CSS가 많아지고 복잡해지는것 보단 나은 방식이다.

  ```html
  <div class="checkout-section">
    <a href="#" class="button button_block mb_5">장바구니 담기</a>
    <a href="#" class="button button_block button_important">바로구매</a>
  </div>
  ```

  - Yosup Code : 하위 요소 남발..

  ```html
  <div class="innerbox">
    <table>
      <tr class="rd-only">
        <th>arrow img</th>
        <th>title</th>
        <th>date</th>
      </tr>
      <tr>
        <td>▶</td>
        <td><a href="#">A Note On Asking For Help</a></td>
        <td>20.12</td>
      </tr>
      <tr>
        <td>▶</td>
        <td><a href="#">Adiitional FREE Content</a></td>
        <td>20.12</td>
      </tr>
    </table>
  </div>
  ```

  ```css
  .innerbox table a {
    text-decoration: none;
    color: gray;
  }
  .innerbox table a:hover {
    text-decoration: underline;
  }

  .innerbox table td:last-child {
    position: absolute;
    right: 15px;
  }
  ```

- **float를 선언할 테그의 위치**

  - EXPERT Code : float가 적용될 요소를 마크업 상단에 위치시켰다. 일반적으로 적용될 float가 상단에 위치해야한다고함

  ```html
  <div class="l_wrapper ">
    <div class="l_sidebar">Side</div>
    <div class="l_main">Main</div>
  </div>
  ```

  ```css
  .sidebar {
    background-color: orange;
    width: 300px;
    float: right;
  }
  /* float가 적용될 요소는 마크업상 상단에 위치해야한다. */
  .main {
    border: 10px solid red;
    overflow: hidden;
  }
  ```

  - Yosup Code : 나는 보이는 순서대로 마크업을 구성하였고 그에 따라 float를 2번쓰는 경우가 발생하였다.

  ```html
  <div class="wrapper">
    <div class="lecture"></div>
    <aside class="payment" lang="ko"></aside>
  </div>
  ```

  ```css
  .lecture {
    float: left;
    width: 900px;
  }

  .payment {
    width: 300px;
    height: 939px;
    float: left;
    background-color: black;
    margin: 0 auto;
  }
  ```

  - 의문점(1) : 그러면 보이는대로 작성하고 sidebar에다가 float: right를 해주면 되지 않을까?
  - 결과 : 너가 제대로 float에 대해 이해를 못하고 있구나, 보이는대로 작성하고 float:right를 작성하면 다른 모습이 나오지..

  ```html
  <div class="l_wrapper ">
    <div class="l_main">Main</div>
    <div class="l_sidebar">Side</div>
  </div>
  ```

  ```css
  .sidebar {
    background-color: orange;
    width: 300px;
    float: right;
  }
  /* float가 적용될 요소는 마크업상 상단에 위치해야한다. */
  .main {
    border: 10px solid red;
    overflow: hidden;
  }
  ```

  - 의문점(2) : 그러면 순서대로 작성하고 위에거에다가 float : left를 해주면 되지 않을까?
  - 결과 : 너가 나중 결과를 생각하지 않고 작성한 코드구나, 나중에 휴대폰 화면에서 side가 main 위로 올라가야할때 코드 작성이 어려움이 생긴다.

  ```html
  <div class="l_wrapper ">
    <div class="l_main">Main</div>
    <div class="l_sidebar">Side</div>
  </div>
  ```

  ```css
  .l_sidebar {
    overflow: hidden;
    background-color: orange;
  }

  .l_main {
    border: 10px solid red;
    float: left;
    width: 660px;
  }
  ```

-**Vedio 사용 방법**

- EXPERT Code : 외부에서 비디오를 받아왔는데, 그럴경우 지정된 높이와 너비에 의해 부모 밖으로 비디오가 나가는 현상이 발생한다.
  그걸 방지하기 위해 .video-iframe 에 absolute를 주고 부모의 너비와 높이 만큼 꽉 채웠다.
  그런데 특이한점은 부모의 높이를 padding-top: % 를 통해 주었다는것이다. padding-top : % 는 적용된 테그의 너비만큼 비례해서 높이가 정해진다고 한다.(따라서 padding-top : 100% 는 정사각형 모양이 나오는것임)

  그냥 height px로 주면 되지 않을까? 그럴경우 px은 고정되어있기 때문에 나중에 반응형 작업을 할때 크게 나와야할 상황에서도 적용한 px만큼 나오기 때문에 좋지 않은 방법이다.
  그러면 height 를 %로 주면 되지 않을까? height % 는 부모의 높이에 따른 %를 주기 때문에 비디오의 16:9 사이즈를 유지하기가 쉽지 않다.

  ```html
  <div class="video">
    <iframe
      src="https://player.vimeo.com/video/27246366?color=ffffff"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
      class="video-iframe "
    ></iframe>
  </div>
  ```

  ```css
  .video {
    position: relative;
    background-color: dodgerblue;
    padding-top: 56.25%;
  }

  .video-iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  ```

  - Yosup Code : 다양한 비디오에도 감당하기 위해 다음과 같은 HTML을 준건 나쁘지 않았는데, px로 줬네.. 이러면 반응형 작업할때 일을 두번 해야하는 현상이 생기더라..

  ```html
  <video controls>
    <source src="/assets/images/practice/lecture/sujin2.mp4" type="video/wav" />
    <source src="/assets/images/practice/lecture/sujin2.mp4" type="video/ogg" />
    <source
      src="/assets/images/practice/lecture/sujin2.mp4"
      type="video/mpeg"
    />
  </video>
  ```

  ```css
  .wrapper video {
    width: 300px;
    height: 250px;
  }
  ```

- **Button을 만드는 방법**

  - EXPERT Code : a 테그로 button을 만들어서 사용했다. 하지만 a 테그는 inline 요소이기에 padding top , bottom을 주면 안된다고 했으므로
    a 테그를 원래 button의 display 속성인 inline-block으로 해준다. 그러나 지금의 상황에서는 한줄에 하나의 button이 필요하므로 또다른 클래스를 만들어 block요소를 적용해주었다.
    .button 요소에 직접 block과 maring을 줘도되지만 이 button은 다른 곳에서도 사용되는 공통의 요소이기 때문에 또다른 클래스인 md_5 나 button_block를 추가 시켜준것이다

  ```html
  <a href="#" class="button button_block mb_5">장바구니 담기</a>
  <a href="#" class="button button_block button_important">바로구매</a>
  ```

  ```css
  .button {
    background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;
  }

  .button_block {
    diplay: block;
    text-align: center;
  }

  /* util */
  .mb_5 {
    margin-bottom: 5px;
  }
  .mb_10 {
    margin-bottom: 10px;
  }
  .mb_15 {
    margin-bottom: 15px;
  }
  ```

  - Yosup Code : 그냥 버튼 테그를 사용함, 버튼 자체는 inline-block이므로 따로 한줄에 하나씩 사용하기 위해 block으로 바꿔주기만 함

  ```html
  <button type="button">장바구니에 추가</button>
  <button type="button">지금 구매</button>
  ```

  ```css
  .payment button {
    margin: 0 auto;
    display: block;
    width: 220px;
    height: 35px;
    margin-top: 10px;
    border: 0;
    font-weight: 900;
    color: white;
  }
  ```

- **max-width vs width 그리고 변하지 요소 vs 변하는 요소**

  - max-width의 정의 : max-width CSS 속성은 요소의 최대 너비를 설정합니다. max-width는 width 속성의 **사용값이 자신의 값보다** 커지는걸 방지합니다.

    - 사용값 : 사용값은 계산값에 모든 계산을 수행한 후의 결과 값입니다.

    * 계산값 : 계산값은 상속 과정에서 부모가 자식에게 물려주는 값을 말합니다.

    * 즉 사용값이라 하면 auto를 의미하는것 같다.

  - max-width vs width

    - width : 980px로 잡았을 경우 화면을 줄여도 980px을 유지 한다.

    - width : % 로 잡았을 경우 부모에 width값에 %를 적용한 값을 받기 때문에 화면이 줄면 같이 줄어들게 되지만, 대신 화면이 커지면 같이 커지게 된다.

    - max-width : 980px로 잡았을 경우 width 속성의 **사용값인 auto가 적용되고** 그렇기 때문에 화면이 width를 적용했을 때와 다르게 줄어도 같이 줄어들게 되며 auto값이 980px보다 커지는것을 방지한다.

    * max-width % 로 잡았을 경우 width: auto가 적용되며, 화면을 늘렸을때 적용한 %보다 커지는것을 방지한다.

  * 변하지 않는 요소와 변하는 요소

    - 변하는 요소는 : px로 고정값을 주지 않는 요소들이다.
    - 변하지않는 요소 : px로 준 요소들

    따라서 px로 side의 너비를 정했기 때문에 사이드가 고정이 되는 모습을 보인것이다.

  * Expert code

    ```html
    <div class="contents">
      <div class="l_wrapper ">
        <div class="l_sidebar">sidebar</div>
        <div class="l_main">Main</div>
      </div>
    </div>
    ```

    ```css
    .l_wrapper {
      max-width: 980px;
      margin: 0 auto;
    }

    .l_sidebar {
      width: 300px;
      float: right;
      background-color: orange;
    }

    .l_main {
      overflow: hidden;
      border: 10px solid red;
    }
    ```

  - Yosup code : width를 px로 잡았기 때문에 화면이 줄어들어도 1200px를 유지할것이고,width를 max-width로 잡아서 줄인다고 한들 payment는 300px와 lecture 역시 변하지 않는 코드를 만듬, 화면을 줄임으로 해서 변해야하는 반응형 웹에는 적합하지 않은 코딩

  ```html
  <div class="wrapper">
    <div class="lecture">
      <header class="intro"></header>
    </div>

    <aside class="payment" lang="ko"></aside>
  </div>
  ```

  ```css
  .wrapper {
    width: 1200px;
    margin: 30px auto;
  }

  .lecture {
    float: left;
    width: 900px;
  }
  .payment {
    width: 300px;
    height: 939px;
    float: left;
    background-color: black;
    margin: 0 auto;
  }
  ```

### 꿀 팁~

- **1.아직도 반응형 작성방법에 대한 이해가 잘 안됨.. 좀 더 효율적인 코딩이 쉬운 반응형 작업을 하는데 도움이 될것 같다는 결론을 얻음**

* **2.CSS 마진 상쇄(필수로 외워두자)**

  [CSS 마진 상쇄](https://velog.io/@raram2/CSS-%EB%A7%88%EC%A7%84-%EC%83%81%EC%87%84Margin-collapsing-%EC%9B%90%EB%A6%AC-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4)

- **3.CSS 마진 상쇄 해결방법**

  ```css
  .clearfix:after {
    content: " ";
    display: table;

    /* 마진 상쇄의 해결방법 :
  
    가상요소를 만들어 주되 이 문제는 block과 block 사이에서 발생하는 문제이므로
    diplay를 block도 inline(inline은 위 아래가 아닌 흐름이자네~)도 아닌요소인 table로 해준다.
  
    또 다른 해결방법(but 잘 쓰지 않음) :
  
    부모요소에 경계를 줄수 있는 padding 이나 border를 준다. but 이것은 시각적으로 보일수 있으므로
    시각적으로 보이지 않게 하기 위해 display:flow-root (flow-root 는 호환성이 별루..) 나
    overflow:hidden 또는 가상요소를 만들어주어 사용한다.
    그러나 overflow:hidden를 사용하면 overflow:hidden 자체의 목적인 "넘쳤을때 자른다"라는
    의미에 맞지 않게 사용되므로 가상요소를 사용하여 해결해주는것이 좋을것 같다.
    */
  }
  ```

- **4.레이아웃을 먼저 잡는게 중요하며, 레이아웃(뼈대)만 따로하는 테그를 만들어 사용하면 나중에 재활용할수 있다. (그리고 그 레이아웃은 뼈대용도로만 사용해야한다.) 마찬 가지로 공통된 스타일은 별도의 클래스로 만들고 재사용한다. (=== CSS 방법론)**

  ```html
  <div class="l_wrapper">
    <div class="l_sidebar"></div>
  </div>
  <div class="l_main">
    Main
  </div>
  ```

  ```css
  /* ---------------Layours :뼈대---------------------- */

  .l_wrapper {
    width: 960px;
    margin: 0 auto;
  }

  .l_sidebar {
    /* width: 260px; */
    float: right;
    margin-left: 20px;
    width: 300px;
  }

  .l_main {
    border: 10px solid red;
    background-color: green;
    overflow: hidden;
  }

  /* -----Commons : 공통적으로 사용할수 있는 것들-----*/

  .clearfix:after {
    content: " ";
    display: table;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
    background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;
  }

  .button_block {
    display: block;
    text-align: center;
  }
  ```

* **5.css를 작성할때 공통으로 사용되는 요소 , 뼈대로 사용되는 요소, 구성요소 등 따로 분리해서 작성한다.**

  ```css
  /* ---------------Layours :뼈대---------------------- */
  .l_wrapper {
    width: 960px;
    margin: 0 auto;
  }
  .l_sidebar {
    width: 260px;
    float: right;
    margin-left: 20px;
    width: 300px;
  }

  .l_main {
  border: 10px solid red;
  background-color: green;
  overflow: hidden;

  /* ----------------util------------*/
  .mb_5 {
  margin-bottom: 5px;
  }
  .mb_10 {
  margin-bottom: 10px;
  }
  .mb_15 {
  margin-bottom: 15px;
  }

  .mb_20 {
  margin-bottom: 20px;
  }

  /* -----Commons : 공통적으로 사용할수 있는 것들-----*/

  .clearfix:after {
  content: " ";
  display: table;

  }
  a {
    text-decoration: none;
    color: inherit;
  }

  .button {
   background-color: #333;
    color: white;
    padding: 0.5em 1em;
    display: inline-block;

  }

  .button_block {
    display: block;
    text-align: center;
  }

  /* ------------Components---------------- */

  .contents {
   padding: 40px 0;
  }

  .checkout {
   background-color: #666;
  }

  ```

- **6.반응형으로 사용할 형태들은 언제든지 위치에 따라 모양이 바뀌어야하므로 px 보다는 %로 잡는게 좋다.**

* **7.높이를 정할때 height를 쓰는데, 반응형일때는 px보다는 %가 좋으니 %를 사용하려고 했으나, % 는 부모의 높이에 따른 비율이므로 만약 부모의 높이가 없을경우 height에 %를 사용하는것은 무의하다. 따라서 높이를 정할때 사용할수 있는 또다른 방법이 padding-top이다. (padding-top에 사용하는 %는 자기자신의 width에 비례한 높이를 나타낸다.)**

  ```css
  .video {
    position: relative;
    background-color: dodgerblue;
    padding-top: 56.25%;
  }
  ```

- **8.class 이름을 체계적으로 정하기**

  - 1.서로 직접적인 관련있는 하위요소일때 : price의 하위요소인 discount 다 ==> price-discount 처럼 "-" 를 사용하였다.

  ```html
  <p class="price">
    11,000원
    <span class="price-discount">5,500원</span>
  </p>
  ```

  - 2.어떠한 담당요소가 있을때 : layout의 역할을 하는 wrapper이다 ==> l_wrapper , l_sidebar 와 같은 **언더바** 를 사용하였다.

  ```html
  <div class="l_wrapper">
    <div class="l_sidebar"></div>
  </div>
  ```

* **9.자주 사용하는 속성은 utility class로 만든다.(=== CSS 방법론)**

  ```html
  <a href="#" class="button button_block mb_5">장바구니 담기</a>
  ```

  ```css
  /* util */

  .mb_5 {
    margin-bottom: 5px;
  }
  .mb_10 {
    margin-bottom: 10px;
  }

  .mb_15 {
    margin-bottom: 15px;
  }

  .mb_20 {
    margin-bottom: 20px;
  }
  ```

- **10. CSS 방법론(BEM, OOCSS, SMACSS)**

  [**CSS 방법론**](https://gomdoreepooh.github.io/notes/smacss-bem-oocss)

* **11.텍스트가 흰색이라 잘 안보이는 경우가 있는데,배경을 줄때 어떤 이미지를 주더라도 텍스트가 잘 보이게끔 하기 위해 배경안에 또 다른 레이아웃을 넣어주고 특정 지역을 어둡게 하여 텍스트 있는 쪽은 잘 보이게끔 하기도 한다.**

  ```css
  .course-cover {
    background-image: url(/assets/images/practice/lecture/cover.png);
    padding: 30px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .course-cover::after {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );

    <!-- bacground 부분은 그라데이션을 주기위해 외부에서 가져온거임 -->
  }

  ```

- **13.각 기기별 미디어쿼리 적용사이즈**

  ```css
  /*
    ##Device  =  Desktops
    ##Screen  =  1281px  to  higher  resolution  desktops
  */
  @media (min-width: 1281px) {
    /* CSS */
  }

  /*
    ##Device = Laptops,Desktops
    ##Screen  =  B/w  1025px  to  1280px
  */
  @media (min-width: 1025px) and (max-width: 1280px) {
    /* CSS */
  }

  /*
    ##Device = Tablets,Ipads  (portrait)
    ##Screen  =  B/w  768px  to  1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) {
    /* CSS */
  }

  /*
    ##Device = Tablets,Ipads  (landscape)
    ##Screen  =  B/w  768px  to  1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    /* CSS */
  }

  /*
    ##Device = Low Resolution Tablets,Mobiles  (Landscape)
    ##Screen  =  B/w  481px  to  767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    /* CSS */
  }

  /*
    ##Device  =  Most  of  the  Smartphones  Mobiles  (Portrait)
    ##Screen  =  B/w  320px  to  479px
  */
  @media (min-width: 320px) and (max-width: 480px) {
    /* CSS */
  }
  ```
