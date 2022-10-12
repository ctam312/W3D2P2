/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// davids version utilizes shift:

function addToTwelve(arr) {
  //base case
  if (arr.length <= 1){
    debugger
    return false
  }
  //recursive case
  //if array has at least two elements
  if (arr[0] + arr[1] === 12){
    debugger
    return true
  } else {
    arr.shift();
    debugger
    return addToTwelve(arr)
    
  }
}

// //chris version utilizes .pop()
// function addToTwelve(arr) {
//   // Your code here
//   if (arr.length <= 1) {
//     return false;
//     debugger
//   } else if ((arr[arr.length - 2] + arr[arr.length - 1]) === 12) {
//     return true;
//     debugger
//   } else {
//     arr.pop();
//     return addToTwelve(arr);
//   }
// }

addToTwelve([1, 12, 4, 7, 6]); // false


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}