
var array= [3, 4, 9 , 1, 7, 3 ,2 , 6]

function missingNumbers(arr) {
    arr.sort((a,b) => b - a);
    var missingVal = [];    
    
    for(let i = 0 ; i < arr[0]; i ++) {
        if(!arr.includes(i)) {
            missingVal.push(i);
        };
    }
    
    return missingVal;
}

var result = missingNumbers(array);
console.log(result);