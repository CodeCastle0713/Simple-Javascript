let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

// Output the unique array elements in fruits.
const realFruits = [...new Set(fruits)];

console.log(realFruits);