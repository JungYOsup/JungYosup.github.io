const targetStr = "AA BB ZZ Aa Bb";
const regexr = /[A-Z]+/gi; //사실상 모든 targetStr의 모든 문자열을 가져온다고 보면된다.

console.log(targetStr.match(regexr)); //['AA' , 'BB' , 'Aa' , 'Bb']
