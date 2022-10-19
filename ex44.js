function createCounterClosure(){
    let count = 0;
    return {
        increase : function (){
            count++;
        },
        getCount : function(){
            return count;
        }
    };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log('counter 1의 값 : '+counter1.getCount()); //counter 1의 값 : 2
counter2.increase();
console.log('counter 2의 값 : '+counter2.getCount()); // counter 2의 값 : 1

//클로저 : 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말함.
// 위에서 함수는 분명히 return 되면 종료가 되지만 마지막에 함수를 리턴해주게 되면서 함수 내에 상위 스코프의 자원을 활용하게 되면 
// 이후에는 코드에서 해당 함수 호출문이 없어질때 까지는 자원을 garbage Collector가 회수하지 않음
// 참조가 사라지면 데이터는 컬렉터가 회수