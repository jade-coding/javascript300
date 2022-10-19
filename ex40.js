/*
호이스팅은 자바스크립트의 코드를 해석하고 실행하는 방식 때문에 나타납니다.
자바스크립트는 코드를 해석하는 단계와 실행하는 단계로 나뉘고 
해석하는 단계에서는 선언문장을 초기화 하면서 
실행하는 단계에서는 값을 할당하거나 계산을 하는 행위를 한다고 보면 됨
*/

hello();//함수 호출 이전에 아래 함수가 호이스팅 되었음.
function hello(){
    console.log("안녕하세요")
}
hello2(); //hello2 is not a function 
//hello2가 undefined값으로 호이스팅이 되어서 밑에서 할당받기 전까지는 사용하는데 제한
var hello2 =function (){
    console.log("안녕하세요2");
}