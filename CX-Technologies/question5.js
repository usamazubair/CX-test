var array = [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5];

function mostRepeatedNum(arr) {
    let map = new Map();
    let mostRepeatedNumber = 0;
    let keyWithMostRepeats = null;

    for(let i = 0 ; i <arr.length ; i ++) {
        const num = arr[i];
        let currentCount = map.get(arr[i]) ?? 0;
        const newCount = currentCount + 1;
        
        map.set(num, newCount);
        
        if(newCount > mostRepeatedNumber) {
            mostRepeatedNumber = newCount;
            keyWithMostRepeats = num;
        }
    }
    
    return keyWithMostRepeats;
}

var result =mostRepeatedNum(array);

// console.log(result);