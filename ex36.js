function sum(){//매개변자가 설정되어있지 않지만 에러가 발생하지 않음. 
    var total = 0;
    for (var i =0; i<arguments.length;i++){
        total += arguments[i]
    }
    console.log(arguments instanceof Array); // false 즉 배열이 아님. 
    return total;
}
// JS에는 전달인자의 개수와 매개변수의 개수가 달라도 에러를 발생하지 않음
// 매개변수 외에 함수에서만 사용 가능한 특별한 객체를 제공합니다. arguments객체
var sumOf1to3 = sum(1,2,3) // 호출시 3개의 인자를 넣어주었으나 함수는 매개변수 설정이 없음.
console.log(sumOf1to3)

function testArg(){
    var newArr = Array.prototype.slice.call(arguments);//arguments객체를 array로 바꿔줌.  
    //argument를 array객체로 바인딩시켜서 slice를 진행. 매개변수에 어디서부터 slice하겠다는 조건이 없어서 처음부터 끝까지를 다 슬라이스한 배열이 완성
    //call()은 상위 context를 변경하는 메서드 
    console.log(newArr) // ['a','b']
    console.log(newArr.indexOf('b'))
    console.log(arguments.indexOf('b')); //argument객체는 length말고는 아무것도 없는 객체다.. 당연히 indexOf 함수는 작동하지 X 
}

testArg('a','b')