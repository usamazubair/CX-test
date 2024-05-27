var string = "doctor";

function checkPaldo(string) {
    let left = 0;
    let right = string.length - 1;
    
    while(left < right) {
        if(string[left] !==  string[right]) {
            return "not palendrome"
        }
        
        left ++;
        right --;
    }
    return "palendrome";
}

var result = checkPaldo(string);

console.log(result);