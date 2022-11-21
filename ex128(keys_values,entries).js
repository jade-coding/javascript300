const map = new Map();

map.set('one',1);
map.set('two',2);
map.set('three',3);

const keys = map.keys();
const values = map.values();
const entries = map.entries();

console.log(keys.next().value);
console.log(values.next().value);
console.log(entries.next().value);

console.log(keys);
console.log(values);
console.log(entries);

/*
one
1
[ 'one', 1 ]
[Map Iterator] { 'two', 'three' }
[Map Iterator] { 2, 3 }
[Map Entries] { [ 'two', 2 ], [ 'three', 3 ] }
*/