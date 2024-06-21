const fibonacci = function(num) {
    if (typeof(num)=="string") num = +num;
    if (num < 0) return "OOPS";
    arr = [0, 1 , 1];
    for (let i = 0; i < num-2; i++)
        {
             arr.push(arr[arr.length-1]+arr[arr.length-2]);
        }
    return(arr[num]);
};

// Do not edit below this line
module.exports = fibonacci;
