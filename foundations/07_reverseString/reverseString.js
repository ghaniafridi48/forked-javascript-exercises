const reverseString = function(string) {
    let revString = '' ; 
    for (let index = string.length-1; index >= 0 ; index--) {
        revString += string[index];  
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
