/*
배열.slice(시작 인덱스, 끝 인덱스) 시작요소 부터 끝 인덱스 직전까지
*/
const arr = ['melon', 'lemon', 'source', 'apple', 'juice']
console.log(`과일이 아닌 요소는 ${arr.slice(2,3)} 와 ${arr.slice(4,5)} 입니다.`);
console.log(arr.slice(0,10));

/*
과일이 아닌 요소는 source 와 juice 입니다.
[ 'melon', 'lemon', 'source', 'apple', 'juice' ]
*/

// slice 함수는 원본 배열을 변경하지 않고 새로운 객체를 만들어서 거기에 다 값을 저장하여 완전히 분리되는 객체로 만든 것이 아니므로 얕은 복사를 수행하였으며 
// slice 함수를 통해 처리된 결과값을 활용하려면 별도의 변수를 대입해야 함
// 배열을 복사하는 방법은 많지만 다 1차배열일 경우에만 깊으복사가 되는 것이며 2차배열부터는 보장되지 않음. slice(), concat(), spread 연산자, Array.from()