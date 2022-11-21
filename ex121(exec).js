/*
RegExp 객체의 exec 메소드는 정규표현식과 일치하는 문자열을 찾아 배열로 반환합니다. 만일 일치하는 문자열이 없으면 null을 반환합니다.
exec는 활용에 따라 일치하는 문자열과 해당 위치 정보들을 모두 알 수 있음

match와 exec의 가장 큰 차이점은 반환값에 있음
exec메소드는 호출할 때마다 일치하는 값을 찾으면, 현재 위치를 가리키는 lastIndex 인덱스 값이 계속 없데이트 된다.
*/

const str = 'Java is not in JavaScript';

const result1 = /java/ig.exec(str);
console.log(result1[0]); // Java
console.log(result1.index); // 0
console.log(result1.input); // Java is not in JavaScript

const nums = '"1", "2","3"';
const regex = /\d+/g;

let result2;
while(result2 = regex.exec(nums)){
    console.log(result2, regex.lastIndex);
}
/*
[ '1', index: 1, input: '"1", "2","3"', groups: undefined ] 2
[ '2', index: 6, input: '"1", "2","3"', groups: undefined ] 7
[ '3', index: 10, input: '"1", "2","3"', groups: undefined ] 11
*/