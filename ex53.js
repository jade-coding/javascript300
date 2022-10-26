class Product{
    static build(name,price){
        const id = Math.floor(Math.random() * 1000)
        return new Product(id,name,price)
    }

    static getTaxPrice(product){
        return (product.price * 0.1) + product.price;
    }

    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

class DeposableProduct extends Product{
    depose(){
        this.deposed=true;
    }
}

const gum = Product.build('껌',1000)
console.log(gum) //Product { id: 483, name: '껌', price: 1000 }

const clothes = new DeposableProduct(1,'옷',2000)
const taxPrice = DeposableProduct.getTaxPrice(clothes)
console.log(taxPrice); // 2200

/*
생성자 함수의 prototype 기반 상속과는 다르게 클래스로 상속을 하게 되면 정적 메소드 또한 상속하게 됩니다.
*/

class ProductWithCode{
    static get CODE_PREFIX(){
        return "PRODUCT"
    }
    constructor(id){
        this.id
        this.code = ProductWithCode.CODE_PREFIX + id
    }
}

const product1 = new ProductWithCode('001')
console.log(ProductWithCode.CODE_PREFIX); // PRODUCT
console.log(product1.code) // PRODUCT001