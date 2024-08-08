const x = [[1,2,[3,[4,[5]],6,7],8]];

//untie the x and loop using map
const result = x.flat(3).map((e) => e * 2);
console.log(result);