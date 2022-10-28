
//실행하려면 package.json 파일에 type:"module"설정 필요
import {hello} from ".";
hello('ex6 module');

/*
export import 하게 되면 서로 의존 관계를 맺어서 의존 관계 그래프가 형성됨
ES6모듈로 정의된 파일들은 실행방법에 따라 두 가지로 분류할 수 있다
1. 런타임 로딩 : 런타임 로딩은 의존 관계가 형성된 모듈들을 애플리케이션이 구동 시점에 비동기 HTTP 요청으로 불러오고 실행됨, 이때 모듈 로더가 필요한데 system.js나 require.js를 이용할 수 있음

2. 번들링 : 번들링은 의존관계가 형성된 모듈들을 하나의 파일로 묶어 줍니다. 그리고 애플리케이션이 구동할 때 묶여진 이 파일을 로드합니다. 
번들링은 개발 시점에 이루어지게 되고 브라우저에서 이루어지지 않고 대체로 node.js 환경에서 이루어지게 됩니다. 대표적인 모듈 번들러로는 웹팩(WebPack)이 있습니다.

웹팩은 모듈 번들러로 자바스크립트 코드 외에 CSS, 이미지, 폰트 등 다양한 자원들을 모듈화시켜 의존 관계 그래프를형성하여 병합된 파일들을 만들 수 있습니다. 
node.js 플랫폼에서 동작하는 애플리케이션이고 다양한 플러그인들을 제공하고 있습니다.

크롬 61버전부터 script type=module을 지원하면서 별도의 모듈 로더 없이 ES6 모듈을 사용할 수 있게 되었습니다. 

ex)
<!DOCTYPE html>
<html lang = "en">
<head>
    <meta charset = "UTF-8">
    <title>Module Sample</title>
    <script type="module" src="app.js"> </script>
</head>
<body>
</body>
</html>
*/

