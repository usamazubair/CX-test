
var array = [3,8,9,7,6];

function shiftRight (arr) {
  var arr1 = arr.slice(arr.length - 1);
  var arr2 = arr.slice(0, arr.length - 1);
  return arr1.concat(arr2);
}

var result = shiftRight(array);

console.log(result);