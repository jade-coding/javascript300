// 정규표현식으로 특정 문자의 포함 여부 확인하기
// RegEx는 대입된 문자열이 정규표현식에 맞으면 true, 아니면 false를 반환

const numRegExp = /[0-9]+/;
const phoneRegExp =/\d{3}-\d{3,4}=\d{4}$/;
const emailRegExp = /^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+)\.([a-z]{2,3})$/i;

console.log(numRegExp.test(12345)); // true
console.log(numRegExp.test('test')); // false
console.log(phoneRegExp.test('010-3003-0046')); // false
console.log(phoneRegExp.test('02-8844-1234')); // false
console.log(emailRegExp.test('test123@javascript.org')); // true
console.log(emailRegExp.test('test-javascript')); // false
/*
[]로 둘러싼 것은 선택 패턴
이 안에  넣은 문자 중에서 매칭되는 값을 확인.
+ 한정 기호는 표현식 패턴에 하나 이상 일치하는 모든 문자열을 확인. => [0-9]+ 는 대입된 문자열이 숫자 0~9 중에서 하나라도 일치하는지 확인하는 표현식

중괄호 {}는 일반적으로 개수를 가리킬 때 사용 \d{3} => 숫자로 구성된 문자 3개. \d{3,4} 숫자로 구성된 문자가 3개 또는 4개
소괄호 ()는 그룹을 의미 공백으로 단어와 단어를 구분하는 역할과 유사함. 표현식을 괄호 그룹으로 묶으면 원하는 부분끼리만 표현식이 적용되도록 할 수 있음
ex) ^([-_.]?[0-9a-zA-Z]{6,13})+\@([0-9a-z]+) => 필수값 아닌 -_/을 허용 하는 표현식 괄호를 사용해서 그 해당부분만 표현식을 적용.
*/