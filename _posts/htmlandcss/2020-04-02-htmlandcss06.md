---
title: "4.HTML과CSS를 이용한 연습 네번째"
excerpt: " '모바일 우선작업' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## 1.모바일로 우선작업 하기

- Mobile

<img src="/assets/images/practice/mobile/mobile2.PNG" width="18%"> <img src="/assets/images/practice/mobile/mobile.PNG" width="75%">

- 모바일로 먼저 만드는 경우는 우리나라에서 극히 드물지만, 모바일청첩잡 같은경우 우선적으로 작업하기도 함

### 코드 비교

- **HTML 구성(1)**

  - Expert code : 우리가 이전까지는 뼈대를 잡을때 약어를 사용하여 l_wrapper 이런것들을 사용했으나. 그것을 사용하는 이유는 크게봤을때 나중에도 사용될수 있는 즉 재활용성이 있는 테그였기 때문이다. 허나 지금의 layout은 grid를 제외한 나머지가 크게 재활용성이 없을거라 판단되어 일반적인 클래스명을 사용한것 같다.

  * 결론 : 활용도가 높은 테그들은 그 용도 파악하기 쉽게 접두어를 붙이는것이지, 아무때다 약어를 붙이거나 하지말자.

  ```html
  <body>
    <div class="cover">
      <h1 class="cover-title">DESSERT RECIPES</h1>
    </div>
    <div class="contents">
      <div class="contents-section">
        <img
          src="/assets/images/practice/mobile/pie.png"
          alt=""
          class="contents-section-cover"
        />
        <!-- 모바일에 없다고 해서 안넣게 되면 css로 갑자기 이미지를 넣기가 어려우므로 
          미리 만들어 놓고 display: none 하면 된다-->
        <h2>
          <span>Peanut Butter</span>
          <span>Cream Pie</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          distinctio molestiae recusandae nobis modi ratione nesciunt et numquam
          ab enim harum hic vero deserunt, sapiente ducimus aspernatur fugiat
          sequi atque.
        </p>
      </div>
      <div class="contents-section">
        <ul class="l_row">
          <li class="l_col l_col_4_12 l_col_ld_8_12 l_col_ld_8_12_right">
            <div class="item">
              <img
                src="/assets/images/practice/mobile/cover01.png"
                alt=""
                class="item-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </body>
  ```

  - Yosup code : 무의미한 접두어 남발

  ```html
  <body>
    <div class="l_wrapper clearfix">
      <div class="l_img">
        <img
          src="/assets/images/practice/mobile/cover.png"
          alt="이미지"
          class="background_img"
        />
        <h1 class="background_title">
          DESSERT RECIPES
        </h1>
      </div>
      <div class="l_contents">
        <div class="contents">
          <div class="contents-header"></div>
          <div class="l_grid">
            <ul class="l_row clearfix">
              <li class="l_col">
                <div class="item"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </body>
  ```

* **Float의 기능**

  ![](/assets/images/practice/mobile/grid5.PNG)

  - Expert code : 윗 사진처럼 두기위해 float를 사용했다. 이미지도 텍스트이며, 텍스트는 float된 요소를 인식하기 때문에 다음과 같은 모양이 나올수 있는것이다.

  ```html
  <ul>
    <li class="l_col l_col_4_12 l_col_ld_8_12 l_col_ld_8_12_right">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
    <li class="l_col l_col_4_12">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
    <li class="l_col l_col_4_12">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
    <li class="l_col l_col_4_12">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
    <li class="l_col l_col_4_12">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
    <li class="l_col l_col_4_12">
      <div class="item">
        <img
          src="/assets/images/practice/mobile/cover01.png"
          alt=""
          class="item-cover"
        />
      </div>
    </li>
  </ul>
  ```

  ```css
  .l_col_ld_8_12_right {
    float: right;
    /* img는 콘텐츠이기 때문에 이렇게 해도 옆에 이미지들이 나열될수 있는것이다.
  콘텐츠는 block 요소를 감지한다고 했잖아 */
  }
  ```

  - Yosup code : 텍스트가 float를 인식하다는 개념을 숙지하지 못해 엄청 고생함..

### 꿀 팁

- **1. font-size의 default 값은 font-size : 100% === 16px , 선언을 안해도 알아서 선언되는 font-size**

  ```css
  cover {
    background-image: url(/assets/images/practice/mobile/cover.png);
    padding: 50px 0;
    /* padding과 margin이 어떻게 동작하는지 완벽하게 숙지하자. 햇갈릴때가 너무 많다. */
    text-align: center;
    /* font-size: 100%; 이게 default 값인가보다. 선언을 안해도 알아서 선언되기 때문에 .cover-title에서 em을 쓸수 있나보다 */
    background-position: center;
    background-size: cover;
  }
  .cover-title {
    background-color: #000;
    color: orangered;
    display: inline-block;
    font-family: "Oswald", sans-serif;
    font-weight: normal;
    padding: 0.1em 0.5em 0;
  }
  ```

* **2. css의 선언방법**

  ```css
  .item:hover .item-cover {
    transform: scale(1.1);
    opacity: 1;
    /* 이런식으로도 선언하는구나 item 이 hover 되었을때 .item-cover에 css가 적용되도록 */
  }
  ```

- **3. vh , vw**

  - vh : viewport height, 내가 보이는 화면의 높이를 의미하는 단위 , 50vh 면 내가 보이는 화면의 50% 높이

  * vh : viewport weight, 내가 보이는 화면의 너비를 의미하는 단위 , 50vw 면 내가 보이는 화면의 50% 너비
