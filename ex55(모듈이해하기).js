// 모듈은 파일이나 코드의 묶음 단위
var namespaceA = (function(){
    var privateVariable = "비공개 변수"
    return {
        publicApi:function(){
            console.log(privateVariable + "를 접근할 수 있습니다")
        }

    }
})();
namespaceA.publicApi(); // 비공개 변수를 접근할 수 있습니다

/*
즉각호출패턴을 활용해서 타인의 코드와 정의된 이름 충돌을 피해주었었다. 모듈이라는 개념이 없었을 당시에...
var 는 함수스코프이기 때문에 (function(){})() 형태로 외부에서는 참조를 할 수 없으며 마지막에 ()를 붙여주어서 즉각 실행해줌.
*/

var namespace = (function(){
    var n = "오홍";
    return {
        api:function(){
            console.log(n + "gkgkgkg");
        }
    }
})();
namespace.api();