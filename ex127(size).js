const map = new Map()

map.set('one',1);
map.set(2,'two')
map.set([1,2,3], 'Three elements')
map.set({a :'A',b :'B'}, 'object elements')
map.set(function(){}, 'functional elements')

for(let a of map) console.log(a);
console.log(map.size);