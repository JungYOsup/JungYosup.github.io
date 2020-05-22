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

* 1.1.3 노드 개체 유형(노드타입/노드분류), 그냥 이런게 있다라는것만 알아두자

  - DOCUMENT_NODE( ex) window.document )

  * ELEMENT_NODE( ex) <body> , <a> , <p> , <script> , <style> , <html> , <h1> )

  - ATTRIBUTE_NODE( ex) class="funEdges" )

  * TEXT_NODE ( ex) 줄바꿈과 공백을 포함한 HTML 문서 내의 텍스트 문자 )

  - DOCUMENT_FRAGMENT_NODE( ex) document.createDocumentFragment )

  - DOCUMENT_TYPE_NODE( ex) <!DOCTYPE html> )

- 1.1.4 통상적인 DOM 트리의 각 노드 개체는 **Node로 부터** 속성과 메서드를 상속받는다.

  **모든 노드 개체는 속성과 메서드를 1차적으로 Node 개체로부터 상속을 받는다.** 그리고 이 Node에서 제공되는 속성 메서드 외에도 document,HTMLElement,HTML\*Element 인터페이스와 같은 하위 노드 인터페이스에서도 수많은 관련 속성 및 메서드가 제공된다.

* 1.1.5 노드의 유형과 이름

  모든 노드는 Node로부터 상속받는 nodeType 및 nodeName 속성을 가진다. 예를들어 Text 노드의 nodetype 코드는 3이며, nodeNmae 값은 #text이다.

  흔히 사용되는 노드들의 숫자값은 외워 두는것이 좋다.

- 1.1.6 javascript 메서드를 사용해서 Element 및 Text 노드를 생성하기

  - createElement("element를 지정하는 문자열")
    ex) createElement("div");

  * createTextNode("문자열")
    ex) createTextNode("Hi");

  - createAttribute() 메서드는 사용이 금지되었고, 이를 대신하기 위해 getAttribute(),setAttribute(),removeAttrbute()메서드를 사용한다.

* 1.1.7 javascript 문자열을 사용하여 DOM에 Element 및 Text 노드를 생성 및 추가하기

  - innerHTML, outerHTML, textContext, insertAdjacentHTML() 속성 및 메서드는 Javascript 문자열을 사용하여 DOM에 노드를 생성하고 추가하는 기능을 제공

  ```html
  <div id="A"></div>
  <div id="B"></div>
  <span id="C"></span>
  <div id="D"></div>
  <div id="E"></div>
  ```

  ```javascript
  document.getElementById("A").innerHTML = "<strong>HI</strong>";

  document.getElementById("B").outerHTML = '<div id="B" class="new">HI</div>';

  document.getElementById("C").textContent = "dude";

  document.getElementById("D").innerText = "안녕";

  console.log(document.body.innerHTML);

  //<div id="A"><strong>HI</strong></div>
  //<div id="B" class="new">HI</div>
  //<span id="C">dude</span>
  //<div id="D">안녕</div>
  ```

  - textContent vs innerText

  innerText는 노드에 포함된 보이는 텍스트를 반환하고, textContent는 전체 텍스트를 반환합니다.

  ```html
  <span>Hello<span style="diplay:none">World</span></span>
  ```

  에서 innerText는 "Hello"를 반환하고 textContent는 World를 반환한다.

  보다 자세한 차이점은

  [textContent vs innerText](http://perfectionkills.com/the-poor-misunderstood-innerText/)를 참조하자

  - insertAdjacentHTML() 메ㅓ드는 이전에 언급된 메서드들에 비해 보다 세밀하게 다를수 있다. 이 메서드를 사용하면 시작테그의 앞 , 뒤 종류 태그의 앞, 뒤에 노드를 삽입하는게 가능하다.

  ```html
  <i id="elm">how</i>
  ```

  ```javascript
  var elm = document.getElementById("elm");
  elm.insertAdjacentHTML("beforebegin", "<span>Hey-</span>");
  elm.insertAdjacentHTML("afterbegin", "<span>dude-</span>");
  elm.insertAdjacentHTML("beforeend", "<span>are-</span>");
  elm.insertAdjacentHTML("afterend", "<span>you?-</span>");

  console.log(document.body.innerHTML);

  //<span>Hey-</span><i id="elm"><span>dude-</span>how<span>-are</span></i><span>-you?</span>
  ```

  - 주목 : innerHTML 은 문자열 내에서 발견된 HTML 요소를 실제 DOM 변화하는 반면, textContent는 텍스트 노드를 생성하는데만 사용 가능하다. HTML 요소를 포함하고 있는 문자열을 textContent에 전달하면, 단순히 텍스트로만 출력 또한 innerHTML이 무겁고 비싼 대가를 치르는 HTML 파서를 호출하는데 비해, 텍스트 노드 생선은 간단하게 처리되므로 **innerHTML 계열의 사용을 삼가해야한다.**

* 1.1.8 Dom 트리의 일부를 Javascript 문자열로 추출하기

  ```html
  <div id="A"><i>HI</i></div>
  <div id="B">Dude<strong>!</strong></div>
  ```

  ```javascript
  console.log(document.getElementById("A").innerHTML); //<i>Hi</i>

  console.log(document.getElementById("B").outerHTML); //<div id="B">Dude<strong>!</strong></div>

  console.log(document.getElementById("B").textContent); //Dude!

  console.log(document.getElementById("A").innerText); //Dude!
  ```

  - 주목 : textContent, innerText 속성은 선택된 노드내에 포함된 모든 **텍스트 노드들을 반환한다.**

- 1.1.9 appendChild() 및 insertBefore()을 사용하여 노드 개체를 Dom에 추가하기.

  appendChild() 메서드는 하나의 노드를(혹은 여러 노드)를 메서드가 호출된 노드의 자식노드 끝에 삽입할수 있게 해준다.

  insertBefore() 메서드는 삽입 위치를 조정하는 것이 필요할때 사용한다.

  ```html
  <ul>
    <li>2</li>
    <li>3</li>
  </ul>
  ```

  ```javascript
  let text1 = document.createTextNode("1");
  let li = document.createElement("li");
  li.appendChild(text1);

  let ul = document.querySelector("ul");

  ul.insertBefore(li, ul.firstChild);

  // <ul>
  //   <li>1</li> //ul.insertBefore(li, ul.firstChild);
  //   <li>2</li>
  //   <li>3</li>
  //   <li>1</li> //ul.appendChild(li);
  // </ul>;
  ```

  - 주목 : insertBefore() 메서드의 두번째 매개변수를 전달하지 않으면, 이 메서드는 appendChild()처럼 동작

* 1.1.10 removeChild() 및 replaceChild()를 사용하여 노드를 제거하거나 바꾸기

  - Dom 에서 노드를 제거하는 것은 여러 단계의 과정으로 이루어진다.

  1. 먼저 삭제하고자 하는 노드를 선택해야한다

  2. 삭제하고자 하는 노드의 부모노드에 대한 접근을 얻어야 하는데,보통 parentNode 속성을 사용하게 된다.

  3. 부모 노드에서 삭제할 노드에 대한 참조를 전달하여 removeChild()메서드를 호출한다.

  ```html
  <div id="A">Hi</div>
  <div id="B">Dude</div>
  ```

  ```javascript
  //element 노드 삭제
  let divA = document.getElementById("A");
  divA.parentNode.removeChild(divA);

  //텍스트 노드 삭제
  let divB = document.getElementById("B").firstChild;
  divB.parentNode.removeChild(divB);
  ```

  - 노드를 바꾸는 과정도 삭제하는것과 같은 과정을 겪는다. **둘다 부모노드에 접근한다는게 중요하다.**

  ```html
  <div id="A">Hi</div>
  <div id="B">Dude</div>
  ```

  ```javascript
  //ement 노드 바꾸기
  let divA = document.getElementById("A");
  let newSpan = document.createElement("span");

  newSpan.textContent = "howdy";
  divA.parentNode.replaceChild(newSpan, divA);
  ```

  - 주목 : 제거하거나 바꾸는 대상이 무엇인지에 따라 , innerHTML , outerHTML , textContent 속성에 빈 문자열을 주는것이 더 쉽고 빠를 수도 있다. 하지만 브라우저의 메모리 누수가 발생할수 있으므로 조심해야한다. replaceChild() 및 removeChild()는 각각 교체되거나 제거된 노드를 **반환한다**. 기본적으로 해당 노드는 바꾸거나 제거하는 것이므로 사라지지 않았다. 따라서 해당 노드에 대한 **메모리상의 참조는 여전히 가지게 된다.**

* 1.1.11 cloneNode()를 사용하여 노드를 복제하기

  cloneNode() 메서드를 사용하여 단일 노드 혹은 노드 및 모든 자식 노드를 복제할 수 있다.

  노드와 그 자식 노드를 모두 복제하려면, cloneNode() 메서드의 매개변수로 true를 전달한다.

  ```html
  <ul>
    <li>Hi</li>
    <li>there</li>
  </ul>
  ```

  ```javascript
  let cloneUL = document.querySelector("ul").cloneNode(); //ul만이 복제되었으므로 빈 문자열이 출력됨

  console.log(cloneUL.innerHTML); //빈 문자열 출력

  let cloneUL2 = document.querySelector("ul").cloneNode(true);

  console.log(cloneUL2.innerHTML);
  //<li>HI</li><li>There</li>가 출력됨
  ```

  - 주목 : **cloneNode(true)를 사용해서 노드와 그 자식을 복제하면 NodeList가 반환될 것이라 생각할 수 있지만, 실제로는 그렇지 않다. 따라서 cloneNode() 때문에 문서내에서 ID가 중복될수도 있다.**

* 1.1.12 노드 컬렉션에 대한 이해(무슨말하는지 모르겠음)

* 1.1.13 직계 자식 노드 전부에 대한 리스트/컬렉션 얻기

  ```html
  <ul>
    <li>Hi</li>
    <li>there</li>
  </ul>
  ```

  ```javascript
  let ulElementChildNodes = document.querySelector("ul").childNodes;

  console.log(ulElementChildNodes);
  // ul 내의 전체 노드로 이루어진 유사 배열 리스트를 출력
  //[text, li, text, li, text]
  ```

  - 주목 : **childNodes에서 반환되는 NodeList는 직계 자식 노드만을 가진다.** **childNodes가 element 노드 뿐만 아니라 다른 노드 유형(ex text 및 comment 노드) 도 포함된다는 점을 유의해야한다.**

- 1.1.14 NodeList나 HTMlCollection을 JavasScript 배열로 변환

  NodeList 나 HTMLCollection은 **배열의 형태**이지만, **array의 메서드를 상속하는 진정한 javascript 배열이 아니다.**

  - isArray() : array의 메서드를 상속받는 javascript 배열인지 아닌지를 판단함

  ```html
  <a href="#"></a>
  ```

  ```javascript
  console.log(Array.isArray(document.links));
  //HTMLCollection이지 Array가 아니므로 false

  console.log(Array.isArray(document.querySelectorAll("a")));
  //NodeList이지 Array가 아니므로 false
  ```

  결과적으로 Nodelist와 HTMLCollection은 배열의 형태이지만 배열이 아닌것으로 판명되었다.

  그렇다면 배열의 형태인것을 진정한 배열로 만들기 위해서는 어떻게 해야할까?

  - 진정한 javascript 배열로 만들기

    - 왜? 굳이 javascript 배열로 만들어야할까?
      그 이유는 javascript 배열로 변환하는 것은 몇가지 이점이 있기 때문이다. 이 리스트들을 javascript 배열로 변환하게 되면 Array 개체가 제공하는 메서드들(ex) foreach,pop,map,reduce 등)에 접근할수 있게 된다.

    * 진정한 배열로 변환하기 위한 방법

      call() 또는 apply()에 유사 배열을 전달하면, call() 또는 apply()는 진짜 javaScript 배열을 반환하는 메서드를 호출한다. 여기서는 slice() 메서드를 사용하고 있는데, 실제로는 아무것도 잘라내지 않고, 리스트를 Javascript 배열로 반환하는데 사용하고 있다.

      ```html
      <a href="#"></a>
      ```

      ```javascript
      console.log(Array.isArray(Array.prototype.silce.call(document.linkes)));
      //true 반환

      console.log(
        Array.isArray(
          Array.prototype.silce.call(document.querySelectorAll("a"))
        )
      );
      //true 반환
      ```

      주목 : 이렇게 할경우 List를 배열로 바꾸는데 코드가 길어지므로, ES6에서는 유사 배열개체나 리스트를 인수받아 **새로운 배열로 변환하여 사용하는 Array.from**

      ```javascript
      console.log(Array.isArray(Array.from(document.querySelectorAll("a")))); //true

      let badex = document.querySelectorAll("a");

      console.log(badex); //NodeList [a]

      bc.pop("a"); //bc.pop is not a function

      let goodex = Array.from(document.querySelectorAll("a"));
      console.log(goodex); // [a]

      abc.pop("a");

      console.log(goodex); // []
      ```

- 1.1.15 DOM 내의 노드 탐색

  - parentNode

  - firstChild

  - lastChild

  - nextSibling

  ```html
  <body>
    <ul>
      <!-- comment -->
      <li id="A"></li>
      <li id="B"></li>
      <!-- comment -->
    </ul>
  </body>
  ```

  ```javascript
  let ul = document.querySelector("ul");

  console.log(ul.parentNode.nodeName); // body가 출력됨
  console.log(ul.firstChild.nodeName); // comment가 출력됨
  console.log(ul.lastChild.nodeName); // comment가 출력됨
  console.log(ul.querySelector("#A").nextSibling.nodeName); //text가 출력됨
  console.log(ul.querySelector("#B").previousSibling.nodeName); //text가 출력됨
  ```

  DOM을 탐색할때, element 노드 뿐만 아니라 text 와 comment도 노드임을 잊어서는 안된다. 하지만 윗처럼 사용한다는것은 이상적이지 않다. **다음 속성들을 사용하면 text와 comment 노드를 무시하고 DOM 탐색하는 것이 가능하다.**

  - firstElementChild

  * lastElementChild

  - nextElementSibling

  * previousElementSibling

  * children

  * parentElement

  - childElementCount : 노드가 가지고 있는 자식 element의 개수를 계산할때 사용

  이렇게 element 노드라고 명시를 해준다면, text와 comment 노드를 무시하게된다.

  ```html
  <body>
    <ul>
      <!-- comment -->
      <li id="A"></li>
      <li id="B"></li>
      <!-- comment -->
    </ul>
  </body>
  ```

  ```javascript
  let ul = document.querySelector("ul");

  console.log(ul.parentNode.nodeName); // body가 출력됨
  console.log(ul.firstElementChild.nodeName); //li
  console.log(ul.lastElementChild.nodeName); // li가 출력됨
  console.log(ul.querySelector("#A").nextElementSibling.nodeName); // li
  console.log(ul.querySelector("#B").previousElementSibling.nodeName); //li가 출력됨

  //ul의 자식 노드 중 element만을 가져오려면?
  console.log(ul.children); // HTMLCollenction이며, 모든 자식 노드는 text를 가짐

  // 첫 번째 li의 부모 element는?
  console.log(ul.firstElementChild.parentElement); //ul이 출력
  ```

- 1.1.16 contains()와 compareDocumentPosition()으로 DOm 트리 내의 Node 위치를 확인하기

  노드의 contains() 메서드를 활용하면 특정 노드가 다른 노드내에 포함되어있는지를 확이날수 있다.
  그리고 리턴값으로 boolean값을 전달해준다.

  Dom 트리 내에서 주변 노드와 연관된 노드위치에 대해 보다 확실한 정보를 얻고 싶을 때는 노드의 compareDocumentPosition() 메서드를 사용한다.
  그리고 리턴값으로 숫자코드를 리턴한다.

* 1.1.17 두 노드가 완전히 동일한지 판단하기.

```html
<input type="text"></input>
<input type="text"></input>

<textarea>foo</textarea>
<textarea>bar</textarea>


```

```javascript
let input = document.querySelectorAll("input");

console.log(input); // nodelist , 배열형식이지만 배열이 아님

console.log(input[0].isEqualNode(input[1]));
//true

let input = document.querySelectorAll("textarea");

console.log(input[0].isEqualNode(input[1]));
//자식 text 노드가 동일하지 않으므로 false
```

주목 : 두 노드가 완전전히 동일한지가 아니라. 두 노드 참조가 동일한 노드를 참조하고 있는지 알고 싶다면 === 연산자를 사용하여 간단하게 확인해볼수 있다.

## 2. Document 노드

### 2.1 document 노드 개요

document로 부터 상속되는 HTMLDocument 생성자는 DOM 내에 DOCUMENT_NODE(window.document)를 생성한다.

```js
console.log(window.document.constructure); // function HTMLDocument(){ [native code]}
console.log(window.document.nodeType); // DOCUMENT_NODE에 대한 숫자 키 매핑인 9가 출력
```

HTMLDocument 생성자 함수가 window.document 노드 개체를 생성하며, 이 노드가 DOCUMENT_NODE 개체이다.

### 2.2 HTMLDocument의 속성 및 메서드

HTMLDocument 노드(window.document)에 존재하는 속성 및 메서드들중 주목해야할 속성과 메서드는 다음과 같다

- doctype

* documentElement

* implementation.

* activeElement

* body

* head

* title

- lastModified

- referrer

- URL

- defaultview

- compatMode

- ownerDocument

- hasFocus();

* 주목 : HTMLDocument 노드 개체(window.document)는 DOM를 다룰 때 사용 가능한 수많은 메서드와 속성(ex) document.querySelectorAll())에 접근하는 데 사용된다.

### 2.3 일반적인 HTML 문서정보 얻기

- document 개체는 로드된 HTML 문서/DOM에 대한 일반적인 정보에 접근할 수 있게 해준다.

```javascript
const d = document;

console.log("title = " + d.title); //Document
console.log("url = " + d.URL); // url 주소
console.log("referrer = " + d.referrer); //참조 주소
console.log("lastModified = " + d.lastModified); // 마지막 수정일

//BackComapt(Quirks 모드) 또는 CSS1Compat(Strict 모드) 중 하나가 출력된다.

console.log("compatibility mode = " + d.compatMode); //CSS!compat
```

### 2.4 document 자식 노드

- document 개체의 자식은 doctype/DTD 와 <html lang="en"> 이 포함된 배열을 얻게 될것이다.

```js
console.log(document.childNodes[0].nodeType); // DOCUMENT_TYPE_NODE를 의미하는 숫자 키 10이 출력

console.log(document.childNodes[1].nodeType); // Element_TYPE_NODE를 이미하는 숫자 키 1이 출력
```

- 주목 : 참고로 DOCUMENT_TYPE_NODE와 DOCUMENT_NODE는 다르다. 그리고 HTMLDocument 생성자에서 생성되는 **window.document 개체** 와 **Document 개체** 를 혼동해서는 안된다. widow.document가 DOM 인터페이스에 시작점이라는 것만 기억하자. Document.childNodes가 자식 노드를 가지고 있는 이유가 바로 이 때문이다.

### 2.5 document는 <!Doctype>,<html>,<head>,<body>에 대한 바로가기를 제공한다.

```js
console.log(document.doctype); //DocumentType NOde
console.log(document.documentElement); //<html lang="en">가 출력
console.log(document.head); // <head>
console.log(document.body); // <body>
```

- 주목 doctype과 DTD의 nodetype은 10 또는 DOCUMENT_TYPE_NODE이며, DOCUMENT_NODE(즉 HTMLDocument()로부터 생성되는 window.document)와 혼동해서는 안된다.

### 2.6 document.implementation.hasFeature()를 사용하여 DOM 사양/기능 탐지

- document.implementation.hasFeature()를 사용하면 현재 문서에 대한 브라우저가 구현/지원하는 기능 및 수준에 대해 물어 볼 수 있다. 예를들어 브라우저가 Core DOM level3 사양을 구현했는지 물어보려면 다음과 같은 코드를 사용한다.

```js
console.log(document.implementation.hasFeature("Core", "2.0"));
console.log(document.implementation.hasFeature("Core", "3.0"));
```

### 2.7 문서 내에서 포커스를 가지고 있거나 활성 상태인 노드에 대한 참조를 얻기

- document.activeElement를 사용하면, 문서 내에서 포커스를 가지고 있거나 활성 상태인 노드에 대한 참조를 바로 얻을 수 있다.

```js
document.querySelector("textarea").focus();

//문서내에서 포커스를 가지고 있거나 활성 상태인 element에 대한 참조르 얻음
console.log(document.activeElement); //textarea가 출력됨
```

- 주목 : **포커스를 가지고 있거나 활성 상태인 element는 포커스를 받을 수 있는 element를 반환한다. 노드를 선택하는 것(마우스를 사용하여 HTML 페이지 내에서 반전된 영역), 키스트로크, 스페이스바,마우스로 무언가를 입력하기 위해 포커스를 받은 element를 혼동하지 말자.**

### 2.8 문서 혹은 문서 내의 특정 노드가 포커스를 가지고 있는지 판별하기

- document.hasFocus() 메서드를 사용하면, 사용자가 현재 해당 HTML 문서가 로드된 창에 포커스를 두고 있는지를 확인할 수 잇다.

```js
// 문서가 로드된 창/텝에 계속 포커스를 두면 true를 반환한다. 그렇지 않을경우 false가 반환된다.
setTimeout(function () {
  console.log(document.hasFocus());
}, 5000);
```

### 2.9 document.defaultView는 최상위/전역 개체에 대한 바로가기이다.

- defaultView 속성은 javascript 최상위 개체, 혹은 전역 개체라고 불리는것에 대한 바로가기 이다. 웹 브라우저에서 최상위 개체는 window개체이므로, javaScript 브라우저 환경에서 defaultView는 이 개체를 가리킨다.

* 최상위 개체가 없는 DOM이나 웹 브라우저 내에서 실행되지 않는 javascript 환경(Node.js)의 경우 이 속성을 통해 최상위 개체 영역에 접근할 수 있게 해준다.

### 2.10 Element에서 ownerDocument를 사용하여 Document에 대한 참조 얻기

- 노드에서 onwerDocument 속성을 호출하면, 노드가 포함된 document에 대한 참조를 반환한다.

## 3. Element 노드

### 3.1 HTML Element 개체 개요

각 element들은 고유한 성질을 가지며, 각자 element를 Dom 트로내의 노드 개체로 인스턴스화 하는 고유한 Javascript 생성자를 가진다.
예를 들어 <a> element 는 HTMLAnchorElement() 생성자를 통해 DOM 노드로 만들어 진다. **즉 각 element들은 노드개체로 인스턴스화 하는 Javascript 생성자를 가진다.**

### 3.2 HTML Element 개체의 속성 및 메서드(상속 받은것 포함)

- createElement()

- tagName

* children

- getAttribute()

- setAttribute()

- hasAttribute()

- removeAttribute()

- classList()

- dataset

- attributes

### 3.3 Element 생성

Element 노드는, 브라우자가 HTML 문서를 해석하여 DOM이 만들어질 때 인스턴스화 된다.
이것 외에 createElement()를 사용하여 프로그램밍적으로도 Element 노드를 생성할수 있다.

```js
let elementNode = document.creatElement("textarea");

document.body.appendChild(elementNode);
```

### 3.4 Element의 태그 이름 얻기

tagName 속성을 사용하면, element의 이름에 접근할 수 있다. tagName속성은 nodeName이 반환하는 것과 동일한 값을 반환한다. 원본 HTML문서에서의 대소문자 여부에 관계없이 둘다 값을 대문자로 반환한다.

```html
<a href="#">Hi</a>
```

```js
console.log(document.querySelector("a").tagName); //A 가 출력
console.log(document.querySelector("a").nodeName); //A가 출력
```

### 3.5 Element의 Attribute 및 값에 대한 리스트/컬렉션 얻기(좋은방법X)

```html
<a href="#" title="title" data-foo="dataFoo"> </a>
```

```js
var atts = document.querySelector("a").attributes;
// 배열형태로 반환한다.
```

- 주목 : **attributes를 사용 하여 속성에 변화를 주는것보다도, getAttribute(), setAttribute(), hasAttribute9), removeAttribute()를 사용하는것이 좋다.** attributes를 사용할 때의 유일한 이점은 라이브 상태의 attributes 목록을 반환한다는 것이다.

### 3.6 Element의 Attribute 값 획득, 설정(재설정), 제거

element 의 attribute 값을 가져오고, 설정 및 제거하기 위한 가장 일관된 방법은 getAttribute(), setAttribute(), removeAttribute() 메서드를 사용하는 것이 좋다.

- 주목 : **attribute가 없을때, setAttribute를 사용하여 attribute 값을 null이나 ''를 설정하지 말고 removeAttribute()를 사용하는것이 좋다.**

**일부 element attribute는 element 노드에서 개체 속성으로 존재한다. 예를들어 document.body.id 나 document.body.className, 작성자는 이 속성을 사용하지 말고 attribute에 대한 remove , set, get 메서드를 사용하도록 권고하고 있다.**

```js
//bad example
let a = (document.querySelector("a").className = "안녕");
console.log(document.querySelector("a")); //<a href class="안녕"></a>

//good example

let a = document.querySelector("a").setAttribute("class", "안녕");
console.log(document.querySelector("a")); //<a href class="안녕"></a>
```

### 3.7 Element의 특정 attrbute를 가지고 있는지 확인하기

- element가 attribute를 가지고 있는지 판별(boolean으로 return) 하기 위한 가장 좋은 방법은 hasAttribute() 메서드를 사용하는것이다.

### 3.8 Class Attribute 값 리스트 얻기

- element 노드에 존재하는 classList 속성을 사용하면 className 속성에서 반환되는 공백으로 구분된 문자열 값을 사용하는 것보다 훨신 쉽게 class attribute 값 리스트에 접근할수 있다.

```html
<div class="big brown bear"></div>
```

```js
let elm = docuemnt.querySelector("div");

console.log(elm.classList); // big brown bear{0="big" , 1="brown", 2="bear" , length=3 ,...}
console.log(elm.className); // big brown bear
```

주목 : **classList는 유사배열 컬랙션이며, 읽기전용인 length 속성을 가진다. classList는 읽기 전용이지만, add(), remove(), contains(), toggle() 메서드를 사용해서 변경할수 있다.**

### 3.9 class attribute에 하위 값 추가 및 제거하기

```js
let elm = document.querySelector("div");

elm.classList.add("cat");
elm.calssList.remove("dog");
```

### 3.10 class attribute 값 토글

- classList.toggle() 메서드를 사용하면, class attribute의 하위 값을 토글시킬 수 있다. **이 메서드는 값이 누락된 경우 추가하거나 값이 이미 있는 경우 제거할 수 있게 해준다.**

```html
<div class="visible"></div>
```

```js
let elm = document.querySelector("div");

elm.classList.toggle("visible"); //기존에 visible이 있으므로 삭제
elm.classList.toggle("grow"); // 기존에 grow가 없으므로 생성

console.log(elm.className); //grow
```

### 3.11 class attribute 값이 특정 값을 가지고 있는지 판별하기

classList.containes() 메서드를 사용하면 class attribute 값이 특정 하위 값을 가지고 있는지를 판별 할 수 있다.

### 3.12 data attribute를 가져오고 설정하기(이 꼴을 언제쓰는지 잘 모르겠다.)

- data- 에 관련된 자료 [data-](https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/%EB%8D%B0%EC%9D%B4%ED%84%B0_%EC%86%8D%EC%84%B1_%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)

## 4.Element 노드 선택

### 4.1 특정 Element 노드 선택하기

단일 element 노드에 대한 참조를 얻는데 가장 흔히 사용되는 메서드는 다음과 같다.

- querySelector()

- getElementById();

```html
<body>
  <ul>
    <li>Hello</li>
    <li>big</li>
    <li>bad</li>
    <li id="last">world</li>
  </ul>
</body>
```

```js
console.log(document.querySelector("li").textContent); //Hello 출력
console.log(document.getElementById("last").textContent); //world 출력
```

- getElementById()메서드는 querySelector() 메서드에 비해 매우 단순하다.
- qurySelector() 메서드는 CSS selector 문법 형식의 매개변수를 사용하기 때문에 특정 단일 li에 접근을 하려면 querySelector(body>ul>li:nth-of-type(2))를 전달해야한다.

* 주목 : querySelector()는 selector 기반으로 문서 내에서 발견되는 **첫번째 노드 element를** 반환한다. querySelector()는 element 노드에도 정의되어 있다. 그 덕분에 메서드의 결가를 DOM 트리의 특정 부분에 한정할 수 있어서 상황에 맞는 쿼리를 할수 있게 해준다.

### 4.2 Element 노드 리스트 선택 및 생성하기

HTML 문서내의 **노드 리스트(NodeList)를 선택 및 생성하는 데 가장 흔히 사용되는 메서드**는 다음과 같다.
( NodeList 나 HTMLCollection은 **배열의 형태**이지만, **array의 메서드를 상속하는 진정한 javascript 배열이 아니다.**)

- querySelectorAll()

* getElementsByTagName()

* getElementsByClassName()

주목 : getElementsByTagName() , getElementsByClassName() 으로 생성된 **HTMLCollection은 라이브상태**로 간주되며, 리스트를 생성하고 선택한 후에 문서가 업데이트 된 경우도 문서의 상태를 항상 반영

그러나 querySelectorAll() 메서드는 **라이브 상태의 element 리스트를 반환하지 않는다.** 이는 querySelectorAll()에서 반환하는 리스트는 리스트 생성 시점의 문서 스냅샵이며, **문서의 변경 내용을 반영하지 않는다는 것을 의미한다.** 해당 리스트는 정적이며, 라이브상태가 아니다.
**NodeList와 HTMLCollection은 라이브 상태이지만 , querySelectorAll()로 반환된 리스트는 정적이다.**

예를들어

```html
<ul>
  <li class="liClass">1</li>
  <li class="liClass">2</li>
  <li class="liClass">3</li>
  <li class="liClass">4</li>
  <li class="liClass">5</li>
</ul>
```

```js
const a = document.querySelectorAll("li");
const b = document.getElementsByTagName("li");
const c = document.getElementsByClassName("liClass");
console.log(a); // 정적이며 라이브 상태가 아니므로, li의 갯수가 5
console.log(b); // 라이브상태이므로 li의 갯수가 6개
console.log(c); // 라이브상태이지만 클래스가 다르므로 갯수가 5개

const li = document.createElement("li");
const ul = document.querySelector("ul");

li.setAttribute("class", "hoho");
ul.appendChild(li);
```

- **childNodes도 querySelectorAll(), getElementByTagName(), getElementByClassName()처럼 Nodelist를 반환한다는 것을 명심하기 바란다. NodeList는 유사 배열리스트/컬랙션이며 , 읽기 전용인 length 속성을(array의 메서드 상속을 받는것은 아님) 가진다.**

### 4.3 직계 자식 Element 노드를 모두 선택하기

element 노드에서 children 속성을 사용하면, element 노드의 직계 자식 노드 전체 리스트(HTMLCollection)를 얻을 수 있다.
children은 직계 element 노드만을 제공하며, element 가 아닌 노드는 제외한다.

- 주목 : HTMLCollection은 element를 문서 내의 순서대로 가진다. 즉 element 가 DOM에 나타나는 순서대로 배열 내에 위치한다 HTMLCollection은 라이브 상태이므로, 문서가 변경되면 동적으로 컬랙션에 반영된다.

### 4.4 컨텍스트 기반 Element 선택

querySelector() , querySelectorAll(), getElementsByTagName(), getElementsByClassName()은 element 노드에도 정의되어 있다.
이는 해당 메서드의 결과를 DOM 트리의 특정 부분으로 제한 할 수 있게 해준다. 달리말해 element 노드 개체에서 이 메서드를 호출하면, element노드를 검색하고자 하는 특정 컨텍스트를 선택할수 있다는 것이다.

### 4.5 사전에 구성된 Element 노드 선택/리스트

HTML 문서에서 element 노드를 포함하고 있는 미리 사전에 등록되어 있는 유사배열 리스트

- document.all : HTML 문서내의 모든 element

- document.forms : HTML 문서내의 모든 <form> element

* document.images : HTML 문서내의 모든 <img> element

* document.links : HTML 문서내의 모든 <a> element

* document.scripts : HTML 문서내의 모든 <script> element

* document.styleSheets : HTMl 문서내의 모든 <link> 또는 <style> element

- 앞의 사전에 구성된 배열들은 HTMLCloolection 인터페이스/개체를 통해 생성되는데, document.styleSheets만 예외적으로 StyleSheetList를 사용한다.

### 4.6 선택될 Element 검증을 위해 matchesSelector()를 사용하기(지금은 사용안하고 -> matches()로 바뀜)

```html
<ul>
  <li>Hello</li>
  <li>world</li>
</ul>
```

```js
console.log(document.querySelector("li").matchesSelector("li:first-child")); //false
```

최신 브라우저에서는 브라우저 접두어인 moz,webkit,o,ms를 사용하지 않으면 실패한다.
따라서 다음과 같이 사용해야한다.

```js
console.log(document.querySelector("li").mozmatchesSelector("li:first-child")); //true

console.log(
  document.querySelector("li").webkitmatchesSelector("li:first-child")
); //true

console.log(document.querySelector("li").omatchesSelector("li:first-child")); //true

console.log(document.querySelector("li").msmatchesSelector("li:first-child")); //true
```

## 5. Element 노드 지오메트리와 스크롤링 지오메트리

### 5.1 Element 노드 크기, 오프셋, 스크롤링 개요

### 5.2 offsetParent를 기준으로 element의 offsetTop 및 offsetLeft 값을 가져오기

- offsetTop 및 offsetLeft 속성을 사용하면, offsetParent로부터 element 노드의 오프셋 픽셀 값을 가져올 수 있다.

* 따라서 offsetParent의 대상이 무엇인지를 파악하는것이 중요하다.

```html
<div id="blue"><div id="red"></div></div>
```

```css
#blue {
  height: 100px;
  width: 100px;
  background-color: blue;
  border: 10px solid gray;
  padding: 25px;
  margin: 25px;
}

#red {
  height: 50px;
  width: 50px;
  background-color: red;
  border: 10px solid gray;
}
```

```js
const div = document.querySelecotr("#red");

console.log(div.offsetLeft); // 60이 출력됨
console.log(div.offsetTop); // 60이 출력됨
console.log(div.offsetParent); //div가 아닌 <body>가 출력됨
```

```html
<div id="blue"><div id="red"></div></div>
```

```css
#blue {
  position: absolute;
  height: 100px;
  width: 100px;
  background-color: blue;
  border: 10px solid gray;
  padding: 25px;
  margin: 25px;
}

#red {
  height: 50px;
  width: 50px;
  background-color: red;
  border: 10px solid gray;
}
```

```js
const div = document.querySelecotr("#red");

console.log(div.offsetLeft); // 25이 출력됨
console.log(div.offsetTop); // 25이 출력됨
console.log(div.offsetParent); //<div>가 출력
```

- 주목 : 대부분의 브라우저에서는 offsetParent가 <body>이고 <body> 나 <html> element 가 눈에 보이는 여백(margin), 패딩(padding), 테투리 값을 가지는 경우 바깥쪽 테투리에서 안쪽 테두리까지의 측정이 제대로 되지 않는다.

### 5.3 getBoundingClientRect()를 사용하여 뷰포트 기준으로 element의 Top,Right,Bottom,Left 테두리 오프셋 얻기

- getBoundingClientRect() 메서드를 사용하면, 뷰포트의 좌상단 끝을 기준으로 element가 브라우저에서 그려질 때 element의 바깥쪽 테두리 위치를 얻을 수 있다. left 및 right는 element의 바깥쪽 테두리로부터 뷰포트의 왼쪽 끝까지로 측정되며, top과 bottom은 element의 바깥쪽 테두리로부터 뷰포트의 상단 끝까지로 측정된다.

### 5.7 scrollHeight와 scrollWidth를 사용하여 스크롤 될 element의 크기를 얻기

- scrollHeight와 scrollWidth 속성은 **스크롤될 노드의 높이와 너비**를 제공해준다.

```html
<div><p></p></div>
```

```css
* {
  margin: 0;
  padding: 0;
}

div {
  height: 100px;
  width: 100px;
  overflow: auto;
}

p {
  height: 1000px;
  width: 1000px;
  background-color: red;
}
```

```js
const div = document.querySelector("div");

console.log(div.scrollHeight, div.scrollWidth);
```

- 주목 : 스크롤 가능한 영역 내에 있는 노드가 스크롤 가능한 영역의 뷰포트보다 작은경우 **해당 노드의 높이와 너비를 알아야한다면**, **scrollHeight 와 scrollWidth는 뷰포트의 크기를 반환**하므로 사용하지 않는것이 좋다.

### 5.8 scrollTop과 scrollLeft를 사용하여 top 및 left로부터 스크롤될 픽셀을 가져오거나 설정하기

- scrollTop 속성과 scrollLeft 속성은 스크롤 때문에 **현재 뷰포트에서 보이지 않는 left나 top까지의 픽셀을 반환한다.**

```html
<div>
  <p></p>
</div>
```

```css
div {
  height: 100px;
  width: 100px;
  overflow: auto;
}

p {
  height: 1000px;
  width: 1000px;
  background-color: red;
}
```

```js
const div = document.querySelector("div");
div.scrollTop = 750;
div.scrollLeft = 750;

console.log(div.scrollTOp, div.scrollLeft); //'750 750' 출력
```

### 5.9 scrollintoView()를 사용하여 element를 View로 스크롤 하기

```html
<div>
  <content>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
  </content>
</div>
```

```css
div {
  height: 200px;
  width: 200px;
  overflow: auto;
}

p {
  background-color: red;
}
```

```js
// 결과를 보면 자식요소 5번째의 p테그를 선택해서 view로 스크롤시킨다.
document.querySelector("content").children[4].scrollIntoView(true);
```

- 결과를 보면 자식요소 5번째의 p테그를 선택해서 view로 스크롤시킨다.

* 매개변수가 true이면 top에서 view가 보이도록 스크롤하라는것이고 false일경우 bottom에서 view가 보이도록 스크롤 시키는 것이다.

## 6. Element 노드 인라인 스타일

### 6.1 style attribute(element CSS 속성이라고도 함 ) 개요

- 인라인 CSS 속성은 코드에서 style 속성이 **문자열이 아닌 CSSStyleDeclaration 개체를 반환**한다는 점에 유의한다. 또한 CSSStyleDeclaration 개체에는 **element의 인라인 스타일만이 포함**

```html
<div style="background-color:red;border;1px"></div>
```

```js
const divStyle = document.querySelector("div").style;

console.log(divStyle); // CSSStyleDeclaration {0="background-color",...} 출력
```

### 6.2 개별 인라인 CSS 속성 가져오기, 설정 , 제거

- 6.2.1 : CSSStyleDeclaration 개체로 개별 CSS 속성에 대한 접근

```html
<div></div>
```

```js
const divStyle = document.querySelector("div").style;

//설정
divStyle.bacgroundColor = "red";
divStyle.border = "1px solid black";

// 가져오기
console.log(divStyle.backgroundColor);
console.log(divStyle.border);

// 제거

divStyle.backgroundColor = "";
divStyle.border = "";
```

- 주목 : style개체에 포함된 속성명에는 하이픈이 포함되지 않는다. 그리고 설정,가져올때,제거 할때는 camelCase를 사용하면 된다. 또한 측정단위가 필요한 CSS속성의 경우, 적절한 단위를 포함시켜야 한다.

- 6.2.2 : element 노드의 개별 CSS 속성을 조작하는데 사용되는 setPropertyValue(),getPropertyValue()

```html
<div stule="background-color:green; border: 1px solid purple"></div>
```

```js
const divStyle = document.querySelector("div").style;

//설정
divStyle.setProperty("background-color", "red");
divStyle.setProperty("border", "1px solid purple");

//가져오기
console.log(divStyle.getProperty("background-color"));
console.log(divStyle.getProperty("border"));

//제거
divStyle.removeProperty("background-color");
divStyle.removeProperty("border");
```

### 6.3 모든 인라인 CSS 속성 가져오기, 설정, 제거

- CSSStyleDeclaration 개체의 cssText 속성과 getAttribute() 및 setAttribute() 메서드를 사용하면, javaScript 문자열을 사용하여 style attribute의 전체 값(모든 인라인 속성)을 가져오고, 설정 및 제거 할수 있따.

* 또한 getAttribute 와 setAttribute는 Style 외에도 클래서 , id 등 다른 속성들을 설정하고 가져오고 제거할수 있다.

```js
const div = document.quertSelector("div");
const divStyle = div.style;

div.setAttribute(
  "style",
  "background-color:red;border:1px solide black; heigh:100px; width:100px;"
);

div.getAttribute("style"); //모든 인라인 속성의 스타일을 가져옴

div.removeAttribute("style"); //제거
```

- 주목 : **style attribute 값을 새로운 문자열로 바꾸는 것은** element의 style에 여러 변경수행하는 **가장 빠른 방법**

### 6.4 getComputedStyle()을 사용하여 element의 계산된 스타일(계층화된 것을 포함한 실제 스타일) 가져오기

style 속성은 style attribute를 통해 정의된 CSS만을 가지고 있다.(= 인라인에서 정의된 CSS), 그러나 인라인스타일 뿐만아니라 스타일시트, 외부 스타일시트 를 가져오려면 **getComputedStyle()를 사용한다.**

```html
<div style="background-color:green;border:1px solid purple;"></div>
```

```css
div {
  background-color: red;
}
```

```js
const div = document.querySelector("div");

window.getComputedStyle(div).backgroundColor; //rgb(0,128,0) 또는 green이 출력됨
```

- 주목 : getComputedStyle() 에서 반환되는 CSSStyleDeclaration 개체는 읽기 전용이다.

### 6.5 class 및 id attribute를 사용하여 element의 CSS 속성을 적용 및 제거하기

```html
<div class="헤이"></div>
```

```js
const div = document.querySelector("div");

div.setAttribute("id", "bar"); // id 설정

div.classList.add("foo"); // 클래스 추가
//<div style="background-color: red;" id="bar" class="헤이 foo"></div>

div.setAttribute("class", "안녕"); //클래스 수정
//<div style="background-color: red;" id="bar" class="안녕"></div>

console.log(div);
```

## 7. Text 노드

### 7.1 Text 개체 개요

- HTML 문서에서 텍스트는 text 노드를 만들어내는 TEXT() 생성자 함수의 인스턴스로 표현된다.

* 당연히 hi가 출력될줄 알았는데, TEXT노드로 변환되서 출력되었다.

```html
<p>hi</p>
```

```js
const textHi = document.querySelector("p").firstChild;

console.log(textHI.constructor); // TEXT()가 출력됨

console.log(textHi); // 보이는것은 "hi"가 출력됨 하지만 실직적으로 TEXT {textContent="hi" ,length =2 , ...}가 출력되는것을 볼수가 있다.
// 그 증거로 typeof 할경우 object를 반환한다.
console.log(typeof textHi); //object
```

- TEXT() 생성자 함수가 text 노드를 생성한다는 결론을 내려 주지만, **Text가 CharacterData, Node Object로 부터 상속받는다는 점을 명심해야한다.**

### 7.2 Text 개체 및 속성

- Text 노드에 존재하는 속성과 메서드에 관련된 정확한 정보를 얻으려면 브라우저에 직접 물어보는것이 가장 좋다.

* 다음과 같은 속성과 메서드가 있다.

  - textContent

  * splitText()

  * appendData()

  * insertData()

  * replaceData()

  * subStringData()

  * normalize()

  * data

  * document.createTextNode()

### 7.3 공백도 Text 노드를 생성한다.

```html
<p id="p1"></p>
<p id="p2"></p>
```

```js
console.log(document.querySelecotr("#p1").firstChild); //null이 출력됨
console.log(document.querySelecotr("#p1").firstChild.nodeName); //#text가 출력됨
```

- 이렇게 **공백이나 텍스트 문자가 보통 text 노드로 표현된다는 것을 잊지 말기 바란다.** **줄 바꿈도 당연히 text 노드**로 간주된다. 다음 코드에서는 줄 바꿈 문자도 text 노드라는 것을 강조하기 위해 줄 바꿈을 출력한다.

```html
<p id="p1"></p>
//이 주석 앞에 줄 바꿈 text 노드가 존재하며, 이 주속도 노드다
<p id="p2"></p>
```

```js
console.log(document.querySelecotr("#p1").nextSibiling); //Text가 출력됨
```

- 그런데 나는 p1테그의 옆에 테그인 p테그를 목적으로 js를 코딩했다면 nextSibling이 아닌 다른 속성을 이용하는것이 좋다. 예를 들어 nextElementSibling 같은것

### 7.4 Text 노드 생성 및 삽입하기

- createTextNode()를 사용하여 DOM 에 TEXT를 노드를 삽입할수 있다.

### 7.5 data나 nodeValue로 text 노드 값 가져오기

- Text 노드로 표현되는 텍스트 값과 데이터는 .data나 nodeVlaue 속성을 사용하여 노드에서 추출할 수 있다. 두 속성 모두 Text 노드에 포함된 텍스트를 반환한다.

```html
<p>Hi, <strong>cody</strong></p>
```

```js
console.log(document.querySelector("p").firstChild.data); //'Hi,'가 출력됨
console.log(document.querySelector("p").firstChild.nodeValue); //'Hi,'가 출력됨
console.log(document.querySelector("p").data); //undefiend
console.log(document.querySelector("p").nodeValue); //null
```

- 주목 : TEXT 노드에 포함된 문자의 길이를 가져오려면 , 텍스트노드자체 또는 노드의 실제 텍스트의 값/데이터의 length 속성에 접근하면 된다.

```js
console.log(document.querySelector("p").firstChild.length); //3
```

### 7.6 appendData() , deleteData(), insertData() , replaceData(), subStringData()로 text 노드 조작하기

Text 노드가 메서드를 상속받은 CharaterData개체는 Text 노드의 하위 값을 조작하고 추출하기 위한 메서드를 제공한다.

- appendData() : 하위값 추가 (맨마지막에 추가됨)
- deleteData() : 하위값 제거
- insertData() : 하위값 삽입 (원하는 위치에 삽입할수 있다)
- replaceData() : 하위값 교체
- subStringData() : 부분 문자열 추출

### 7.7 복수의 형제 텍스트 노드가 발생하는 경우

통상적으로 형제 텍스트 노드가 인접해서 나타나지는 않는다

```html
<p>Hi Yosup</p>
```

```js
const pElement = document.querySelector("p");

console.log(pElement.childNodes.data);
//Hi Yosup
```

복수의 형제 텍스트 노드가 발생하는 경우는 다음과 같다

```html
<p>Hi <strong>HH</strong> yosup</p>
```

```js
const pElement = document.querySelector("p");

console.log(pElement.childNodes.length); //3이 출력됨 <text> , <Strong> <text> 이렇게 3개로 길이 3개
console.log(pElement.childNodes.data); //Hi
console.log(pElement.firstChild.nextSibiling); // Element 노드 <strong>
console.log(pElemet.lastchild.data); // yosup
```

```html
<body>
  <div></div>
</body>
```

```js
const pElementNode = document.createElement("p");
const textNodeHi = document.createTextNode("HI ");
const textNodeCody = document.createTextNode("Cody");

pElementNode.appendChild(textNodeHi);
pElementNode.appendChild(textNodeCody);

document.querySelectod("div").appendChild(pElementNode);

console.log(document.querySelector("div p").childNodes.length); //2가 출력됨
```

**childNodes에서 반환되는 NodeList는 직계 자식 노드만을 가진다.** **childNodes가 element 노드 뿐만 아니라 다른 노드 유형(ex text 및 comment 노드) 도 포함된다는 점을 유의해야한다.**

### 7.8 textContent를 사용하여 마크업이 제거된 모든 자식 텍스트 노드를 반환하기

- textContent 속성은 모든 자식 텍스트 노드를 가져올 뿐만 아니라. 노드의 내용을 특정 Text 노드로 설정하는데도 사용할수 있다.

```html
<body>
  <h2>Dude</h2>
  <p>you <strong>rock!</strong></p>
</body>
```

```js
console.log(document.body.textContent); // 공백이 추가된 `Dode you rock!' 이 출력
```

- 노드내에 포함된 텍스트를 설정하는데 textContent를 사용하면 , **모든 자식노드가 제거되고 단일 Text로 바뀐다.**

```html
<body>
  <div>
  <h2>Dude</h2>
  <p>you <strong>rock!</strong></p>
  <div>
</body>
```

```js
document.body.textContent = "you dont rock!";

console.log(document.querySelecotr("div").textContent); // you dont rock! 이 출력 //뭐지 적용은 되는데 오류가 뜨는데...
```

- textContent는 document 나 doctype 노드에서 사용될 경우 null을 반환한다. script 및 style element 경우에는 내용이 반환된다.

### 7.9 textContent 와 innerText 간의 차이

- innerText에는 CSS가 반영된다. 즉 숨겨진 텍스트가 있을경우 innerText는 이 텍스트를 무시하는 반면, textContent는 무시하지 않는다.

- innerText는 CSS의 영향을 받으므로 리플로우가 발생되는 반면, textContent는 그렇지 않다.

- innerText는 script와 style element 내에 포함된 Text 노드를 무시한다.

- textContent와 달리 innerText는 텍스트를 정규화해서 반환한다. textContent는 문서 내에 있는 것을 마크업만 제거해서 그대로 반환하는 것으로 생각하면 된다. 여기에는 공백, 줄 바꿈, 개행 문자가 포함된다.

* innerText는 비표준이고 브라우저에 국한된 것으로 간주되지만, textContent 는 DOM 사양으로 구현되었다.

### 7.10 normalize()를 사용하여 형제 텍스트 노드들을 단일 텍스트 노드로 결합하기

```html
<body>
  <div></div>
</body>
```

```js
const pElementNode = document.createElement("p");
const textNodeHi = document.createTextNode("HI ");
const textNodeCody = document.createTextNode("Cody");

pElementNode.appendChild(textNodeHi);
pElementNode.appendChild(textNodeCody);

document.querySelector("div").appendChild(pElementNode);
console.log(document.querySelector("p").childNodes.length); //2가 출력됨 <text> <text>

document.querySelector("div").normalize(); //형제 텍스트 노드들을 결합
console.log(document.querySelector("p").childNodes.length); // <text>
```

### 7.11 splitText()를 사용하여 텍스트 노드를 분할하기

- Text 노드에서 splitText()를 호출하면, 해당 텍스트 노드를 변경(옵셋까지의 텍스트는 내버려둠)하고 옵셋을 기반으로 원래 텍스트에서 분할된 텍스트를 가진 새로운 Text 노드를 반환한다.

* 다음 코드에서 Hey Yo! 텍스트 노드는 Hey 이후부터 분활되어, Hey는 DOM에 남아있고 Yo!는 새로운 텍스트 노드가 되어 splitText() 메서드에서 반환된다.

console.log(document.querySelector("p").firstChild.splitText(4).data); //Yo가 출력됨

console.log(document.querySelector("p").firstChild.textContent); //Hey가 출력됨

```html
<body>
  <p>Hey Yo!</p>
</body>
```

```js
console.log(document.querySelector("p").firstChild.splitText(4).data); //Yo가 출력됨
console.log(document.querySelector("p").firstChild.textContent); //Hey가 출력됨
```

## 8. DocumentFragment 노드(실제로 잘 사용하지 않은듯)

### 8.1 DocumentFragment 개체 개요

- DocumentFragment 노드를 생성해서 사용하면 라이브 Dom 트리 외부에 경량화된 문서 DOM을 만들수 있다. DocumentFragment는 마치 라이브 DOM 트리처럼 동작하되, **메모리상에서만 존재하는 빈 문서 템플릿으로 생각하면된다.**

### 8.2 createDocmentFragment()를 사용하여 DocumentFragment를 생성하기

```js
const docFrag = document.createDocumentFragment();

["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  docFrag.appendChild(li);
});

console.log(docFrag.textContent); //blueredgreen
```

- **DocumentFragment를 사용하여 메모리상에서 노드 구조를 만들고 이를 라이브 노드 구조에 삽입하면 매우 효율적**이다.

* DocumentFragment를 사용하는것이 좋은이유?

  - DocumentFragment 는 **어떤 종류의 노드를 가질수 있는 반면(<body>나 <html>을 제외)** element는 그렇지 않다.

  * DocumentFragment 는 DOM에 추가하더라도, **DocumentFrament 자체는 추가되지 않으며**, 노드의 **내용만이 추가된다.**

  - DocumentFragment를 DOM에 추가할때, DocumentFragment는 추가되는 위치로 이전되며, **생성한 메모리상의 위치에 더 이상 존재하지 않는다.** 노드를 포함하기 위해 일시적으로 사용된 후 라이브 DOM으로 이동되는 element노드는 그렇지 않다. (결국에는 메모리를 효율적으로 사용할수 있다는 말인가..??)

### 8.3 DocumentFragment를 라이브 DOM에 추가하기

```html
<body>
  <ul></ul>
</body>
```

```js
const ulElm = document.queryselector("ul");
const docFrag = docment.createDocumentFragment();

["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  docFrag.appendChild(li);
});

ulElm.appendChild(docFrag);

console.log(docment.body.innerHTML);
// <ul><li>blue</li><li>red</li><li>green</li></ul> 가 출력됨

console.log(docFrag); // 라이브 DOM에 할당되었으므로 그 값이 사라짐
```

- 즉 아래 예시처럼 사용하는것보다 DocumentFragment를 사용하는것이 더 메모리상으로 더 좋다는 의미??

```js
const ulElm = document.querySelector("ul");

["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  ulElm.appendChild(li);
});

console.log(document.body.innerHTML);
// <ul><li>blue</li><li>red</li><li>green</li></ul> 가 출력됨
```

- 주목 : 노드를 삽입하는 메서드에 DocumentFragment를 인수로(아규먼트)로 전달하면, 자식노드 구조 전체가 삽입되며 DocmentFragment노드 자체는 무시된다. (즉 라이브 DOM에 추가될경우 자식 노드구조 전체가 삽입됨)

### 8.4 DocumentFragment에서 innerHTML 사용하기

```js
const divElm = document.createElement("div");
const docFrag = document.createDoucmentFragment();

docFrag.appendChild(divElm);

docFrag.querySelector("div").innerHTML = "<ul><li>foo</li><li>bar</li></ul>";
console.log(docFrag.qeurySelectorAll("li").length); // 2가출력됨
```

```html
<div></div>
```

```js
const divElm = document.createElement("div");
const docFrag = document.createDocumentFragment();

docFrag.appendChild(divElm);

docFrag.querySelector("div").innerHTML = "<ul><li>foo</li></ul>";

document
  .querySelector("div")
  .appendChild(docFrag.querySelector("div").firstChild);

console.log(docFrag); // <div></div> //div안에 있던 <ul><li>foo</li></ul> 이 사라짐 , 즉 메모리에서 사라짐

console.log(document.querySeletor("div").innerHTML);
//<ul><li>foo</li><li>bar</li></ul> 가 출력됨
```

```js
const divElm = document.createElement("div");
const docFrag = document.createDocumentFragment();

docFrag.appendChild(divElm);

docFrag.querySelector("div").innerHTML = "<ul><li>foo</li></ul>";

document.querySelector("div").appendChild(docFrag.firstChild);

console.log(docFrag); // 빈값 //<div><ul><li>foo</li></ul></div> 이 사라짐 , 즉 메모리에서 사라짐

console.log(document.querySeletor("div").innerHTML);
//<ul><li>foo</li><li>bar</li></ul> 가 출력됨
```

- 즉 fragment 는 라이브 돔에 할당될시 , 그 fragment의 값들이 메모리에서 사라지게 된다

### 8.5 복제를 사용하여 Fragment 노드를 메모리상에서 유지하기

DocumentFramgment를 추가하면, Fragment 내에 포함된 노드들을 추가하는 구조로 이동한다. 노드를 추가한 이후에도 Fragment 내용을 **메모리상에서 유지하려면 , cloneNode()를 사용하여 추가할 DocumentFragment를 복제하면 된다.**
(일반적으로 DocumentFragment는 메모리상에서 위치에 존재하지 않는다.)

```js
const ulElm = document.querySelector("ul");
const docFrag = document.createDocumentFragment();
["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  docFrag.appendChild(li);
});

// ulElm.appendChild(docFrag); // DocumentFragment 메모리상에 안남음

ulElm.appendChild(docFrag.cloneNode(true)); // 복제된 DOcumentFragment 를 라이브 DOM의 ul에 추가

console.log(document.querySelector("ul".innerHTML));
// <li>blue</li><li>red</li><li>green</li>

console.log(docFrag.childNodes); //NodeList(3) [li, li, li]
```

```js
const ulElm = document.querySelector("ul");
const docFrag = document.createDocumentFragment();

["blue", "red", "green"].forEach((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  docFrag.appendChild(li);
});

// ulElm.appendChild(docFrag); // DocumentFragment 메모리상에 안남음

ulElm.appendChild(docFrag); // 복제된 DOcumentFragment 를 라이브 DOM의 ul에 추가

console.log(document.querySelector("ul").innerHTML);
// <li>blue</li><li>red</li><li>green</li>

console.log(docFrag.childNodes); // NodeList [] 빈값이 나옴 !!
```
