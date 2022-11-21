// 문자열 순회하기

const str = 'hello'

for(const item of str){
    console.log(item)
}
/*
h
e
l
l
o
*/
const iter = str[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
/*
{ value: 'h', done: false }
{ value: 'e', done: false }
{ value: 'l', done: false }
{ value: 'l', done: false }
{ value: 'o', done: false }
{ value: undefined, done: true }
*/