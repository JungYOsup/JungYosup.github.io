"use strict";

const d = document;

console.log("title = " + d.title); //Document
console.log("url = " + d.URL); // url 주소
console.log("referrer = " + d.referrer); //참조 주소
console.log("lastModified = " + d.lastModified); // 마지막 수정일

//BackComapt(Quirks 모드) 또는 CSS1Compat(Strict 모드) 중 하나가 출력된다.

console.log("compatibility mode = " + d.compatMode); //CSS!compat
