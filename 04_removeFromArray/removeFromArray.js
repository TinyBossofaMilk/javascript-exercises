const removeFromArray = function(numsArr, numToRemove, ...moreNumstoRemove) {

    while(moreNumstoRemove.length > 0)
    {
        //let toRemove = moreNumstoRemove.pop();

        //if(typeof toRemove == Number)
        numsArr = removeFromArray(numsArr,moreNumstoRemove.pop());
    }
    //const output = numsArr.filter( (num, index, ntr =numToRemove) => {num != ntr;});
    const output = [];

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
