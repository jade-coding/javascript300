console.log(Number.isNaN(NaN))
console.log(Number.isNaN(undefined))
console.log(Number.isNaN('Is It Number?'))
console.log(Number.isNaN(0))
console.log(Number.isNaN(null))

// Number 객체의 isNaN 메소드는 NaN을 구별합니다. NaN이면 true를 반환하고, NaN이 아니면 false를 반환합니다. 
// 여기서 NaN이란 전역 객체의 속성으로 Not a Number 의 줄임말입니다.
// 다음 예제와 같이 주의해야하는 몇가지 경우가 있음!!!!!!!!!

console.log(Number.isNaN(-1)) // false -> -1은 숫자임.
console.log(Number.isNaN(0/0)); // true
console.log(Number.isNaN(new Date())) //false 문자열로 취급
console.log(Number.isNaN(new Date().toString))//false 문자열로 취급
console.log(Number.isNaN('Infinity'))//false infinity는 숫자형으로 구분됨


// NaN함수를 잘 활용하면 모든 값이 정상 숫자인지를 확인하고서 산술연산할 수 있음

function verifyNumber(n){
    if(Number.isNaN(n) || !n) return 0;
    return n;
}

const num1 = verifyNumber(15) // 15
const num2 = verifyNumber(undefined) // 0
const num3 = verifyNumber(null) // 0
const num4 = verifyNumber(NaN) // 0

console.log(num1 + num2 + num3 + num4); // 15
