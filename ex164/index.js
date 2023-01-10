// 모듈을 불러오기 전에 해당 모듈에 접근하여  먼저 실행한다.
const moduleTest = require('./ex164(nodejs의모듈이해하기)')
const greet = require('./greet.js')
console.log(moduleTest(3,7)) // 10
greet('gwwgwg') // how are you  gwwgwg