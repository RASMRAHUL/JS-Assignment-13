// Get array input from user
let arr = [ 1, 2, 3, 4, 5 ];

// Calculate sum using reduce()
let sum = arr.reduce((a, b) => a + b,0);

// Calculate average using reduce()
let avg = arr.reduce((a, b) => a + b,0) / arr.length;

// Print the sum and average
console.log(sum);
console.log(avg);
