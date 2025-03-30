const reverseString = function(word) {
    let tempArray = word.split("");
    let reversedString = "";
    
    for (let i = tempArray.length; i > 0; i--) {
        reversedString += tempArray[i-1];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
