var person = 'harin'

function print(){
    var person2 = 'jay'

    function innerPrint(){
        // 렉시컬 env안에는 아무것도 정의된 것이 없지만 렉시컬 스코프 체인상에 올라가면 person, person2를 참조할 수 있어서 아래 함수가 오류없이 실행
        console.log(person) // harin
        console.log(person2) // jay
    }
    innerPrint();
    console.log('print finished')
}

print();
console.log('finished')
