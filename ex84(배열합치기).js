const prevList = [1,2,3]
const currentList = [4,5,6]
const nextList = [7,8,9]

console.log(prevList.concat(currentList)) // [ 1, 2, 3, 4, 5, 6 ]
console.log(prevList.concat(currentList,nextList)) 
/*
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/

console.log(['배열'].concat('합치기')) // [ '배열', '합치기' ]
console.log(['배열'].concat('합치기','JavaScript200')) // [ '배열', '합치기', 'JavaScript200' ]

// concat함수를 호출하는 첫번째 리터럴이 배열 자료형이어야만 Array 객체 메소드 concat이 실행됩니다. 문자형의 concat함수와 헷갈리면X