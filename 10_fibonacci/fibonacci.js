const fibonacci = function(num) {
    if (typeof num === "string") {
        num = parseInt(num);
    }
    if (typeof num !== "number") {
        return "input data type not supported";
    }
    if (isNaN(num) || num < 0) {
        return "OOPS";
    }
    let old = 1;
    let sum = 1;
    let tmp;
    for (let i = 2; i < num; i++) {
        tmp = sum;
        sum += old;
        old = tmp; 
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
