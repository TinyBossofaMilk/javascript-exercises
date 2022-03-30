const sumAll = function(num1, num2) {
    if(typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0)
        {return "ERROR";}

    let sum = 0;
    let biggerNum = Math.max(num1, num2);

    for(let smallerNum = (biggerNum == num1) ? num2 : num1;
        smallerNum <= biggerNum; smallerNum++)
        {sum += smallerNum;}

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
