const sumAll = function(one, two) {
    if (typeof(one) != "number" || typeof(two) != "number"
    || one < 0 || two < 0)
    {
        return "ERROR"
    } 
    if (two<one)
    {
        let hold = one;
        one = two;
        two = hold;
    }
    let num = 0;
    for (let i = one; i <= two; i++)
        {
            num+=i;
        }
    return num;
};

// Do not edit below this line
module.exports = sumAll;
