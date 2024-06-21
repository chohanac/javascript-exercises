const palindromes = function (words) {
    let forward = ""
    let backward = "";
    for (let i = 0; i < words.length; i++)
        {
            if (words[i].match(/[a-zA-Z0-9]/g))
                {
                    forward+=words[i];
                    backward = words[i]+backward;
                }
        }
    return forward.toLowerCase() == backward.toLowerCase();

};
// Do not edit below this line
module.exports = palindromes;
