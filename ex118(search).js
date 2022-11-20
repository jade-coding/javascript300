// 정규표현식으로 대응되는 문자열 위치 확인하기(search)
/*
정규표현식이란?  특정규칙을 가진 문자열의 집합을 의미.
JS에서는 정규표현식을 활용하는 2가지 방법이 존재. 
1. String 객체의 메소드 중에서 매개변수 중에서정규표현식을 대입하는 메소드를 사용
2. 정규표현식 자체를 RegEx 객체로 해석하여 RegEx 객체의 내장메소드를 활용

String 객체의 search 메소드는 정규표현식을 매개변수로 대입하여, 문자열 앞에서부터 일치하는 첫 번째 값의 인덱스 위치를 반환합니다. 만일 일치하는 값이 없으면 -1을 반환합니다.
*/

const str = 'To lose your path is the way to find that path'

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g;
const regex4 = /t/ig;

console.log(str.search(regex1)) // 13
console.log(str.search(regex2)) // -1
console.log(str.search(regex3)) // 15 사실 g옵션을 달아서 t를 전부 찾지만 search 특성상 첫번째 매칭된 위치만 반환해줌.
console.log(str.search(regex4)) // 0
