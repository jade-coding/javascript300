"use strict"
/*
노드에서 에러를 처리하는 방식은 2가지가 존재함
1. 비동기 구문이면 콜백함수 매개변수로 error 상태정보를 보내서 그걸 확인하여 처리
2. 동기구문 또는 async-await 구문을 사용한다면 try/catch 구문으로 처리
*/
const cbFunc = (err, result) => {
    if(err && err instanceof Error) return console.error(err.message)
    if(err) return console.error(err)

    console.log('에러를 반환하지 않습니다', result)
}

const asyncFunction = (isTrue, callback) => {
    const err = new Error('This is error!!') // 노드JS Core API Error 모듈을 사용

    if(isTrue) return callback(null, isTrue)
    else return callback(err)
}

asyncFunction(true, cbFunc) // 에러를 반환하지 않습니다 true
asyncFunction(false, cbFunc) // This is error!!
//  동기적으로 에러발생후 예외처리구문
const fs = require('fs')

try{
    const fileList = fs.readdirSync('/undefined/')
    fileList.forEach(f => console.log(f))
}catch(e){
    if(e) console.error(e) 
    /*
    Error: ENOENT: no such file or directory, scandir '/undefined/'
    at Object.readdirSync (node:fs:1442:3)
    at Object.<anonymous> (c:\Users\user\Desktop\Coding\selfPractice\Javascript\javascript300\ex166(nodejs예외처리하기).js:23:25)
    at Module._compile (node:internal/modules/cjs/loader:1126:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1180:10)
    at Module.load (node:internal/modules/cjs/loader:1004:32)
    at Function.Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47 {
    errno: -4058,
    syscall: 'scandir',
    code: 'ENOENT',
    path: '/undefined/'
    }
    */
}