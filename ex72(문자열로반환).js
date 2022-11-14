// JS의 모든 객체는 Object를 상속받음. 모든 객체는 prototype을 통해 Object의 내장메소드 toString을 오버라이드함. 
 
const num = 5;
const bool = true
const str = '문자열값'
const arr = [1,2,3]
const obj = {a:15}

console.log(num.toString())
console.log(bool.toString())
console.log(str.toString())
console.log(arr.toString())
console.log(obj.toString())

num.__proto__.toString=()=>{
    return 'toString 덮어쓰기'
}

console.log(num.toString())

/*
5
true
문자열값
1,2,3
[object Object]
toString 덮어쓰기

*/