// Node Js API 문서를 확인하면 공식 내장 모듈을 확인할 수 있음
const util = require('util')

const name = 'Tony'
const greeting = util.format('Hello %s',name)
console.log(greeting) // Hello Tony