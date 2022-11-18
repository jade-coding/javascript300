/*
Array 객체의 filter 메소드는 인자로 대입된 callback 함수를 통해 배열 내부를 순환하면서 요소 각각이 특정 조건을 만족하는지 확인합니다. 
*/

const arr = [1,2,3,4,5,6,7,8,9,10];

const filteredTwo = arr.filter(a => {
    console.log(`현재 위치의 값은 ${a} 입니다`);
    return a % 2 == 0;
})
/*
현재 위치의 값은 1 입니다
현재 위치의 값은 2 입니다
현재 위치의 값은 3 입니다
현재 위치의 값은 4 입니다
현재 위치의 값은 5 입니다
현재 위치의 값은 6 입니다
현재 위치의 값은 7 입니다
현재 위치의 값은 8 입니다
현재 위치의 값은 9 입니다
현재 위치의 값은 10 입니다
*/

console.log(filteredTwo);
// [ 2, 4, 6, 8, 10 ]



const filteredThree = arr.filter(a => a%3 == 0);
console.log(filteredThree);
//[ 3, 6, 9 ]