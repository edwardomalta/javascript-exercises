const repeatString = function(string, numb) {
    let stringRepeated = "";
    if (numb < 0) return "ERROR"
    for (let i = 0; i < numb; i++) {
        stringRepeated += string;
    }
    return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
