---
title: "Dom을 깨우치다(저자. 코디 린들리)"
excerpt: "라이브러리/프레임워크를 사용하지 않으면서 DOM에 관해 철저하게 이해하자"
categories:
  - javascript
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

**하루에 한장을 목표로 , 1일 1 Commit을 목표로 !!**

## 1.노드개요

### 1.1 문서 개체 모델(Document Object Model, DOM으로 알려짐)은 자바스크립트 Node 개체의 계층화된 트리다.

- 1.1.1 DOM의 생성
  브라우저는 HTML 코드를 해석해서, 트리 형태로 구조화된 노드들을 가지고 있는 문서(DOM)를 생성한다.
  (브라우저는 HTML 코드를 해석하여 DOM을 생성하는데 , 그 DOM은 트리형태로 구조화된 노드들이다.)

![](https://wit.nts-corp.com/wp-content/uploads/2019/02/-4)

![](https://wit.nts-corp.com/wp-content/uploads/2019/02/-5)

- 1.1.2 DOM의 목적(왜 브라우저가 굳이 DOM을 생성할까?)

  DOM의 목적은 Javascript를 사용해서 이 문서에 대한 **스크립트 작성(삭제,추가,바꾸기,이벤트 처리, 수정)을 위한 프로그래밍 인터페이스를 제공하기 위함**

* 1.1.3

- DOM에 있는 트리형태로 구조화된 각 노드 개체는 "NODE"로 부터 속성과 메서드를 상속받는다.
  (모든 노드 유형이 "NODE"로 부터 상속을 받는다.)

-
