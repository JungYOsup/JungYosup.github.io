---
title: "Javascript로 Chrome 만들기"
excerpt: "javascript 프로젝트 첫번째"
categories:
  - javascript
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

## javscript 로 게임 만들기

Nomad Coders를 기반으로 하고 있다.

[Nomad코드](https://academy.nomadcoders.co/courses/542034/lectures/9842675);

### 1. Setup + Styles

#### 1.0 Project Setup

##### 1.0에서의 핵심

> 1.git repository를 만들때 node add.gitignore 을 none이 아닌 node로 바꿨는데 무슨차이일까??

#### 1.1 Styles part One

> 1.reset.css 에 대해서 주목할 필요가 있다. 일반적으로 css를 슬때 reset.css를 import해서 쓰는데
> reset.css는 스타일 시트 재설정의 목표는 기본 줄 높이, 여백 및 제목의 글꼴 크기 등과 같은 브라우저 불일치를 줄이는 것이라고 하며
> 구글에 reset.css를 쳐서 나온 것들을 따로 css파일로만들어서 사용할 css에 import하면된다
>
> 2.display: flex에 관한것도 이해하면 좋다.

#### 1.2 Styles part Two

> 1.all: unset
> 초기 및 부모 스타일속성 모두를 제거함
> 따라서 버튼의 스타일 즉 css가 작용하는 모든 부분이 제거가 됨 **단 주의할점은 chrome에서만 지원한다는거**
>
> 2.text-transform: uppercase;
> Text를 대문자로 바꿈
>
> 3.transform: scale(0.98);
> button:active 즉 button이 active를 햇을때
> 요소를 확대 또는 축소할 수 있습니다. 0.98이라는 것은 가로 세로 모두 0.98배 확대한다는거임 즉 0.02배 축소됨, 애니메이션 효과중 하나임 **IE는 버전 10부터 지원합니다.**
>
> 4.기본적인 box-shadow의 효과 box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
>
> 5.input type이 range인것은 거의 오랜만에 써보는데> 각 속성을 보면
> min="0.1" max="5.0" value="2.5" step="0.1" (=범위는0.1~ 5까지고 , 기본위치는 2.5에 위치하고 0.1씩 올리거나 줄일수 있다.)

### 2. PaintJs

#### 2.0 Canvas Events

> 1.addEventListener("mousemove",함수)
> mousemove : 마우스를 움직일때 발생하는 event
> mousedown : 마우스를 클릭하고 누를때 발생하는 event
> mouseup : 마우스를 클릭하고 땟을때 발생하는 event
> mouseleave : 마우스가 Canvas화면에서 벗어났을때 event
>
> 2.event 값 clientX 와 offsetX는 clientX의 경우 브라우저창 >전채에서의 위치를 의미하고 offsetX는 canvas의 X축을 의미한다. >따라서 필요한것은 offsetX와 offsetY

#### 2.1 2D Context

> 1.canvas Mdn을 참조하여서 canvas를 칠해보자
>
> 2.canvas를 그리는 방법은 이해가 잘 안될수 있으나, 나중에 사용할것을 대비하여 외워두자

#### 2.2 Recap!

> 1.canvas를 외워두었다면 이제 이해해보자.

#### 2.3 Changing Color

> 1.단순하게 event를 log찍어봐서 속성을 찾아 바꿔주는 방법으로 ctx.backgroundColor의 의 색을 바꿔주엇다.

#### 2.4 Brush Size

> 1.단순하게 event를 log찍어봐서 속성을 찾아 바꿔주는 방법으로 ctx.lineWidth의 크기를 계속 바꿔주엇다.

#### 2.5 Filling Mode

> 1.canvas Mdn을 참조하여서 canvas의 전체를 칠해보자
>
> 2.활용 되었던것들 fillStyle,fillRect()

#### 2.6 Saving the Image

> 1.이미지를 저장하는 방법에 대해서 알아보았다
>
> 2.a 태그에는 단순히 href의 속성만 사용하는줄 알았는데, 다양한 기능이 있다는것을 알게 되었다.

#### 2.7 Conclusions
