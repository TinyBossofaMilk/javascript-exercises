const removeFromArray = function(numsArr, numToRemove, ...moreNumstoRemove) {

    while(moreNumstoRemove.length > 0)
        {numsArr = removeFromArray(numsArr,moreNumstoRemove.pop());}

    const output = [];
    /*
    output = numsArr.filter( (num, index, ntr = numToRemove) => 
        {if(num === ntr)
            {}
        else
            {output.push(num);}
    );
    */

    for(num of numsArr)
    {
        if(num === numToRemove)
            {}
        else
            {output.push(num);}
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
