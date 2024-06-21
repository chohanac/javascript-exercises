const getTheTitles = function(books) {
    const arr = [];
    for (items of books) {
        arr.push(items.title);
    }
    return arr; 
};

// Do not edit below this line
module.exports = getTheTitles;
