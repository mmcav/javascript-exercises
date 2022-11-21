const palindromes = function (phrase) {
    let leftIdx = 0;
    let rightIdx = phrase.length - 1;
    let leftCode;
    let rightCode;
    while (leftIdx < rightIdx) {
        leftCode = phrase.charCodeAt(leftIdx);
        if (leftCode < 65 || leftCode > 122 || (leftCode > 90 && leftCode < 97)) {
            leftIdx++;
            continue;
        }
        rightCode = phrase.charCodeAt(rightIdx);
        if (rightCode < 65 || rightCode > 122 || (rightCode > 90 && rightCode < 97)) {
            rightIdx--;
            continue;
        }
        if (phrase.charAt(leftIdx).toLowerCase() !== phrase.charAt(rightIdx).toLowerCase()) {
            return false;
        }
        leftIdx++;
        rightIdx--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
