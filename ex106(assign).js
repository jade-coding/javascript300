// 객체 병합 확장하기(assign)
/*
Object.assign(반환될 객체, ... 병합될 다른 객체들);

*/
const obj1 = {one : 1, two : 2, three : 3};
const obj2 = {name : '탄이', age : 5, address:'Seoul'}
const obj3 = {friends : ['혜림','현아','현일','우림']};
const newObj1 = Object.assign({},obj1);
const newObj2 = Object.assign({},obj1,obj2);

console.log(obj1); // { one: 1, two: 2, three: 3 }

newObj1.four = 4;
console.log(newObj1); // { one: 1, two: 2, three: 3, four: 4 }

console.log(newObj2); // { one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul' }

console.log('\n');

const newObj3 = Objt.assign(obj1, obj3); // ecobj1에 전체 병합이 되었고 그 병합된 obj1을 newObj3가 복사함

console.log(obj1); // { one: 1, two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }
console.log(newObj1); // { one: 1, two: 2, three: 3, four: 4 }
console.log(newObj2); // { one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul' }
console.log(newObj3); // { one: 1, two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }

// 여기서 궁금! obj1에서 속성값을 바꾸면 newObj3도 값이 변할까? (얕은 복사, 깊은 복사) -> 정답은 얕은 복사
obj1.one="안녕";
console.log("\n\n");
console.log(obj1)
console.log(newObj1) // 
console.log(newObj2)
console.log(newObj3) // 얕은 복사가 이루어짐..
/*
{ one: '안녕', two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }
{ one: 1, two: 2, three: 3, four: 4 }
{ one: 1, two: 2, three: 3, name: '탄이', age: 5, address: 'Seoul' }
{ one: '안녕', two: 2, three: 3, friends: [ '혜림', '현아', '현일', '우림' ] }
*/