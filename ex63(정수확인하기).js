console.log(Number.isInteger(0)) // true
console.log(Number.isInteger(-1)) // true
console.log(Number.isInteger(77777777777777777777777)) //true
console.log(Number.isInteger(null)) // false
console.log(Number.isInteger(0/0)) // false
console.log(Number.isInteger('Infinity')) // false 무한대는 정수가 아님.
console.log(Number.isInteger(true)) // false
console.log(Number.isInteger({})) // false

function verifyInteger(n){
    if(!Number.isInteger(n) || !n) return 0;
    return n;
}

const num1 = verifyInteger(15);//15
const num2 = verifyInteger(Infinity) // 0
const num3 = verifyInteger(0.05) // 0
console.log(num1,num2,num3) // 0 Infinity 0.05