const repeatString = function(word, n) {
    if (n < 0) {
        return 'ERROR';
    }
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
