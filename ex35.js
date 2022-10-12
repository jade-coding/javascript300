// function checkNumber(val){
//     if(typeof val !== 'number') throw '유효하지 않은 값입니다.'
//     console.log('숫자형 값으로 확인되었습니다.')
// }

// checkNumber(100)
// checkNumber('Wrong type')
// console.log('완료') 
// 완료 문구는 실행자체가 되지 않음..

/*
숫자형 값으로 확인되었습니다.

c:\Users\user\Desktop\Coding\algo\Javascript\javascript300\ex35.js:2
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.'
                                ^
유효하지 않은 값입니다.
(Use `node --trace-uncaught ...` to show where the exception was thrown)
*/


function checkNumber2(val){
    if(typeof val !== 'number') throw '유효하지 않은 값입니다.'
    console.log('숫자형 값으로 확인됨')
}

try{
    checkNumber2(100) // 숫자형 값으로 확인 됨
    checkNumber2('Number') // -> catch구문으로 이동
}
catch(e){
    console.log(e) // 유효하지 않은 값입니다.
}
finally{
    console.log('완료') // 완료실행
}