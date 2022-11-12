// export default 'hello';
// export default function hello(name){
//     console.log('hello '+name);
// }

export default class Hello{
    constructor(greeting){
        this.greeting = greeting;
    }
    hi(name){
        console.log(`${this.greeting} ${name}`);
    }
}


/*
ES6모듈 시스템에서는 default 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다.
숫자, 문자, 불리언 , 객체, 함수, 클래스 모두 올 수 있음
default는 하나의 모듈에만 한번만 사용할 수있음. 즉, 한 파일에서는 하나의 값만 default로 정의 가능!
!! default 키워드 다음에는 var, let, const와 같은 변수선언 키워드가 올 수 없습니다. default는 사실 해당 모듈의 기본값을 선언하는 것이기 때문에
변수 선언 키워드가 오면 문법적 오류를 발생합니다. 예를 들어 A라는 모듈이 있으면 A.default= 'hello'와 같이 A 모듈의 기본값을 할당한다고 볼 수 있습니다.
*/

