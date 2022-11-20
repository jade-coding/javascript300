// JSON문자열을 JSON으로 변환하기(parse)

// JSON.parse(값, 리플레이서)

const jsonStr = '{"drama":"PET","season":2017,"casting":'+'["koyuki","matsumoto jun"], "character:":["sumire","momo"]}';
console.log(JSON.parse(jsonStr));
/*
{
  drama: 'PET',
  season: 2017,
  casting: [ 'koyuki', 'matsumoto jun' ],
  'character:': [ 'sumire', 'momo' ]
}

*/
console.log(JSON.parse(jsonStr, (key, val)=>{
    if(key === 'season') val = 2003;
    return val;
}));
/*
{
  drama: 'PET',
  season: 2003,
  casting: [ 'koyuki', 'matsumoto jun' ],
  'character:': [ 'sumire', 'momo' ]
}
*/
console.log(JSON.parse('13.1')) // 13.1
console.log(typeof JSON.parse('13.1')) // number
console.log(JSON.parse('false')) // false
console.log(typeof JSON.parse('false')) // boolean

console.log(JSON.parse('"kiss Carnival"')); // kiss Carnival
console.log(JSON.parse('[2003,2017]')); // [ 2003, 2017 ]

/*
{
  drama: 'PET',
  seaspm: 2017,
  casting: [ 'koyuki', 'matsumoto jun' ],
  'character:': [ 'sumire', 'momo' ]
}
{
  drama: 'PET',
  seaspm: 2017,
  casting: [ 'koyuki', 'matsumoto jun' ],
  'character:': [ 'sumire', 'momo' ]
}
13.1
number
false
boolean
kiss Carnival
[ 2003, 2017 ]
*/