// Set 객체의 값 추가 / 삭제 / 확인하기

const s = new Set();

s.add('one')
s.add('two')
s.add('three')

console.log(s.has('one')) // true
s.delete('one')
console.log(s.has('one')) // false
console.log(s.has('two')) // true
