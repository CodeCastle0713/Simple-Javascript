const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log("Size : ", map1.size);
console.log("Value of a : ", map1.get('a'));
map1.delete('b');

map1.forEach((value, key, map) => {
    console.log("key : ", key);
    console.log("value : ", value);
    console.log("map : ", map);
})

map1.clear();
console.log("Size : ", map1.clear);