function SumOfLargest(arr) {
    arr.sort((a,b) => b-a);
    return arr[0] + arr[1]
}

var result = SumOfLargest([3,7,1,5,11,19]);

console.log(result);