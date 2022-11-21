// 반복가능한 객체와 반복자 이해하기

const items = ['j','a','v','a','s','c','r','i','p','t'];
const seq = {
    [Symbol.iterator](){
        let i = 0;
        return {
            next(){
                const value = items[i];
                i++;
                const done = i > items.length;
                return {value, done};
            }
        }
    }
}

for(let s of seq) console.log(s); // for of 구문이 가능해짐
/*
j
a
v
a
s
c
r
i
p
t
*/
const [a,b,c, ...arr] = seq
console.log('a >>> ',a); // a >>>  j
console.log('b >>> ',b); // b >>>  a
console.log('c >>> ',c); // c >>>  v
console.log('arr >>> ', arr);
/*
arr >>>  [
    'a', 's', 'c',
    'r', 'i', 'p',
    't'
  ]
  */

/*
이처럼 iterable를 직접 작성하는 것 외에도, 자바스크립트의 몇몇 내장 객체들은 기존에 내장 되어 있는 iterable를 통해 기본 반복 동작을 할 수 있습니다.
Array, String, Map, Set이 해당함. 이들은 반복 가능한 동작(Iterable)을 허용함으로써 반복 가능한 객체
Prototype에서 @@Iterator 메소드를 이행한 Symbol.iterator이 구현되어 있어 반복이 가능함
*/