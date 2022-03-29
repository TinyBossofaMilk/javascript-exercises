const repeatString = function(repeatWord, numRepeats) {
    let output = "";

    if(numRepeats < 0)
        {return "ERROR";}
    for(let i = 0; i < numRepeats; i++)
        {output += repeatWord;}
    return output;
};

// Do not edit below this line
module.exports = repeatString;
