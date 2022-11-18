// 배열의 특정 조건을 충족하는 요소 찾기(find)
// 특정 조건을 만족하는 첫 번째 요소를 반환

const arr = [
    {id:0, name:"혜림", age:6},
    {id:1, name:"현일", age:3},
    {id:2, name:"현아", age:30},
    {id:3, name:"우림", age:2},
]

const myFriend = arr.find(a => a.age  === 30);
console.log(myFriend); // { id: 2, name: '현아', age: 30 }