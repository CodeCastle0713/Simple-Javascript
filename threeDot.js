let fruits = ["Mango", "Apple", "Mango", "Banana", "Mango"];

// Output the unique array elements in fruits.
const realFruits = [...new Set(fruits)];
const newSet = new Set(fruits); //Save the unique elements after using <Set>
const myBool = newSet.has("Mango");

console.log(realFruits);
console.log(myBool);