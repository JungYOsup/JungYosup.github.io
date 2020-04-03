---
title: "3.HTML과CSS를 이용한 연습 세번째"
excerpt: " 'Grid 형태 사이트' 전문가와 코린이의 코딩 비교 "
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## Grid 형태 사이트

![](/assets/images/practice/grid/grid.PNG);

- ### 꿀 팁~

* **1.이미지는 max-width : 100%로 잡는게 일반적이다.**
  width 100%로 잡을경우 예를들어 부모가 너비가 100px인데
  너비가 50px짜리인 이미지가 들어온다 하자 그러면
  그 이미지는 width : 100%에 의해 100px짜리가 되려고 너비가 커지기 때문에 깨지고 만다.

따라서 max-width : 100%로 잡을경우 큰 이미지 즉
부모의 너비가 100px인데 이미지가 300px짜리의 경우
100px짜리가 되고 50px짜리는 50px을 그대로 유지하게 된다.

그 이유는 max-width:100% 면 자기가 가진너비보다 작아질순 있으나 더 커질수 없기 때문이다.

따라서 이미지를 받을때 큰 이미지를 준비하는게 편하다.
부모의 100px을 채우고 싶은데 작은 이미지를 사용하고 max-width를 사용하면 채우지 못하기 때문이다.

```css
img {
  max-width: 100%;
}
```

- **2.float 기반으로 grid를 잡는 방식은 옛날 방식이고 요즘에는 flex와 grid를 사용한다.** 또한 float의 목적과도 어긋나는 방식이다.

* **3.float 기반으로 만든 grid는 width가 %로 만들어진 다는게 핵심이다.**

- **4.float기반의 grid를 잡을때, grid의 모습이 변화할수 있는 부분의 layout은 하나로만 grid의 너비를 잡는것이 아니라 클래스를 추가시키면, 언제라도 다른 grid의 모습으로 변화할수 있게 만들어야한다.**

  - 첫째, 미리 그리드의 비율을 만들어 놓는다.

  ```css
  .l_col_12_12 {
    width: 100%;
  }
  .l_col_11_12 {
    width: 91.66666667%;
  }
  .l_col_10_12 {
    width: 83.33333333%;
  }
  .l_col_9_12 {
    width: 75%;
  }
  .l_col_8_12 {
    width: 66.66666667%;
  }
  .l_col_7_12 {
    width: 58.33333333%;
  }
  .l_col_6_12 {
    width: 50%;
  }
  .l_col_5_12 {
    width: 41.66666667%;
  }
  .l_col_4_12 {
    width: 33.33333333%;
  }
  .l_col_3_12 {
    width: 25%;
  }
  .l_col_2_12 {
    width: 16.66666667%;
  }
  .l_col_1_12 {
    width: 8.33333333%;
  }
  ```

  - 둘째, 만들어놓은 그리드를 class에 추가시킨다.
    (기존에 너비가 정해졌더라도 클래스가 추가되면 그 너비가 변화할수 있게)

    ```html
    <li class="l_col l_col_4_12"></li>
    ```

  - 셋째, 이렇게 함으로써 layout을 재활용하면서 각기 다른 비율을 가진 grid를 손쉽게 만들수 있다는것이다.

    - bad example

      우리는 l_col을 재활용 해야하는데 재활용하지 못하는 경우가 발생

    ```html
    <ul class="l_row">
      <li class="l_col">1</li>
      <li class="l_col">2</li>
      <li class="l_col">3</li>
    </ul>

    <ul class="l_row">
      <li class="l_col2">4</li>
      <li class="l_col2">5</li>
      <li class="l_col2">6</li>
      <li class="l_col2">7</li>
    </ul>
    ```

    ```css
    .l_col {
      width: 33.3333%;
    }

    .l_col2 {
      width: 25%;
    }
    ```

    또는 class를 더 늘리기 싫어서 자식 선택자를 사용함(내가 햇던것처럼..)


    ```html
    <ul class="l_row wd_33">
      <li class="l_col">1</li>
      <li class="l_col">2</li>
      <li class="l_col">3</li>
    </ul>

    <ul class="l_row wd_25">
      <li class="l_col">4</li>
      <li class="l_col">5</li>
      <li class="l_col">6</li>
      <li class="l_col">7</li>
    </ul>
    ```

    ```css
    .l_col {
      width: 33.3333%;
    }

    .wd_25 li{
      width:25%;
    }

    ```

    - good example

    ```html
    <ul class="l_row">
      <li class="l_col wd_33">1</li>
      <li class="l_col wd_33">2</li>
      <li class="l_col wd_33">3</li>
    </ul>

    <ul class="l_row">
      <li class="l_col wd_25">4</li>
      <li class="l_col wd_25">5</li>
      <li class="l_col wd_25">6</li>
      <li class="l_col wd_25">7</li>
    </ul>
    ```

    ```css

    .wd_25{
      width:25%
    }
    .wd_33{
      width:33%
    }

    ```

    결론 : 클래스의 길이가 늘어나는 것에 걱정을 하지말자 !!

- **5.Media queries의 경우도 크기에 따른 변화를 주기 위해 미리 만들어 놓고 사용한다.**

  ```css
  /* Mediaqueries */

  @media screen and (min-width: 1400px) {
    .l_row {
      max-width: 1400px;
    }

    .l_col_ld_12_12 {
      width: 100%;
    }
    .l_col_ld_11_12 {
      width: 91.66666667%;
    }
    .l_col_ld_10_12 {
      width: 83.33333333%;
    }
    .l_col_ld_9_12 {
      width: 75%;
    }
    .l_col_ld_8_12 {
      width: 66.66666667%;
    }
    .l_col_ld_7_12 {
      width: 58.33333333%;
    }
    .l_col_ld_6_12 {
      width: 50%;
    }
    .l_col_ld_5_12 {
      width: 41.66666667%;
    }
    .l_col_ld_4_12 {
      width: 33.33333333%;
    }
    .l_col_ld_3_12 {
      width: 25%;
    }
    .l_col_ld_2_12 {
      width: 16.66666667%;
    }
    .l_col_ld_1_12 {
      width: 8.33333333%;
    }
  }

  /* tablet */
  @media screen and (max-width: 760px) {
    /* .l_col{
      width: 50%
  }
  
  /* 내가 5단이었던 화면을 화면이 줄었을때
    2단으로 바꾸고 싶다.
    그런데 .l_col에 직접 width를 주는것은 결과는 만족스럽지만 좋지 못한 방법이다.
    왜냐하면 내가 원지않아도 모든 l_col이 변하기 때문이다. 만약 내가 상단에는 3개를 유지시키고 싶어도 이 코드에 의해 다 2개로 바뀌기 떄문이다.*/

    .l_col_tablet_12_12 {
      width: 100%;
    }
    .l_col_tablet_11_12 {
      width: 91.66666667%;
    }
    .l_col_tablet_10_12 {
      width: 83.33333333%;
    }
    .l_col_tablet_9_12 {
      width: 75%;
    }
    .l_col_tablet_8_12 {
      width: 66.66666667%;
    }
    .l_col_tablet_7_12 {
      width: 58.33333333%;
    }
    .l_col_tablet_6_12 {
      width: 50%;
    }
    .l_col_tablet_5_12 {
      width: 41.66666667%;
    }
    .l_col_tablet_4_12 {
      width: 33.33333333%;
    }
    .l_col_tablet_3_12 {
      width: 25%;
    }
    .l_col_tablet_2_12 {
      width: 16.66666667%;
    }
    .l_col_tablet_1_12 {
      width: 8.33333333%;
    }

    /*그렇다면 어떻게 해결할까?
    3단으로 바뀔거에다가 l_col_tablet_4_12 클래스를 추가 시켜준다.
    이렇듯 다양한 변화를 하기 위해서는 직접 width를 하는것이 아니라. 적용할 곳에 새로운 클래스를 추가시켜주는것이다.
    이렇게 계속하다보면 HTML의 클래스가 길어질텐데??
    차라리 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다. */
  }

  @media screen and (max-width: 480px) {
    .l_col_mobile_12_12 {
      width: 100%;
    }
    .l_col_mobile_11_12 {
      width: 91.66666667%;
    }
    .l_col_mobile_10_12 {
      width: 83.33333333%;
    }
    .l_col_mobile_9_12 {
      width: 75%;
    }
    .l_col_mobile_8_12 {
      width: 66.66666667%;
    }
    .l_col_mobile_7_12 {
      width: 58.33333333%;
    }
    .l_col_mobile_6_12 {
      width: 50%;
    }
    .l_col_mobile_5_12 {
      width: 41.66666667%;
    }
    .l_col_mobile_4_12 {
      width: 33.33333333%;
    }
    .l_col_mobile_3_12 {
      width: 25%;
    }
    .l_col_mobile_2_12 {
      width: 16.66666667%;
    }
    .l_col_mobile_1_12 {
      width: 8.33333333%;
    }
  }
  ```

* **6.4번 5번처럼 하면 클래스가 길어질텐데??? 마크업이 복잡해지는것보다 클래스가 길어지는게 낫다.**

- **7.나는 body에게 margin : 0 auto 를 주어 가운데 정렬을 했는데, expert는 각 부분부분을 wrapper클래스로 묶어서 css로 .wrapper 에 margin : 0 auto를 주어 가운데 정렬을 했다. 이렇게 할경우의 장점은???** 진짜 이렇게 헀는데 영상 다시봐부자

* yosup's code

  ```css
  body {
    background-image: url(/assets/images/practice/grid/bg.png);
    max-width: 1280px;
    margin: 0 auto;
    color: white;
  }
  ```

- expert's code

  ```html
  <div class="header">
    <div class="l_wrapper">
      Header
    </div>
  </div>

  <div class="contents">
    <div class="l_wrapper">
      Contents
    </div>
  </div>

  <div class="footer">
    <div class="l_wrapper">
      Footer
    </div>
  </div>
  ```

  ```css
  .l_wrapper {
    max-width: 1300px;
    margin: 0 auto;
  }
  ```

- **8.float로 만든 Grid의 한계**

  - **1)float를 이용해 내가 원하는 한줄을 만들기가 생각보다 까다롭다**

  ![](/assets/images/practice/grid/problem02.PNG)

  > float도 이용해야하고
  > 그로인해 발생하는 문제를 해결하기위해 clear도 해줘야하고
  > negarive margin도 해줘야하고

  - **2)콘텐츠의 양이 달라질때, px값으로 높이를 정한것이 아니기 때문에 높이가 고정되어 있지 않는다.**

  ![](/assets/images/practice/grid/problem01.PNG)

  - 제목의 문제를 해결하기위해 양을 늘더라도 다 보이는게 아니라 ... 으로 보이게끔 만들었다.

  ```css
  .item-contents h2 {
    white-space: nowrap;
    /* 줄바꿈 X*/
    overflow: hidden;
    /* 화면을 빠져나와버린 h2내용을 숨김 */
    text-overflow: ellipsis;
    /* 숨겨진 내용을 ... 으로 만듬 but 이 속성은 한줄일경우에만 가능하다. 여러줄 불가능*/
  }
  ```

- 안의 내용 역시 양이 늘경우 틀을 빠져나오는 경우가 발생한다. 이걸 해결하기 위해 5줄만 보이게끔 하고, 나머지는 ... 으로 나타나개 했다.
  즉 높이를 같게 함으로써 이러한 문제를 해결

  ```css
  .item-contetns p {
    line-height: 1.6;
    /* 줄과 줄간격을 조절함, 1이라 하면 줄간격이 콘텐츠 높이만큼 됨 */
    height: 8em;

    overflow: hidden;
  }
  ```

- **9.font-size는 일반적으로 html에 적용하는데, px이라는 고정값을 주는것은 별로 좋지 못하다. 그 이유는 만약 눈이 침침한 사람이 사용자 지정으로 폰트사이즈의 크기를 정할수 있는데, px로 할경우 고정된 값으로 밖에 볼수 없기 때문이다. 따라서 font-size는 %로 지정을 많이 해놓는다. 하지만 font-size: 100%는 16px인데 너무 크기 때문에 일반적으로 font-size :62.5%(==10px)로 해놓는다.**

* **10.(9번)처럼 할경우 생기는 문제는 바로 휴대폰에서 발생한다.**

  ```css
  html {
    font-size: 62.5%;
    /* 62.5% == 10px */
  }
  body {
    font-size: 2rem;
    /* 20px */
  }
  ```

이라고 할경우 font-size가 %이기 때문에 이 말인즉슨 화면이 줄어들면 font-size도 점점 작아질수 밖에 없다는것이다.
그럴경우 발생할수 있는 문제는 휴대폰에서 화면에서는 font-size가 많이 작아질수 밖에 없다는 것이다.
이를 해결하기위해 핸드폰사이즈 미디어쿼리에 font-size의 %를 늘리는 방법이 있다.

```css
@media screen and (max-width: 480px) {
  html {
    font-size: 80%;
  }
}
```
