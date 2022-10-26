let user = {
    name : "jeado"
}
let descriptor =Object.getOwnPropertyDescriptors(user,'name');
console.log(descriptor)
/* 자바스크립트의 모든 객체 속성은 자기 자신에 대한 정보를 담고 있는 속성 기술자를 가지고 있음.
{
  name: {
    value: 'jeado',
    writable: true,
    enumerable: true,
    configurable: true
  }
}
value : 값을 나타냄.
enumerable : for... in 루프나 Object.keys메소드 같이 속성을 나열할 때 나열 가능여부를 정의
writable : 값을 변경할 수 있는 여부. false 일 경우 변하지 않음
configurable : 속성 기술잘르 변경할 수 있는 여부를 정의. false 일 경우 속성 기술자를 변경할 수 없음
*/


let user2={}
Object.defineProperty(user2,"name",{
    value:"jeado",
    enumerable:true,
    configurable : true,
    writable:false
});

console.log(user2.name) // jeado
user2.name = "bbo"; // writable이 false 이기 때문에 값이 변하지 않음.
console.log(user2.name) // jeado

let user3 = {
    name:"jeado",
    toString(){
        return this.name; 
       }
}

Object.defineProperty(user3,'toString',{
    enumerable:false // 루프 형태를 안 돌도록 설정
})
for(let key in user3){ // 위에서 enumerable : false 설정으로 toString()은 key로 출력시키지 않음.
    console.log(key); // name만 출력
}

let user4 ={};
Object.defineProperty(user4,"name",{
    value:"jeado",
    configurable:false
})

delete user4.name; // configurable이 false여서 지워지지 않고 false가 리턴
console.log(user4); // {name : jeado}

/*
 Object.defineProperty(user4,"name",{ // Cannot redefine property: name 에러 발생
     writable:true
 })
 */