if(true){
    var functionScopreValue = 'global' // 함수스코프
    let blockScopeValue = 'local' // 블록스코프
}
console.log(functionScopreValue) 
/*
console.log(blockScopeValue); // blockScopeValue is not defined
*/

let value = "바깥값" // let을 쓰게 되면 호이스팅되고서 실제 값이 할당되기 전까지 TDZ에 들어간다.
if(true){
    console.log(value) // Cannot access 'value' before initialization
    let value = "안쪽값"
}