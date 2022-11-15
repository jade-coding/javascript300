/*
문자열.includes(문자열, 인덱스)
일치하는 문자열이 있는 경우 true, 없으면 false
두 번째 인자는 옵션. 인덱스를 지정하면 지정한 위치에서 문자열을 확인.
*/

const str = 'Make your lives extraordinary';

console.log(str.includes('Make')) //true
console.log(str.includes('Make',1)) //false   0으로 했으면 true였음


