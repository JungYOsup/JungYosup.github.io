---
title: "8.HTML과 CSS를 이용한 연습 일곱번째 "
excerpt: " 'Best Horror Scenes' Nomad와 코린이의 코딩 비교(특징:SCSS를 활용, 간단한 연습)"
categories:
  - htmlandcss
tags:
  - jekyll
last_modified_at: 2018-07-01T13:00:00+09:00
toc: true
toc_sticky: true
---

- 가져가야할 팁

```scss
body {
  > *:not(#navbar) {
    margin: 50px 100px;
  }
}
```

- 뜻 : body 안의 바로 하위 자식요소중 #navbar만 뺀 요소들
