export const version = 'v1.0'

export var personA = {
    name: 'a'
};


export function add(a,b){
    return a+b;
}

export class Person{
    constructor(name){
        this.name = name;
    }
}


/*
ES6모듈시스템에서는 이름있는 변수나 함수 혹은 클래스를 export 키워드를 사용하여 내보낼 수 있습니다. 
기본값(default)와 다르게 이름이 있기 때문에 중복되지 않는 한 여러 이름있는 것들을 내보낼 수 있습니다.

다음과 같이 클래스, 함수, 그리고 변수들을 선언한 후에 export로 내보낼 수 있습니다. 하지만 export 바로 뒤에 이름을 작서하면 안되고 {}안에 나열해야 합니다.!!!
```
class Person{
    constructor(name){
        this.name = name;
    }
}
const version = 'v1.0';
export Person; // 문법적 오류!! 
export {version, Persion} 


```
*/