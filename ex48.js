const TeacherJay = {
    name:'제이',
    age : 30,
    teachJavascript:function(student){
        student.gainExp();
    }
}

const studentBbo = {
    name:"뽀",
    age : 20,
    exp:0,
    gainExp : function(){
        this.exp++;
    }
}
console.log(studentBbo.exp); // 0
TeacherJay.teachJavascript(studentBbo);
console.log(studentBbo.exp) // 1 

/*
객체지향에서는 무수히 많은 객체들을 공통적인 특성을 기준으로 객체를 묶어서 하나의 타입으로 정의함.
타입을 정의하는 작업 : 분류(Classification) , 일종의 추상화
자바스크립트는 프로토타입 기반으로 객체지향 프로그래밍을 지원 | 자바는 클래스 기반 객체지향 프로그래밍

프로토타입으로 객체에 공통사항을 적용할 수 있음.
즉 모든 객체는 다른 객체의 원형(prototype)이 될 수 있음
*/

const studentProto = {
    gainExp : function(){
        this.exp++
    }}

const harin = {
        name : '하린',
        age : 10,
        exp : 0,
        __proto__:studentProto,
    }

const bbo = {
    name:"뽀",
    age : 20,
    exp : 10,
    __proto__:studentProto,
}


bbo.gainExp();
harin.gainExp();
harin.gainExp();
console.log(harin) // { name: '하린', age: 10, exp: 2 }
console.log(bbo) // { name: '뽀', age: 20, exp: 11 }

/*
__proto__속성을 가지는데 예제 코드에서 처럼 별도로 __proto__속성에 다른 객체를 할당하지 않으면 기본적으로 Object.prototype객체가 연결됨
*/
