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