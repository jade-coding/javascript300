var obj = {a:1,b:2,c:30,d:44,e:5}

var {a,c} = obj;
console.log(`a >>> ${a}`)
console.log(`c >>> ${c}`)
/*
a >>> 1
c >>> 30
*/
var { a:newA = 10, f:newF=5} = obj; // obj에 f속성은 없어서 기본값 5를 할당함.
console.log(`newA >>> ${newA}`)
console.log(`newF >>> ${newF}`)
/*
newA >>> 1
newF >>> 5 
*/

var arr = [1,2,30,44,5]
var [b,c, ...rest] = arr;
console.log(`0) b>>> ${b}`)
console.log(`0) c>>> ${c}`)
console.log(`0) rest>>> ${rest}`)

/*
0) b>>> 1
0) c>>> 2
0) rest>>> 30,44,5
*/

var [a=10,f=9] = [1]
console.log(`1) a >>> ${a}`)
console.log(`1) f >>> ${f}`)
/*
1) a >>> 1
1) f >>> 9 
*/

/*
[a,f] = [f,a]; //허용되지 않음
console.log(`2) a >>> ${a}`)
console.log(`2) f >>> ${f}`)
*/
function getArr(){
    return [1,2,3,4,5,6]
}

[a, , , , , f] = getArr()
console.log(`3) a >>> ${a}`)
console.log(`3) f >>> ${f}`)

/*
3) a >>> 1
3) f >>> 6
*/