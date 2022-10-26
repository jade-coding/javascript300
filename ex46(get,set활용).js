let user = {}
Object.defineProperty(user,"age",{
    get : function(){
        return this._age;
    },
    set : function(age){
        if(age < 0)
        console.error('0보다 작은 값은 올 수 없습니다')
        else
        this._age = age;
    },
    enumerable:true
})

/*
속성 기술자를 통해 user 객체의 age 속성을 정의.
이때 값에 접근하는 방식을 정의하는 객체를 전달하는데 이 객체를 접근 기술자라 하고 get,set 메소드를 가짐.
age 속성의 접근 기술자의 get 메소드는 속성에 접근할 때 호출됨. 그리고 set메소드는 속성에 값을 대입할 때 호출
*/

user.age = 10;
console.log(user.age) // 10이 출력  get 메소드는 속성에 접근할 때 호출됨. 그래서 user.age에 접근하면 user._age의 결과를 반환.
user.age = -1; // '0보다 작은 값은 올 수 없습니다' 에러가 출력

let user2 = {
    get name(){
        return this._name
    },
    set name(val){
        if(val.length < 3) throw new Error('3자 이상이어야 합니다.')
        this._name = val;
    }
}

user2.name = 'harin' 
console.log(user2.name) // harin 출력
user2.name= 'ha'; // Error: 3자 이상이어야 합니다.

// 위 예제에서 속성 이름에 _를 붙이는 것은 암묵적으로 비공개 속성임을 나타냄.
// 자바스크립트 객체는 속성 접근 제한자가 없어서 모든 속성은 공개(public), 그래서 대체로 이름 규칙을 통해 비공개임을 나타냄.