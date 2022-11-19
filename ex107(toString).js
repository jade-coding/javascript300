// 진수 변환하기
// toString을 활용하면 지정된 객체의 문자열을 출력합니다. 즉, 값을 문자열로 변환해줌. ex) 53.toString()
const dec = 531;

const binByDec = dec.toString(2);
const octByDec = dec.toString(8);
const hexByDec = dec.toString(16);

console.log(binByDec)
console.log(octByDec)
console.log(hexByDec)
/*
1000010011
1023
213
*/

let s = 52;
console.log(s.toString(), typeof s.toString()); // 52 string