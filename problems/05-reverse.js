/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/


function reverse(string){ // define our function
  if (string.length === 0) return string;
  debugger
  let first = string[0];
  debugger
  let result = reverse(string.slice(1));    //tom t
  debugger
  return  result + first;    
}

//David's version
/* 
function reverse(str){
  if (str.length <= 0){
    return str;
  } else {
    let lastChar = str.slice(str.length - 1);
    let restOfStr = str.slice(0, str.length - 1);
    console.log('recursive step -->' + lastChar + ' ' + restOfStr)
    return lastChar + reverse(restOfStr);
  }
}
*/

reverse("house"); // "esuoh"
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}