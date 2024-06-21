const findTheOldest = function(people) {
    return(people.reduce((total, num, i) => { 
        console.log(people[i]["yearOfDeath"] - people["yearOfBirth"]);
        if (!people[i]["yearOfDeath"]) people[i]["yearOfDeath"] = new Date().getFullYear();
        return people[i]["yearOfDeath"] - people[i]["yearOfBirth"] > total["yearOfDeath"] - total["yearOfBirth"] ? num : total }, {yearOfBirth : 1, yearOfDeath: 1}));

};


// Do not edit below this line
module.exports = findTheOldest;
