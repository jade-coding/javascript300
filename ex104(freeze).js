// 객체 변경되지 않도록 하기

let obj = {};

obj.title = 'IDOL'; // freeze가 되기 전에는 얼마든지 객체를 수정할 수 있음
obj= Object.freeze(obj); // 동결한 객체 obj을 다시 obj 변수에 대입
obj.title = 'Euphoria'; // freeze를 실행한 뒤라서 객체가 변경되지 않음. 이때는 use strict가 선언된 상태가 아니므로 에러는 발생하지 않는다고 적혀있지만 에러 발생함. 업데이트 된 것인가?

// TypeError: Cannot assign to read only property 'title' of object '#<Object>'

console.log(obj);

const changeUntilNum = (obj, num) =>{
    'use strict'; // 함수안에서 strict 모드를 선언

    while(true){ // 에러가발생하면 멈춤
        console.log(obj);

        if(obj.age >= num){ 
            obj = Object.freeze(obj);
        }
        obj.age += 1; // use strict를 선언 이후에 객체 obj를 수정하게 되면 에러가 발생합니다.
    }
}

let profile = {name : '지연', age : 25};
changeUntilNum(profile, 30);
