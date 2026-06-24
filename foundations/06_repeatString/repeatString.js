const repeatString = function (string , num) {
    let numTimesStr = '';
    if (num < 0) 
        return 'ERROR';
    else 
        for (let index = 0; index < num; index++) {
            numTimesStr = numTimesStr.concat(string); 
        }
    return numTimesStr;
    
};

// Do not edit below this line
module.exports = repeatString;
