function Teacher(name,age,subject){
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach =function(student){
        console.log(student +'에게'+this.subject+'를 가르칩니다.')
    }
}

const jay = new Teacher('jay',30,'JavaScript')
console.log(jay)
/*
Teacher {
  name: 'jay',
  age: 30,
  subject: 'JavaScript',
  teach: [Function (anonymous)]
}
*/
jay.teach('bbo') // bbo에게JavaScript를 가르칩니다.

console.log(jay.constructor) //[Function: Teacher]
console.log(jay instanceof Teacher)//true

const jay2 = Teacher('jay',30,'JavaScript')
console.log(jay2) // undefined;
/*
jay2를 선언해줄때 new를 빼고 생성자 함수를 호출함.
생성자 함수의 this는 전역객체를 가리키게 됨. 
*/

console.log(age) // 30 age는 전역객체를 갖음.

/*
생성자 함수(객체를 생성하는 역할을 하는 함수 , 일종의 클래스 / 대문자로 시작하는 컨벤션 관례가 있음)의 new 호출을 통한 객체 생성과정
1. 빈 객체를 만듦
2. 만든 빈 객체를 this에 할당
3. 생성자 함수 body내 코드를 실행(this에 속성 및 메소드 추가)
4. 만든 빈 객체에 __proto__에 생성자 함수의 prototype 속성을 대입
5. this를 생성자의 반환값으로 변환
*/