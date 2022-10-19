/* 
const 키워드로 정의된 상수에 객체를 할당하면 불변객체가 되지는 않습니다. 
불변 객체는 정의된 후에 그 상태를 바꿀 수 없는 객체를 의미
*/

const URL = "http://js.com"
/*
URL = "http://js.com" // TypeError: Assignment to constant variable.
*/

if(true){
    const URL2 = 'http://js.com'
}
/*
console.log(URL2) // ReferenceError: URL2 is not defined
*/
const CONST_USER = {name:'jay',age:30}
console.log(CONST_USER.name,CONST_USER.age);//jay 30
CONST_USER.name = 'jay2'
CONST_USER.age = 31
console.log(CONST_USER.name,CONST_USER.age);
CONST_USER = {name:'bbo'}; // Assignment to constant variable.
// 새로운 객체로 할당은 못하고 객체내부의 상태만 변경할 수 있음