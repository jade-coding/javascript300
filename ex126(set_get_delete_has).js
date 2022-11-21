const map = new Map();

map.set('one',1);
map.set('two',1);

console.log(map.get('one'));
console.log(map.get('two'));
map.delete('one');

console.log(map.has('one'))
console.log(map.has('two'))
