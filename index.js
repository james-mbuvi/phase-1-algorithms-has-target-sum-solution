// function hasTargetSum(array, target) {
//   // Write your algorithm here
// }

// /* 
//   Write the Big O time complexity of your function here
// */

// /* 
//   Add your pseudocode here
// */

// /*
//   Add written explanation of your solution here
// */

// // You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

// module.exports = hasTargetSum;



function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      // Check if the sum of the current pair equals the target
      if (array[i] + array[j] === target) {
        return true; // Return true if a pair is found
      }
    }
  }
  return false; // Return false if no pair is found
}

/* 
  Time Complexity: O(n^2) - Nested loops iterate over each pair in the array
  
  Pseudocode:
  - Iterate over each element in the array using a nested loop
  - For each pair of elements, check if their sum equals the target
  - If a pair is found, return true
  - If no pair is found after the loops, return false
  
  Written explanation of the solution:
  The function uses nested loops to iterate through each pair of elements in the array. For each pair, it checks if their sum equals the target. If a pair is found with the desired sum, the function returns true. If no such pair is found after examining all pairs, the function returns false.

  Example:
  hasTargetSum([3, 8, 12, 4, 11, 7], 10); // true
  hasTargetSum([22, 19, 4, 6, 30], 25);   // true
  hasTargetSum([1, 2, 5], 4);              // false
*/

// Custom tests
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

