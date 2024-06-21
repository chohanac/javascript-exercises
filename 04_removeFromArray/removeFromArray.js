let removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++)
    {
        let index = arr.indexOf(arguments[i]);
        while (index!=-1)
            {
                 arr = arr.slice(0,index).concat(arr.slice(index+1, arr.length));
                 index = arr.indexOf(arguments[i]);
            }    
    }
    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;


// most anime not good