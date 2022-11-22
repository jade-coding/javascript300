// set객체는 값의 집합이기 때문에 키를 모으는 것은 의미가 없음. 따라서 Set객체는 key메소드와 values 메소드를 동일하게 처리.
const s = new Set()

s.add('one')
s.add('two')
s.add('three')

const keys = s.keys()
const values = s.values()
const entries = s.entries()

console.log(keys.next().value) 
console.log(values.next().value)
console.log(entries.next().value)

console.log(keys)
console.log(values)
console.log(entries)

/*
one
one
[ 'one', 'one' ]
[Set Iterator] { 'two', 'three' }
[Set Iterator] { 'two', 'three' }
[Set Entries] { [ 'two', 'two' ], [ 'three', 'three' ] }
*/