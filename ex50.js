function Storage(){
    this.dataStore = {}
}

Storage.prototype.put = function(key , data){
    this.dataStore[key] = data;
}
/*
__proto__속성은 해당객체를 생성한 생성자 함수의 prototype 객체를 가리킴.
*/


Storage.prototype.getData = function(key){ // 생성자 함수의 프로토타입 객체에 put 메소드를 추가함. 
    return this.dataStore[key];
}

const productStorage = new Storage();
productStorage.put('id001',{name:'키보드',price:2000})

console.log(productStorage.getData('id001')) // { name: '키보드', price: 2000 }

function RemovableStorage(){
    Storage.call(this) // Storage 함수 내부에 함수가 정의한 대로 dataStore 속성이 this를 통해서 RemovableStorage 속성으로 추가됨. 
}

RemovableStorage.prototype = Object.create(Storage.prototype);
// Object.create 메소드는 주어진 인자를 __proto__에 연결한 새로운 객체를 반환합니다. Object.create를 이용하면 간단히 상속 관계를 형성할 수 있음
// Storage 함수의 프로토타입 객체가 RemovableStorage 함수의 프로토타입 객체의 __proto__에 할당됩니다. 
RemovableStorage.prototype.removeAll = function(){
    this.dataStore={};
}

const productStorage2 = new RemovableStorage();
productStorage2.put('id001',{name:'키보드',price:2000});
productStorage2.removeAll(); 
const item2 = productStorage2.getData('id001');
console.log(item2); // undefined

//프로토타입 체인을 이루기 때문에 자신이 없으면 자기 부모인 프로토타입객체를 참조하면서 원하는 데이터를 참조한다.