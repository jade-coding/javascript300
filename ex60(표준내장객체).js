/*
표준 내장객체 : Object, Number, String, Array, Math, Date, JSON, RegExp, Map, Set

Map는 ES6부터 표준으로 추가된 Map 객체. 키: 값 데이터 구조를 지닌 데이터 집합체. 키의 중복성을 허용하지 않으며 관련된 속성, 메소드들을 갖고 있음. 
Iterator를 통해 Map의 데이터를 순회한다는 특징이 있음

Set는 ES6부터 추가된 객체형. 오직 값으로 이루어진 데이터 집합체. Iterator로 순환이 되고 값의중복성을 허용하지 않는 것이 특징

표준내장객체는 객체임에도 불구하고 함수처럼 호출할 수 있습니다. 여느 다른 함수처럼 매개변수를 받고, 함수 몸통에 내장 함수 객체의 행위를 특징화 하는 코드들이 구현됨
이런 형태를 내장함수객체(Built in Function Object)라고 부름
new 지시자를 활용하여 함수 형태로 호출하며 생성자를 생성합니다. 표준 내장 객체 내부에는 속성과 메소드가 정의되어 있습니다.

*/

const str = new String('자바스크립트')
const num = new Number(200)
const bool = new Boolean(true)
const date = new Date()
const map = new Map()
const set = new Set()

console.log(Math.PI);
console.log(Date.parse('2019-01-01'))
console.log(JSON.parse('{}'));

/* 실행결과 
3.141592653589793
1546300800000
{}
*/


// 원시자료형과 표준 내장 객체에는 차이점이 존재한다.

const str1 = '자바스크립트 200제'
const str2 = new String('자바스크립트 200제')

console.log(typeof str1) //string
console.log(typeof str2) //object

console.log(str1 === '자바스크립트 200제') // true
console.log(str1 === str2) //false
console.log(str1 == str2) // true
console.log(str2 === new String('자바스크립트 200제')) //false
console.log(str2 === '자바스크립트 200제') //false
console.log(str2 == '자바스크립트 200제') //true

// valueOf 함수는 내장객체에 저장된 메소드, 객체의 원시형 값, 즉 문자열 값을 반환하는 함수인데 원시형 타입의 str1도 동일한 값을 출력한다는 걸 보면 래핑됨을 알 수 있음
console.log(str1.valueOf);
console.log(str2.valueOf);

/*
JS에서는 원시 자료형이 각 성격에 맞게 표준 내장 객체로 자동으로 래핑됨
typeof로 자료형을 확인하면 구분되지만 원시자료형 값도 표준 내장 객체로 래핑되기 때문에 내장 객체에서 제공하는 메소드나 속성을 사용할 수 있음.


*/
