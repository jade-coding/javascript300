// JSON을 문자열로 반환하기 JSON 객체가 '{ }' 이렇게 되어있는 것!!!
// JSON.strinfy(값, 리플레이서, 공백 개수)
/*
리플레이서는 json문자열로 변환하기 전에 값을 변경하는 인자. 이때 리플레이서로 콜백함수를 넣거나 특정 키 정보를 담은 배열을 넣어 값을 변경합니다.
인자 공백 개수는 JSON문자열의 들여쓰기 시 공백 개수를 의미합니다. 1부터 10까지 지정할 수 있고, null이나 0 또는 음수는 공백을 사용하지 않는 것으로 간주
*/
const testStringify = {
    stringifiedNum : JSON.stringify(13.1),
    stringifiedStr : JSON.stringify('Kiss Carnival'),
    stringifiedBln : JSON.stringify(false),
    stringifiedArr : JSON.stringify([2003, 2017]), // 배열이 '[24234, 23424]' 이런 형태의 문자열이 된 것. 
}

for(let key in testStringify){
    console.log(`--------- ${key} ---------`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
}

/*
--------- stringifiedNum ---------
string
13.1
--------- stringifiedStr ---------
string
"Kiss Carnival"
--------- stringifiedBln ---------
string
false
--------- stringifiedArr ---------
string
[2003,2017]

*/

console.log(`----------- stringifyObj ----------`);
// ----------- stringifyObj ----------

const obj = {
        drama : 'PET',
        season : 2017,
        casting: ['koyuki','matsumoto jun'],
        character : ['sumire', 'momo']
}

console.log(typeof JSON.stringify(obj)); // string

console.log(JSON.stringify(obj));
//{"drama":"PET","season":2017,"casting":["koyuki","matsumoto jun"],"character":["sumire","momo"]}
console.log(JSON.stringify(obj, ['drama', 'season'])); // drama, season 속성만 객체에 담은 JSON문자열이 출력됨.
// {"drama":"PET","season":2017}

console.log(JSON.stringify(obj, null, 4));
/*
{
    "drama": "PET",
    "season": 2017,
    "casting": [
        "koyuki",
        "matsumoto jun"
    ],
    "character": [
        "sumire",
        "momo"
    ]
}
*/
console.log(JSON.stringify(obj, null, 10)); 
/*
{
          "drama": "PET",
          "season": 2017,
          "casting": [
                    "koyuki",
                    "matsumoto jun"
          ],
          "character": [
                    "sumire",
                    "momo"
          ]
}
*/

console.log(JSON.stringify(obj, (key, val) => {
    if(key === 'season') return 2003;
    return val;
},4));
/*
{
    "drama": "PET",
    "season": 2003,
    "casting": [
        "koyuki",
        "matsumoto jun"
    ],
    "character": [
        "sumire",
        "momo"
    ]
}
*/


