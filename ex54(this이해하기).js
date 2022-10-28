console.log(this); //{}
// global 영역에서 this는 빈객체 형태의 module.exports입니다.
//  console.log(valueA) // 브라우저에서는 this는 브라우저에 내장된 전역객체인 window를 가리키지만, node에서는 그저 빈 객체이다. 런타임환경(실행환경)이 달라서다. 
// 대신 Node에는 global이라는 객체를 갖고 있다.
/*
전역객체가 global인데 왜 console.log(this)를 하면 빈 객체가 나올까?
Node에서 실행되는 js파일은 하나의 모듈이다.
실제로 node 명령어를 통해 js 파일 하나를 실행하면 파일 전체 script가 하나의 함수 안에 들어가게 된다.
node엔진은 해당 함수를 실행함으로 사용자가 작성한 코드의 결과를 출력하는 것이므로 
결과적으로 js 파일에서 작성한 코드 전체는 하나의 함수 내부에 들어가게 되는 것이므로 지역Scope를 가지게 된다. 

다만, function xxx(){
    console.log(this) // global
} 이와 같이 함수 내부에서 참조하는 this는 전역객체가 된다. 
*/

/*
화살표 함수의 this
화살표 함수 내부에서의 this는 해당함수를 호출하거나 소유한 객체를 참조하지 않는다.
대신 화살표 함수의 this는 화살표 함수를 둘러싸는 상위 스코프의 this를 사용한다.
lexicla this라고 불리기도 함.

일반적으로 this는 호출시점에 동적으로 정의되지만 화살표함수는 코드를 작성하는 시점에 
정적으로 결정되어서 상위스코프까지 값을 찾아서 참조를 한다고 생각하면 된다. 
this가 바인딩 되지 않아서, Arrowfunction 은 new를 활용한 생성자함수로 사용할 수 없음 
*/
this.valueA = 'a'
console.log(this) //{ valueA: 'a' }
valueB = 'b' // var 전역 변수로 설정하게 되면 global 객체에 담겨짐.

console.log(this.valueB) // undefined

function checkThis(){
    console.log(this) // global || window를 가리키게됨
    /*
    <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 26.111399978399277,
      nodeStart: 0.3830999732017517,
      v8Start: 2.2155999839305878,
      bootstrapComplete: 19.84229999780655,
      environment: 9.967799991369247,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1666919814551.251
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  valueB: 'b'
}
    */
}
function checkThis2(){
    "use strict"
    console.log(this); // undefined 출력
    // 엄격한 모드를 사용하게 되면 this는 undefined가 된다.
    // 엄격한 모드는 js code를 좀 더 안전하고 엄격하게 작성할 수 있도록 도와줍니다. 
    // 엄격한 모드는 전역으로 모드를 지정할 수 있거나 함수 단위로도 지정할 수 있습니다. 
}
checkThis();
checkThis2();

function Product(name,price){
    this.name = name; // global 객체에 설정
    this.price = price; // global 객체에 설정
}
const product1 = Product('가방',5000)
/*
window는 브라우저 객체에서만 유효, node 환경에서는 확인불가
console.log(window.name)
console.log(window.price)
*/
console.log('////////////////////////////')
console.log(globalThis)// 윈도우 객체 대신 globalThis로 대체작성
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 26.607400000095367,
      nodeStart: 0.3830999732017517,
      v8Start: 2.2155999839305878,
      bootstrapComplete: 19.84229999780655,
      environment: 9.967799991369247,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1666919814551.251
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  valueB: 'b',
  name: '가방',
  price: 3000
}

*/
const product2 = {
    name:'가방2',
    price:3000,
    getVAT(){
        return this.price / 10;
    }
}

const valueOfProduct2 = product2.getVAT();
console.log(valueOfProduct2) // 300

const calVAT = product2.getVAT;
const VAT2 = calVAT(); // 사실상 일반함수를 저장한 것
console.log(VAT2)// 500 전역객체에 들어있는 price를 참조해서 실행.

const newCalVAT = calVAT.bind(product2) 
// bin가 없었다면 일반함수로 저장이 되는 거였지만, bind를 시켜주어서 환경을 전달한 인자값의 환경으로 묶어주게 됨
const VAT3 = newCalVAT() // 함수를 실행해주어서 나온 결과값이 저장됨. 
console.log(VAT3) // 300

const counter1 ={
    count : 0,
    addAfter1Sec(){
        console.log(this.count); // 0 출력!
        setTimeout(function(){
            this.count += 1;
            console.log(this.count) // NAN 출력
        },1000)
    }
}
// 중첩함수로 구성되어있는경우 내부함수의 this는 전역객체를 가리키게 됨. 
// global.count를 찾지만 존재하지 않는 undefined 값에 +=1이라는 연산을 하였으므로 NaN 출력
counter1.addAfter1Sec();

const counter2 = {
    count:0,
    addAfter1Sec(){
        setTimeout(()=>{
            this.count += 1;
            console.log(this.count)
        },1000)
    }
}
counter2.addAfter1Sec(); // 1

/*
const counter1 = {
    count:0,
    addAfter1Sec(){
        const me = this; // 변수에 할당을 해주어서 nested함수에서 접근할 수 있도록 하는 방법 사용
        setTimeout(function(){
            me.count+=1; 
            console.log(me.count + 'counter객체'); /
            console.log(this.count + 'global') // global 객체를 가리키게 됨.
        },1000)
    }
}
counter1.addAfter1Sec();
*/

/*
화살표 함수 활용 예시


*/

const arrowFunc = ()=>{
    console.log(this); // 스코프 상에 this는 전역 환경에서 빈객체여서 빈 객체 출력
}
const arrowFunc1 = function(){
    console.log(this); // global 객체를 가리킴
}



const nowArrowFunc = arrowFunc1.bind({b:2}); // 주어진 객체 내에 함수가 선언 되었다고 생각하면 해당 객체를 가리킴.
const nowArrowFunc2 = arrowFunc1.bind(); // 
const nowArrowFunc3 = arrowFunc.bind({c:25});
arrowFunc(); 
// arrowFunc2(); 
nowArrowFunc() // { b: 2 }
nowArrowFunc2() // global 객체 출력
nowArrowFunc3(); // {} 선언될때 이미 결정 되므로 바인딩을 통해서 this를 변경할 수 없음.
