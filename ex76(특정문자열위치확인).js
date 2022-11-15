const str = 'Carpe diem, seize the day';

console.log(`"e"는 ${str.lastIndexOf('e')}번째 인덱스에 있습니다`)
console.log(`대문자 "C"는 ${str.lastIndexOf('C')}번째 인덱스에 있습니다`)
console.log(`"c"는 ${str.lastIndexOf('c')}번째 인덱스에 있습니다`)
console.log(`", se"는 ${str.lastIndexOf(', se')}번째 인덱스에 있습니다`)

/*
lastIndexOf는 문자열의 뒤에서부터 동일한 첫번째 인덱스 값을 반환.
"e"는 20번째 인덱스에 있습니다
대문자 "C"는 0번째 인덱스에 있습니다
"c"는 -1번째 인덱스에 있습니다
", se"는 10번째 인덱스에 있습니다
*/