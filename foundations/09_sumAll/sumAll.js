const sumAll = function(firstNum, secondNum) {

    if (firstNum < 0 || secondNum < 0 ) 
        return 'ERROR';
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) return "ERROR";
    let sum = 0;

    if(firstNum < secondNum){
        
        for (let index = firstNum; index <= secondNum; index++) {
            sum += index; 
        }
        return sum;
    }
    else {
        
        for (let index = secondNum; index <= firstNum; index++) {
            sum += index; 
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
