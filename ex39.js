// 렉시컬 스코프 : 코드를 작성하는 시점에 스코프가 결정되어짐
// 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정하는 것
// JS는 대표적인 렉시컬 스코프 언어이다!!

// 다이나믹 스코프 : 코드를 실행하는 시점에 스코프가 결정되어짐 
// 즉 함수를 어디서 호출하였는지에 따라 상위 스코프를 결정하는 것

var a = 10;
console.log(a); // 10

function print(){
    var b = 20;
    if(true){
        var c = 30;
    }
    console.log(c); // 30
}

print();
/*
console.log(b); // Error : b is not defined 
*/

var a = "global";
function print1(){
    console.log(a);
}
function print2(){
    var a= "local"
    print1();
}

print1();//global
print2();//global 이건 렉시컬이냐 다이나믹이냐에 따라서 결과가 달라지는데 
//이건 JS라서 렉시컬스코프를 따르게 됨