const removeFromArray = function(array, ...args) {
    let index;
    for (const arg of args) {
        index = array.indexOf(arg);
        if (index !== -1) array.splice(index, 1);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
