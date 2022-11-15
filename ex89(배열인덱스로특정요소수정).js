/*
배열.splice(시작인덱스, 삭제할 요소의 개수, 추가될 요소들...)
*/

const fruits = ['melon', 'lemon', 'source', 'apple', 'juice']

fruits.splice(4,1); // juice 빠지고.
fruits.splice(4,0, 'graph');// graph 추가되고
fruits.splice(2,1, 'mandarin', 'strawberry', 'watermelohn'); // source 빠지고 3개들어가고
console.log(fruits)
/*
[
  'melon',
  'lemon',
  'mandarin',
  'strawberry',
  'watermelohn',
  'apple',
  'graph'
]
*/