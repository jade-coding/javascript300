/*
Array 내장객체의 메소드 from은 대입된 문자열 값을 구분자 없이 분할함.
분할된 문자는 배열 요소 각각으로 대입되어서 배열이 만들어짐. 두번째 인자에 콜백함수 집어넣으면 분할과 동시에 각 값을 변환이 가능
*/

const str ='12345678';

const distributedArr = Array.from(str);
console.log(distributedArr);
/*
[
  '1', '2', '3',
  '4', '5', '6',
  '7', '8'
]
*/
const modifiedArr = Array.from(distributedArr, e1 => e1*2);
console.log(modifiedArr);
/*
[
   2,  4,  6,  8,
  10, 12, 14, 16
]
*/