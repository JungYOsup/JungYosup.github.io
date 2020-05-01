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

- 나중에 다시 확인해보자
