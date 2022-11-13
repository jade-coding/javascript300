import  * as add  from './ex59-1.js';
// as 키워드는 export 할 때에도 사용할 수 있습니다. 먼저 선언된 이름들을 마지막에 export 할 때 다음과 같이 as 키워드로 다른 이름으로 내보낼 수 있습니다.
// const version = 'v1.0
// export {version as ver};
// 다른 모듈을 가지고 올 때 별표를 이용하거나 다른 모듈의 코드를 실행만 시킬 수도 있습니다.


const version = 'v0';
console.log(add.version);

console.log('hello!');
globalThis.hello = function hello(name){ // window 객체가 nodejs 환경에서 먹히지 않으므로 globalthis를 활용, 익명 함수여도 사용 가능
    console.log(name);
};
// 외부로 내보내는 값 없이 콘솔에 출력하거나 전역 객체인 window에 메소드로 hello를 서넌합니다.
// window에 메소드를 추가하면 window를 통하지 않고 직접 해당 메소드의 호출이 가능합니다.

const added = add.default(1,2);
console.log(added);

hello('harin');


/* 실행결과!
v1.0
hello!
3
harin
*/