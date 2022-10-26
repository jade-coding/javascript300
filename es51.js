//ES6부터 Class가 도입
// Class는 별도 타입의 객체를 생성하는 설계 도면

class Cart{
    constructor(){
        this.store={}
    }
    addProduct(product){
        this.store[product.id] = product;
    }
    getProduct(id){
        return this.store[id];
    }

}

const cart1 = new Cart();

cart1.addProduct({id:1,name:'노트북'})
console.log(cart1.store); // '1': { id: 1, name: '노트북' } }

const p = cart1.getProduct(1);
console.log(p); // { id: 1, name: '노트북' }