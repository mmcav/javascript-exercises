const findTheOldest = function(people) {
    let oldestPerson;
    for (person of people) {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        if (
            (oldestPerson === undefined) ||
            ((oldestPerson.yearOfDeath - oldestPerson.yearOfBirth) < (person.yearOfDeath - person.yearOfBirth))
        ) {
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
