const getTheTitles = function(array) {
    result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[i].title;
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
